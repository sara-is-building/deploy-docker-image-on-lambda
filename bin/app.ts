#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LambdaWithContainerStack } from '../lib/lambda';
import { Constants } from '../lib/common/constants';

const app = new cdk.App();

new LambdaWithContainerStack (app, 'lambdaStack', {
        env: {
        account: Constants.CDK_ACCOUNT,
        region: Constants.CDK_REGION
    }
});
