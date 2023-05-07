const authenticationController = require('./AuthenticationController')

const app = require('../app');
const request = require('supertest');

describe('POST /transaction', () => {
  it('should create a new transaction', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNDkxMjE1LCJleHAiOjE2ODM0OTQyMTV9.ou2A2lfX_T9SLxn1UQvEeaLC0bxLlVGMIsc2iKx23gg'

    const data = {
      date: '2023-05-07',
      value: 100.00,
      description: 'Compra de produtos',
      type: 'debit'
    }

    const response = await request(app)
      .post('/transaction')
      .set('Content-Type', 'application/json')
      .set('x-access-token', token)
      .send(data)

    expect(response.status).toBe(201)
  })

  it('should return an error for invalid data', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNDg3Mzg1LCJleHAiOjE2ODM0ODc2ODV9.t1QPtgvublJ_Yu9OjlUCI0qK8heIdxKHg5Fj3vah2x'

    const data = {
      date: '2023-05-07',
      value: -100.00, // valor negativo deve gerar um erro
      description: 'Compra de produtos',
      type: 'expense'
    }

    const response = await request(app)
      .post('/transaction')
      .set('Content-Type', 'application/json')
      .set('x-access-token', token)
      .send(data)

    expect(response.status).toBe(400)
  })
})

describe('GET /balanceDaily', () => {

  it('should get a consolidated balance sheet', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNDg5NjgxLCJleHAiOjE2ODM0OTI2ODF9.iGy1y8kPyzf7gXPN8ACBi60dYrS8w5rAyIkSXSfWWsI'

    const response = await request(app)
      .get('/balanceDaily')
      .set('Content-Type', 'application/json')
      .set('x-access-token', token)

    expect(response.status).toBe(200)
  })

  it('should get a consolidated balance shee with invalid token', async () => {
    const token = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNDg3OTQxLCJleHAiOjE2ODM0OTA5NDF9.KaMqBqXwExjJW6GV408fqqWd0zpI41kShdYaxzknw6k'

    const response = await request(app)
      .get('/balanceDaily')
      .set('Content-Type', 'application/json')
      .set('x-access-token', token)

    expect(response.status).toBe(400)
  })


})