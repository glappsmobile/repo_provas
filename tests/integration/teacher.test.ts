import '../../src/setup.ts';
import { getConnection } from 'typeorm';
import supertest from 'supertest';
import app, { init } from '../../src/app';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe('GET /teachers', () => {
  test('returns 200', async () => {
    const result = await supertest(app).get('/teachers');
    expect(result.status).toEqual(200);
    expect(Array.isArray(result.body)).toBe(true);
  });
});


describe('GET /teachers/discipline/:disciplineId', () => {
  test('returns 200 with valid discplined ID', async () => {
    const result = await supertest(app).get('/teachers/discipline/1');
    expect(result.status).toEqual(200);
    expect(Array.isArray(result.body)).toBe(true);
  });

  test('returns 404 with invalid discplined ID', async () => {
    const result = await supertest(app).get('/teachers/discipline/5000');
    expect(result.status).toEqual(200);
    expect(Array.isArray(result.body)).toBe(true);
  });
});

