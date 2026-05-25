// Unit tests for Lambda handler
// Created by Tumisang Mohoto

const { handler } = require('./handler');

test('handler returns successful response', async () => {
  const event = { httpMethod: 'POST', body: '{"test":"data"}' };
  const result = await handler(event);
  
  expect(result.statusCode).toBe(200);
  expect(result.body).toContain('Welcome to my Serverless API');
  expect(result.body).toContain('Tumisang Mohoto');
});

test('handler handles GET requests', async () => {
  const event = { httpMethod: 'GET' };
  const result = await handler(event);
  
  expect(result.statusCode).toBe(200);
});
