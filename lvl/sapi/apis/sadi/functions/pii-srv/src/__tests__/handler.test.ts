import { APIGatewayProxyEvent } from "aws-lambda";
import handler from "../handler";

let mockEvent: APIGatewayProxyEvent;

beforeEach(() => {
  /** Create a mock event body */
  mockEvent = {
    body: JSON.stringify({
      firstName: "John",
      lastName: "Doe",
      email: "jdoe@gmail.com",
      password: "abcd1234",
    }),
  } as unknown as APIGatewayProxyEvent;
});

test(`Should return hello world response`, async () => {
  const expectedResponse = {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ error: {}, data: { message: "Hello World!" } }),
  };
  const result = await Promise.resolve(handler(mockEvent));
  expect(result).toEqual(expectedResponse);
});
