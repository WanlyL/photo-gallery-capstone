const request = require('supertest');
const express = require('express');
const User = require('../models/user');
const { ensureLoggedIn, verifyUserOrAdmin } = require('../middleware/auth');
jest.mock('../models/user');
jest.mock('../middleware/auth');

const app = express();
app.use(express.json());
app.use(require('../routes'));

describe('User Routes', () => {
  beforeEach(() => {
    ensureLoggedIn.mockImplementation((req, res, next) => next());
    verifyUserOrAdmin.mockImplementation((req, res, next) => next());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /users', () => {
    it('should return all users', async () => {
      User.findAll.mockResolvedValue([{ username: 'john', firstName: 'John', lastName: 'Doe' }]);
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ users: [{ username: 'john', firstName: 'John', lastName: 'Doe' }] });
    });
  });

  describe('GET /users/:username', () => {
    it('should return a specific user', async () => {
      User.get.mockResolvedValue({
        username: 'john', firstName: 'John', lastName: 'Doe', profileImage: 'img.jpg', bio: 'Hello', posts: [], likes: [], comments: [], followers: [], following: []
      });
      const response = await request(app).get('/john');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        user: {
          username: 'john', firstName: 'John', lastName: 'Doe', profileImage: 'img.jpg', bio: 'Hello', posts: [], likes: [], comments: [], followers: [], following: []
        }
      });
    });
  });

  describe('PATCH /users/:username/edit', () => {
    it('should update a user', async () => {
      User.update.mockResolvedValue({
        username: 'john', firstName: 'John', lastName: 'Doe', email: 'john@example.com', isAdmin: false
      });
      const response = await request(app)
        .patch('/john/edit')
        .send({ firstName: 'Johnny' });
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        user: {
          username: 'john', firstName: 'Johnny', lastName: 'Doe', email: 'john@example.com', isAdmin: false
        }
      });
    });
  });

  // Additional tests for DELETE, POST, etc.
});

