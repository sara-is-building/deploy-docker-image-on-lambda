import core = require('aws-cdk-lib');

export async function getHello() {

  return {
    statusCode: 200,
    body: JSON.stringify('Giggity!'),
  };
}
