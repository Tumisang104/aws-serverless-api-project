// Simple Lambda function for AWS Serverless API
// Created by Tumisang Mohoto

exports.handler = async (event) => {
  // Parse incoming request
  const httpMethod = event.httpMethod || 'GET';
  const body = event.body ? JSON.parse(event.body) : {};
  
  // Response object
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Welcome to my Serverless API!',
      method: httpMethod,
      data: body,
      timestamp: new Date().toISOString(),
      author: 'Tumisang Mohoto'
    })
  };
  
  return response;
};
