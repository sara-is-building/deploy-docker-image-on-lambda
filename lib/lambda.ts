import core = require('aws-cdk-lib');
import path from 'path';
import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import { DockerImageFunction, FunctionUrlAuthType, DockerImageCode } from 'aws-cdk-lib/aws-lambda'
import { Platform } from 'aws-cdk-lib/aws-ecr-assets';

export class LambdaWithContainerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    /// This lambda executes runs a simple program using a Docker Image.
    const exampleLambdaWithContainer = new DockerImageFunction(this, 'LambdaWithContainer', {
        functionName: 'exampleLambdaWithContainer',
        code: DockerImageCode.fromImageAsset(path.join(__dirname, '../'), {
          platform: Platform.LINUX_AMD64
        }),
      });

    // Define the Lambda function URL resource.
    const myFunctionUrl = exampleLambdaWithContainer.addFunctionUrl({
      //I wouldn't recommend having no auth in your Lambda, but I'm excluding it here for simplicity of this demo.
      authType: FunctionUrlAuthType.NONE,
    });

    // Define a CloudFormation output for your URL.
    new core.CfnOutput(this, 'exampleLambdaWithContainerFnUrl', {
      value: myFunctionUrl.url,
    });

}};



