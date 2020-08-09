import * as assert from 'assert';
import sift, {indexOf as siftIndexOf} from '..';

describe(__filename + '#', function() {

  it('doesn\'t sort arrays', function () {
    var values = sift({
      $or: [3, 2, 1]
    }, [9,8,7,6,5,4,3,2,1]);


    assert.equal(values.length, 3);
    assert.equal(values[0], 3);
    assert.equal(values[1], 2);
    assert.equal(values[2], 1);
  });

  it('can create a custom selector, and use it', function () {
    var sifter = sift({ age: { $gt: 5}}, function (item) {
      return item.person;
    });

    var people = [{ person: { age: 6 }}],
    filtered = people.filter(sifter);


    assert.equal(filtered.length, 1);
    assert.equal(filtered[0], people[0]);
  });

  it('throws an error if the operation is invalid', function () {

    var err;
    try {
      sift({$aaa:1})('b');
    } catch (e) {
      err = e;
    }

    assert.equal(err.message, 'Unknown operation $aaa');

  });

  it('can use a custom selector as the 3rd param', function () {

    var people = [{ person: { age: 6 }}];

    var filtered = sift({ age: { $gt: 5}}, people, function (item) {
      return item.person;
    });

    assert.equal(filtered.length, 1);
    assert.equal(filtered[0], people[0]);
  });

  it('can get the first index of a matching element', function () {
    var index = siftIndexOf({ val: { $gt: 5}}, [{val: 4}, {val: 3}, {val: 6}, {val: 7}]);

    assert.equal(index, 2);
  });

  it('returns -1 as index if no matching element is found', function () {
    var index = siftIndexOf({ val: { $gt: 7}}, [{val: 4}, {val: 3}, {val: 6}, {val: 7}]);

    assert.equal(index, -1);
  });

  it('can match empty arrays', function () {
    var statusQuery = {$or: [{status: {$exists: false}},
                             {status: []},
                             {status: {$in: ['urgent', 'completed', 'today']}}
                            ]};

    var filtered = sift(statusQuery, [{ status: [] },
                                      { status: ['urgent'] },
                                      { status: ['nope'] }
                                     ]);

    assert.equal(filtered.length, 2);
  });

  it('$ne: null does not hit when field is present', function(){
    var sifter = sift({age: {$ne: null}});

    var people = [
      {age: 'matched'},
      {missed: 1}
    ];
    var filtered = people.filter(sifter);

    assert.equal(filtered.length, 1);
    assert.equal(filtered[0].age, 'matched');
  });

  it('$ne does not hit when field is different', function () {
    var sifter = sift({ age: { $ne: 5 }});

    var people = [{ age: 5 }],
    filtered = people.filter(sifter);

    assert.equal(filtered.length, 0);
  });

  it('$ne does hit when field exists with different value', function () {
    var sifter = sift({ age: { $ne: 4 }});

    var people = [{ age: 5 }],
    filtered = people.filter(sifter);

    assert.equal(filtered.length, 1);
  });

  it('$ne does hit when field does not exist', function(){
    var sifter = sift({ age: { $ne: 5 }});

    var people = [{}],
      filtered = people.filter(sifter);

    assert.equal(filtered.length, 1);
  });

  it('$eq matches objects that serialize to the same value', function() {
    var counter = 0;
    function Book(name) {
      this.name = name;
      this.copyNumber = counter;
      this.toJSON = function() {
        return this.name; // discard the copy when serializing.
      };
      counter += 1;
    }

    var warAndPeace = new Book('War and Peace');

    var sifter = sift({ $eq: warAndPeace});

    var books = [ new Book('War and Peace')];
    var filtered = books.filter(sifter);

    assert.equal(filtered.length, 1);
  });

  it('$neq does not match objects that serialize to the same value', function() {
    var counter = 0;
    function Book(name) {
      this.name = name;
      this.copyNumber = counter;
      this.toJSON = function() {
        return this.name; // discard the copy when serializing.
      };
      counter += 1;
    }

    var warAndPeace = new Book('War and Peace');

    var sifter = sift({ $ne: warAndPeace});

    var books = [ new Book('War and Peace')];
    var filtered = books.filter(sifter);

    assert.equal(filtered.length, 0);
  });

  // https://gist.github.com/jdnichollsc/00ea8cf1204b17d9fb9a991fbd1dfee6
  it('returns a period between start and end dates', function() {

    var product = {
      'productTypeCode': 'productTypeEnergy',
      'quantities': [
        {
          'period': {
            'startDate': new Date('2017-01-13T05:00:00.000Z'),
            'endDate': new Date('2017-01-31T05:00:00.000Z'),
            'dayType': {
              'normal': true,
              'holiday': true
            },
            'specificDays': [
              'monday',
              'wednesday',
              'friday'
            ],
            'loadType': {
              'high': true,
              'medium': false,
              'low': false
            }
          },
          'type': 'DemandPercentage',
          'quantityValue': '44'
        },
        {
          'period': {
            'startDate': new Date('2017-01-13T05:00:00.000Z'),
            'endDate': new Date('2017-01-31T05:00:00.000Z'),
            'dayType': {
              'normal': true,
              'holiday': true
            },
            'loadType': {
              'high': false,
              'medium': true,
              'low': false
            }
          },
          'type': 'Value',
          'quantityValue': '22'
        }
      ]
    };

    var period = {
      'startDate': new Date('2017-01-08T05:00:00.000Z'),
      'endDate': new Date('2017-01-29T05:00:00.000Z'),
      'dayType': {
        'normal': true,
        'holiday': true
      },
      'loadType': {
        'high': true,
        'medium': false,
        'low': true
      },
      specificPeriods : ['3', '4', '5-10']
    };


    var results = sift({
      $and: [ 
        { 'period.startDate': { $lte : period.endDate } }, 
        { 'period.endDate': { $gte : period.startDate } } 
      ]
    }, product.quantities);
    
    assert.equal(results.length, 2);
  });
});
