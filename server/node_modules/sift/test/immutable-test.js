import * as assert from 'assert';
import * as Immutable from 'immutable';

import sift from '..';
const ObjectID = require('bson').ObjectID;

describe(__filename + '#', function() {



  var topic = Immutable.List([1, 2, 3, 4, 5, 6, 6, 4, 3]);


  var persons = Immutable.fromJS([{ person: {age: 3} }, { person: {age: 5} }, { person: {age: 8} }]);

  it('works with Immutable.Map in a Immutable.List', function() {
    assert.equal(sift({ 'person.age' : { $gt: 4 } }, persons).size, 2);
    assert.equal(persons.filter(sift({ 'person.age' : { $gt: 4 } })).size, 2);
  });
});
