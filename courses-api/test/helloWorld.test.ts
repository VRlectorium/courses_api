import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/app';

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