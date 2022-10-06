import request from 'supertest';
import { App } from './util/app';

describe('Index (/)', () => {
  it("should return 'Hello World!'", async () => {
    const response = await request(App).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
