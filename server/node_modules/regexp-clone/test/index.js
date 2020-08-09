
const assert = require('assert')
const clone = require('../');

describe('regexp-clone', function(){
  function hasEqualSource (a, b) {
    assert.ok(a !== b);
    assert.equal(a.source, b.source);
  }

  function isIgnoreCase (a) {
    assert.ok(a.ignoreCase);
  }

  function isGlobal (a) {
    assert.ok(a.global);
  }

  function isMultiline (a) {
    assert.ok(a.multiline);
  }

  function isDotAll (a) {
    assert.ok(a.dotAll);
  }

  function isUnicode (a) {
    assert.ok(a.unicode);
  }

  function isSticky(a) {
    assert.ok(a.sticky);
  }

  function testFlag (a, method) {
    const b = clone(a);
    hasEqualSource(a, b);
    method(a);
    method(b);
  }

  function lastIndex(a) {
    a.test('this string hi there');
    assert.strictEqual(a.lastIndex, 3);
    const b = clone(a);
    assert.strictEqual(b.lastIndex, 3);
    assert.strictEqual(a.lastIndex, 3);
    b.test('this string hi there');
    assert.strictEqual(b.lastIndex, 14);
    assert.strictEqual(a.lastIndex, 3);
  }

  function allFlags(a) {
    const b = clone(a);
    hasEqualSource(a, b);
    testFlag(b, isIgnoreCase);
    testFlag(b, isGlobal);
    testFlag(b, isMultiline);
    testFlag(b, isDotAll);
    testFlag(b, isUnicode);
    testFlag(b, isSticky);
  }

  function noFlags(a) {
    const b = clone(a);
    hasEqualSource(a, b);
    assert.ok(!b.ignoreCase);
    assert.ok(!b.global);
    assert.ok(!b.multiline);
    assert.ok(!b.dotAll);
    assert.ok(!b.unicode);
    assert.ok(!b.sticky);
  }

  describe('literals', function(){
    it('ignoreCase flag', function(done){
      const a = /hello/i;
      testFlag(a, isIgnoreCase);
      done();
    })
    it('global flag', function(done){
      const a = /hello/g;
      testFlag(a, isGlobal);
      done();
    })
    it('multiline flag', function(done){
      const a = /hello/m;
      testFlag(a, isMultiline);
      done();
    })
    it('dotAll flag', function(done){
      const a = /hello/s;
      testFlag(a, isDotAll);
      done();
    })
    it('unicode flag', function(done){
      const a = /hello/u;
      testFlag(a, isUnicode);
      done();
    })
    it('sticky flag', function(done){
      const a = /hello/y;
      testFlag(a, isSticky);
      done();
    })
    it('no flags', function(done){
      const a = /hello/;
      noFlags(a);
      done();
    })
    it('all flags', function(done){
      const a = /hello/gimsuy;
      allFlags(a);
      done();
    })
    it('lastIndex', function(done) {
      const a = /hi/g;
      lastIndex(a);
      done();
    })
  })

  describe('instances', function(){
    it('ignoreCase flag', function(done){
      const a = new RegExp('hello', 'i');
      testFlag(a, isIgnoreCase);
      done();
    })
    it('global flag', function(done){
      const a = new RegExp('hello', 'g');
      testFlag(a, isGlobal);
      done();
    })
    it('multiline flag', function(done){
      const a = new RegExp('hello', 'm');
      testFlag(a, isMultiline);
      done();
    })
    it('dotAll flag', function(done){
      const a = new RegExp('hello', 's');
      testFlag(a, isDotAll);
      done();
    })
    it('unicode flag', function(done){
      const a = new RegExp('hello', 'u');
      testFlag(a, isUnicode);
      done();
    })
    it('sticky flag', function(done){
      const a = new RegExp('hello', 'y');
      testFlag(a, isSticky);
      done();
    })
    it('no flags', function(done){
      const a = new RegExp('hmm');
      noFlags(a);
      done();
    })
    it('all flags', function(done){
      const a = new RegExp('hello', 'misguy');
      allFlags(a);
      done();
    })
    it('lastIndex', function(done) {
      const a = new RegExp('hi', 'g');
      lastIndex(a);
      done();
    })
  })
})

