import { APIGatewayProxyResult } from "aws-lambda";

const response = {
  success: (
    statusCode: number = 200,
    headers: any = {},
    data: any = {}
  ): APIGatewayProxyResult => {
    /** Generate default response with no data */
    const res: { statusCode: number; headers: any; body: any } = {
      statusCode,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({}),
    };

    /** Add body if statusCode is not 204 and there is data to add */
    if (statusCode !== 204) res.body = JSON.stringify({ error: {}, data });
    return res;
  },
  error: (
    statusCode: number = 500,
    headers: any = {},
    err?: Error
  ): APIGatewayProxyResult => {
    /** Log the error */
    console.log(err);
    /** Generate default response with no error */
    const res: { statusCode: number; headers: any; body: any } = {
      statusCode,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({ error: {}, data: {} }),
    };

    /** If statusCode is 500, return a general internal server error */
    if (statusCode === 500) {
      res.body = JSON.stringify({
        error: {
          message:
            "There was an internal server error. Please try again later. If the problem persists, please contact technical support.",
        },
        data: {},
      });
    }

    /** If statusCode is not 500 and there is an error message, return it */
    if (statusCode !== 500 && err.message) {
      res.body = JSON.stringify({ error: { message: err.message }, data: {} });
    }

    return res;
  },
};

export default response;
