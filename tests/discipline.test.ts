import { getConnection } from 'typeorm';
import supertest from 'supertest';
import '../src/setup.ts';
import app, { init } from '../src/app';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe('GET /disciplines', () => {
  test('returns 200', async () => {
    const result = await supertest(app).get('/disciplines');
    expect(result.status).toEqual(200);
    expect(Array.isArray(result.body)).toBe(true);
  });
});
