# Getting Started with Docker and AWS Lambda

This project shows a simple example of how to use a Docker Image to run code on an AWS Lambda function using CDK.

This is for my Medium article - Getting Started with Docker and AWS Lambda
Find it here: https://medium.com/gitconnected/getting-started-with-docker-and-aws-lambda-46df3efcbe1f

----

### Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template


----
### To test the Lambda locally using Docker:

#Build the docker image: 
`docker buildx build -t "giggity:latest" .`

#Spin up a container: 
`docker run -p 9000:8080 giggity`

#Then curl the following url: 
`curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'`

#You should get the following response:
`{"statusCode":200,"body":"\"Giggity!\""}`

