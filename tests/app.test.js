const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return hello world message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hello World from GitHub Actions Demo!');
  });
});

describe('GET /api/status', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
    expect(res.body).toHaveProperty('timestamp');
  });
});
