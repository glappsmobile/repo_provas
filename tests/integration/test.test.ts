import '../../src/setup.ts';
import app, { init } from '../../src/app';
import { getConnection, getManager } from 'typeorm';
import supertest from 'supertest';
import * as testFactory from '../factories/test.factory';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getManager().query(
    `DELETE FROM tests;`
  );
  await getConnection().close();
});

describe('POST /tests', () => {
  test('returns 201 with valid data', async () => {
    const body = testFactory.createBody();
    const result = await supertest(app).post('/tests').send(body);
    expect(result.status).toEqual(201);
  });
});

describe('GET /tests', () => {
  test('returns 200', async () => {
    const result = await supertest(app).get('/tests');
    expect(result.status).toEqual(200);
    expect(Array.isArray(result.body)).toBe(true);
  });
});

describe('GET /tests/discipline/:disciplineId', () => {
  test('returns 200 with valid disciplineId', async () => {
    const result = await supertest(app).get('/tests/discipline/1');
    expect(result.status).toEqual(200);
    expect(Array.isArray(result.body)).toBe(true);
  });

  test('returns 404 with invalid disciplineId', async () => {
    const result = await supertest(app).get('/tests/discipline/5000');
    expect(result.status).toEqual(404);
  });
});

describe('GET /tests/teacher/:teacherId', () => {
  test('returns 200 with valid teacherId', async () => {
    const result = await supertest(app).get('/tests/teacher/1');
    expect(result.status).toEqual(200);
    expect(Array.isArray(result.body)).toBe(true);
  });

  test('returns 404 with invalid teacherId', async () => {
    const result = await supertest(app).get('/tests/teacher/5000');
    expect(result.status).toEqual(404);
  });
});

