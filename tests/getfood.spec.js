import chai from 'chai';
import request from 'supertest';
import app from '../index';


const { expect } = chai;


describe('Fecth meals', () => {
  it('should get the default welcome message', async () => {
    const res = await request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200);
    expect(res.body).to.have.property('message')
    expect(res.body.message).to.equal('Welcome to my meal app')
  });
  it('should fetch meal with the least number of ingredients', async () => {
    const res = await request(app)
      .get('/api/v1/food')
      .set('Accept', 'application/json')
      .expect(200);
    expect(res.body).to.have.property('meals')
    expect(res.body.meals).to.be.an('array')
  });
  it('should return error message for invalid route', async () => {
    const res = await request(app)
      .get('/api/v1/foods')
      .set('Accept', 'application/json')
      .expect(404);
    expect(res.body).to.have.property('errors')
    expect(res.body.errors.message).to.equal('Not Found')
  });
});
