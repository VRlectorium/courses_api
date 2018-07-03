const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../src/app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {
    ['/courses', '/subjects'].forEach(el => {
        return it(`${el} should be json`, () => {
            chai.request(app).get(el)
            .then(res => {
                expect(res.type).to.eql('application/json');
            });
        });
    })
})