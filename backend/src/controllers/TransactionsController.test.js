const authenticationController = require('./AuthenticationController')

const app = require('../app');
const request = require('supertest');

describe('POST /transaction', () => {
  it('should create a new transaction', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNDg3OTQxLCJleHAiOjE2ODM0OTA5NDF9.KaMqBqXwExjJW6GV408fqqWd0zpI41kShdYaxzknw6k'

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
