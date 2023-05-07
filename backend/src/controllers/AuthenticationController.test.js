const authenticationController = require('./AuthenticationController')

const app = require('../app');
const request = require('supertest');

describe('POST /authentication', () => {
  it('should return a token when given valid credentials', async () => {
    const response = await request(app)
      .post('/authentication')
      .send({ username: 'adm', password: '123' })
      .expect(200);

    expect(response.body).toHaveProperty('token');
  });

  it('should return a 401 error when given invalid credentials', async () => {
    await request(app)
      .post('/authentication')
      .send({ username: 'admk', password: '123456' })
      .expect(401);
  });
});
