var expect = require('expect.js')

before(function(){

})

describe('Test#expect.js', function(){
	it('tests ok', function(){
		expect(1).to.be.ok()
		expect(true).to.be.ok()
		expect({}).to.be.ok()
	})

	it('tests not ok', function(){
		expect(null).to.not.be.ok()
		expect(NaN).to.not.be.ok()
		expect(0).to.not.be.ok()
	})

	it('tests be/equal', function(){
		expect(1).to.be(1)
		expect(1+2).to.equal(3)
	})

	it('tests eql(loose equal)', function(){
		expect('1').to.eql(1)
		expect([1, 2]).to.eql([1, 2])
		expect({a:'b'}).to.eql({a:'b'})
	})

	it('tests type with "a/an"', function() {
		expect(1).to.be.a('number')
		expect([]).to.be.an('array')
		expect([]).to.be.an('object') // it works because it uses typeof

		// a/an can be used with constructors
	})

	it('tests string match', function() {
		expect('3.14.15').to.match(/[0-9]+\.[0-9]+\.[0-9]+/)
	})

	it('tests containing element of list item', function() {
		expect([1, 2, 3]).to.contain(2)
		expect('hello world').to.contain('lo')
	})

	it('tests array length', function(){
		expect([1, 2, 3, 4, 5]).to.have.length(5)
	})

	it('tests empty', function() {
		expect([]).to.be.empty();
		expect({}).to.be.empty();
		expect({ length: 0, duck: 'typing' }).to.be.empty();
		expect({ my: 'object' }).to.not.be.empty();
		expect([1,2,3]).to.not.be.empty();
	})

	it('tests properties', function() {
		expect({a: 'b'}).to.have.property('a');
		expect({a: 12}).to.have.property('a', 12);
	})

	it('tests keys', function() {
		expect({ a: 'b' }).to.have.key('a');
		expect({ a: 'b', c: 'd' }).to.only.have.keys('a', 'c');
		expect({ a: 'b', c: 'd' }).to.only.have.keys(['a', 'c']);
		expect({ a: 'b', c: 'd' }).to.have.key('a');
	})

	it('tests throwing exceptions', function() {
		fn = function() { 
			throw SyntexError()
		}
		expect(fn).to.throwException(); // synonym of throwException
		expect(fn).to.throwError(); // synonym of throwException
		expect(fn).to.throwException(function (e) { // get the exception object
			//expect(e).to.be.a(SyntaxError);
		});
		//expect(fn).to.throwException(/matches the exception message/);

		fn2 = function() {}
		expect(fn2).to.not.throwException();
	})

	it('tests args', function() {
		fn = function(a, b) {
			if (a == 1) throw Error()
		}

		expect(fn).withArgs(1, 2).to.throwException();
		expect(fn).withArgs(6, 7).to.not.throwException();
	})

	it('tests within a range', function() {
		expect(1).to.be.within(0, Infinity);
	})

	it('tests size of number', function() {
		expect(3).to.be.above(0);
		expect(5).to.be.greaterThan(3);

		expect(0).to.be.below(3);
		expect(1).to.be.lessThan(3);
	})

	it('tests failure', function() {
		//expect().fail()
		//expect().fail("Custom failure message")
	})
})

function add(a, b) {
	return a + b
}

describe('Mocha', function(){
	before('before', function(){ //<- you can add name to before

	})

	after(function name(){ //<- name is shown in the test

	})

	beforeEach(function(done){
		done() //<- async hook
	})

	afterEach(function(){

	})

	it('async function', function(done){
		// do anything you want
		done();
	})

	var tests = [
		{a:1, b:2, r:3},
		{a:5, b:12, r:17},
		{a:6, b:-1, r:5},
	]

	tests.forEach(function(test){
		it('adds ' + test.a + ', ' + test.b + ' correctly', function() {
			expect(add(test.a, test.b)).to.be.equal(test.r)
		})
	})
})

// describe.only or it.only => it will run only the test with only. more than 2 only will result in unexpected result. 
// describe.skip or it.skip => don't run the tests
// this.retries(4) -> number of retries
// setTimeout(done, 500) -> test time out. 