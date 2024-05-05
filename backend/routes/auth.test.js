const request = require('supertest');
const express = require('express');
const app = express();
const router = require('./yourRouterFile'); 

// Mocking dependencies and middleware
jest.mock('jsonschema');
jest.mock('../expressError');
jest.mock('../models/user');
jest.mock('../helpers/token');

app.use('/auth', router);

// Testing /auth/token endpoint
describe('POST /auth/token', () => {
  test('returns JWT token when valid credentials are provided', async () => {
    // Mocking request body
    const reqBody = {
      username: 'testuser',
      password: 'testpassword'
    };

    // Mocking User.authenticate function to return a user
    User.authenticate.mockResolvedValueOnce({ username: reqBody.username });

    const response = await request(app)
      .post('/auth/token')
      .send(reqBody);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  test('returns 400 Bad Request when invalid credentials are provided', async () => {
    // Mocking request body
    const reqBody = {
      username: 'testuser',
      password: 'invalidpassword'
    };

    // Mocking User.authenticate function to throw an error
    User.authenticate.mockRejectedValueOnce(new Error('Invalid credentials'));

    const response = await request(app)
      .post('/auth/token')
      .send(reqBody);

    expect(response.status).toBe(400);
  });
});


describe('POST /auth/register', () => {
  test('returns JWT token when valid user data is provided', async () => {
    const reqBody = {
      username: 'testuser',
      password: 'testpassword',
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com'
    };

    // Mocking User.register function to return a new user
    User.register.mockResolvedValueOnce({ ...reqBody, isAdmin: false });

    const response = await request(app)
      .post('/auth/register')
      .send(reqBody);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('token');
  });

  test('returns 400 Bad Request when invalid user data is provided', async () => {
    // Mocking request body
    const reqBody = {
      username: 'testuser',
      password: 'testpassword',
      // Missing required field: email
      firstName: 'Test',
      lastName: 'User'
    };

    // Mocking User.register function to throw an error
    User.register.mockRejectedValueOnce(new Error('Invalid user data'));

    const response = await request(app)
      .post('/auth/register')
      .send(reqBody);

    expect(response.status).toBe(400);
  });
});
