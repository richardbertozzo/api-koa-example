const chai = require('chai');
const request = require('supertest');

const app = require('../src/app');

const { expect } = chai;

describe('Testing routes server', () => {
    describe('GET /animals -', () => {
        it('It should return 200 and a list of animals', (done) => {
            request(app)
                .get('/animals')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('array');
                    expect(res.body).to.have.lengthOf(3);

                    done();
                });
        });
    });
});
