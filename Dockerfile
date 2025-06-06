# Use a NodeJS 20.x runtime
FROM public.ecr.aws/lambda/nodejs:20

# Copy the function code to the LAMBDA_TASK_ROOT directory
# This environment variable is provided by the lambda base image
COPY "../resources/handlers/hello.js" ${LAMBDA_TASK_ROOT}

# Set the CMD to the function handler
CMD ["hello.getHello"]
