const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FullName', () => {
	it('should return an error if  arg is empty', () => {
		expect(formatFullname()).to.equal('Error');
	});

	it('should return correct name', () => {
		expect(formatFullname('John Doe')).to.equal('John Doe');
		expect(formatFullname('JOHN DOE')).to.equal('John Doe');
		expect(formatFullname('JohN DoE')).to.equal('John Doe');
	});

	it('should return an error if "fullName" is not a string', () => {
		if (typeof content !== 'string') return 'Error';
		expect(formatFullname(undefined)).to.equal('Error');
		expect(formatFullname(12)).to.equal('Error');
		expect(formatFullname({})).to.equal('Error');
		expect(formatFullname([])).to.equal('Error');
		expect(formatFullname(function () {})).to.equal('Error');
	});

	it('should return an error if data format is incorrect', () => {
		expect(formatFullname('John Doe John')).to.equal('Error');
		expect(formatFullname('John')).to.equal('Error');
	});
});
