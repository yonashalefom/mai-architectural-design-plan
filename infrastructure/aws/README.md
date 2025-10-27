# AWS Infrastructure

CloudFormation template and ECS task definitions for deploying Magnoli to AWS.

## Services

- RDS PostgreSQL - Production database
- ElastiCache Redis - Cache and BullMQ queue broker
- ECS Fargate - Container hosting for API and web apps
- EC2 Load Balancer - Request routing
- S3 - Static assets and backups
- CloudWatch - Logging and monitoring

## Deployment

\`\`\`bash
aws cloudformation create-stack --stack-name magnoli --template-body file://cloudformation.yml
\`\`\`

