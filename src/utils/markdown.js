import { marked } from 'marked';
import { blogsData, getBlogById } from '../data/blogs';
import { projectsData, getProjectById } from '../data/projects';
import matter from 'gray-matter';

// Configure marked options
marked.setOptions({
  breaks: true,  // Convert line breaks to <br>
  gfm: true,     // Enable GitHub Flavored Markdown
});

// Blog post data
const blogPosts = [
  {
    slug: 'getting-started-with-aws-lambda',
    title: 'Getting Started with AWS Lambda',
    date: '2024-03-15',
    image: '/images/blog/aws-lambda.jpg',
    excerpt: 'Learn how to create and deploy your first AWS Lambda function with practical examples and best practices.',
    topics: ['AWS', 'Serverless', 'DevOps'],
    content: `# Getting Started with AWS Lambda

AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. In this guide, we'll walk through creating and deploying your first Lambda function.

## What is AWS Lambda?

AWS Lambda is a compute service that lets you run code without provisioning or managing servers. Lambda automatically runs your code and scales with your application's usage.

## Prerequisites

Before we begin, make sure you have:
- An AWS account
- Basic knowledge of JavaScript/Node.js
- AWS CLI installed and configured

## Creating Your First Lambda Function

1. Navigate to the AWS Lambda Console
2. Click "Create function"
3. Choose "Author from scratch"
4. Enter function name and runtime
5. Click "Create function"

## Writing the Function Code

Here's a simple example of a Lambda function:

\`\`\`javascript
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
\`\`\`

## Testing the Function

1. Click "Test" in the Lambda console
2. Create a new test event
3. Run the test and verify the output

## Best Practices

- Keep functions focused and small
- Use environment variables for configuration
- Implement proper error handling
- Monitor function performance
- Set appropriate timeout values

## Deployment Strategies

- Use Infrastructure as Code (IaC)
- Implement CI/CD pipelines
- Version your functions
- Use staging environments

## Monitoring and Logging

- Use CloudWatch Logs
- Set up alarms
- Monitor execution time
- Track error rates

## Security Best Practices

- Follow the principle of least privilege
- Use IAM roles effectively
- Encrypt environment variables
- Regular security audits

## Cost Optimization

- Optimize memory allocation
- Monitor execution time
- Use provisioned concurrency when needed
- Implement proper timeout values

## Conclusion

AWS Lambda provides a powerful way to run code without managing servers. By following these best practices and guidelines, you can build efficient and scalable serverless applications.

## Next Steps

- Explore API Gateway integration
- Learn about Step Functions
- Implement custom runtimes
- Explore other serverless services`
  },
  {
    slug: 'ci-cd-pipeline-best-practices',
    title: 'CI/CD Pipeline Best Practices',
    date: '2024-03-20',
    image: '/images/blog/cicd.jpg',
    excerpt: 'Discover essential best practices for building robust CI/CD pipelines that improve development efficiency and code quality.',
    topics: ['DevOps', 'CI/CD', 'Automation'],
    content: `# CI/CD Pipeline Best Practices

Continuous Integration and Continuous Deployment (CI/CD) pipelines are essential for modern software development. Let's explore best practices for building robust pipelines.

## Understanding CI/CD

CI/CD combines continuous integration (automating code integration) with continuous deployment (automating application deployment).

## Key Components

### 1. Version Control
- Use feature branches
- Implement branch protection
- Regular commits
- Clear commit messages

### 2. Automated Testing
\`\`\`yaml
# Example GitHub Actions workflow
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: |
          npm install
          npm test
\`\`\`

### 3. Code Quality Checks
- Static code analysis
- Code coverage
- Style checking
- Security scanning

## Pipeline Stages

1. Build
2. Test
3. Security Scan
4. Deploy to Staging
5. Integration Tests
6. Deploy to Production

## Security Considerations

- Secure secrets management
- Regular dependency updates
- Security scanning
- Access control

## Monitoring and Metrics

- Pipeline performance
- Success/failure rates
- Deployment frequency
- Mean time to recovery

## Best Practices

1. Keep pipelines fast
2. Fail early
3. Maintain consistency
4. Automate everything
5. Version your infrastructure

## Infrastructure as Code

\`\`\`yaml
# Example AWS CDK code
import * as cdk from 'aws-cdk-lib';
import * as pipelines from 'aws-cdk-lib/pipelines';

export class CicdPipelineStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.gitHub('owner/repo', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });
  }
}
\`\`\`

## Deployment Strategies

- Blue-Green Deployment
- Canary Releases
- Rolling Updates
- Feature Flags

## Testing Strategies

- Unit Tests
- Integration Tests
- End-to-End Tests
- Performance Tests

## Documentation

- Pipeline documentation
- Deployment procedures
- Rollback processes
- Troubleshooting guides

## Conclusion

A well-designed CI/CD pipeline improves development efficiency, code quality, and deployment reliability. Regular reviews and updates ensure it remains effective.

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [AWS CodePipeline](https://aws.amazon.com/codepipeline/)
- [Jenkins Documentation](https://www.jenkins.io/doc/)`
  }
];

// Project data
const projects = [
  {
    slug: 'cloud-native-portfolio',
    title: 'Cloud-Native Portfolio & Blog Platform',
    date: '2024-03-01',
    image: '/images/projects/portfolio.jpg',
    excerpt: 'A modern portfolio and blog platform built with React and AWS, showcasing DevOps best practices and cloud-native architecture.',
    topics: ['AWS', 'React', 'DevOps', 'IaC'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://your-portfolio-url.com',
    content: `# Cloud-Native Portfolio & Blog Platform

A modern, cloud-native portfolio and blog platform that demonstrates best practices in DevOps, CI/CD, and cloud infrastructure management.

## Project Overview

This portfolio platform is built with a focus on cloud-native architecture, automated deployments, and modern DevOps practices. It showcases both technical expertise and project management capabilities.

## Key Technologies

### Frontend Stack
- React with TypeScript
- Styled Components
- Markdown-based content management
- Responsive design
- Modern UI/UX principles

### Infrastructure & DevOps
- AWS Services (S3, CloudFront, Route 53, ACM)
- Infrastructure as Code using AWS CDK
- CI/CD with GitHub Actions
- Monitoring with CloudWatch
- Security with AWS IAM and WAF

## CI/CD Pipeline

The project implements a robust CI/CD pipeline that includes:

- Automated testing and code quality checks
- Infrastructure deployment with AWS CDK
- Blue-green deployment strategy
- Automated rollbacks
- Security scanning

## Monitoring & Observability

Comprehensive monitoring setup including:

- CloudWatch dashboards
- Real-time error tracking
- Performance monitoring
- Custom alerts and notifications

## Security Measures

- SSL/TLS encryption
- WAF rules for threat protection
- IAM roles and policies
- Regular security audits
- Automated vulnerability scanning

## Performance Optimization

- CDN distribution
- Image optimization
- Caching strategies
- Lazy loading
- Code splitting

## Disaster Recovery

- Multi-region backup
- Automated snapshots
- Recovery procedures
- Regular DR testing

## Impact & Results

- 99.99% uptime achievement
- 80% reduction in deployment time
- Sub-second load times
- Improved security posture

## Future Enhancements

- Container orchestration with ECS/EKS
- Enhanced monitoring with ELK stack
- Automated cost optimization
- Advanced caching strategies`
  },
  {
    slug: 'aws-serverless-api',
    title: 'AWS Serverless API Platform',
    date: '2024-02-15',
    image: '/images/projects/serverless-api.jpg',
    excerpt: 'A scalable serverless API platform built with AWS Lambda, API Gateway, and DynamoDB, featuring automated deployment and monitoring.',
    topics: ['AWS', 'Serverless', 'DevOps', 'Node.js'],
    github: 'https://github.com/yourusername/serverless-api',
    demo: 'https://api.your-domain.com',
    content: `# AWS Serverless API Platform

A highly scalable and cost-effective serverless API platform leveraging AWS services and modern DevOps practices.

## Project Overview

This serverless API platform demonstrates the implementation of microservices architecture using AWS Lambda and API Gateway, with automated deployment and comprehensive monitoring.

## Architecture

### Core Services
- AWS Lambda for compute
- API Gateway for REST endpoints
- DynamoDB for data storage
- CloudWatch for monitoring
- S3 for file storage

### Key Features
- Serverless architecture
- Auto-scaling capabilities
- Pay-per-use pricing model
- Real-time monitoring
- Automated deployments

## Infrastructure as Code

The entire infrastructure is defined using AWS CDK:

\`\`\`typescript
import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class ServerlessApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda Function
    const handler = new lambda.Function(this, 'Handler', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.handler',
    });

    // API Gateway
    const api = new apigateway.RestApi(this, 'Api', {
      restApiName: 'Serverless API',
    });

    api.root.addMethod('GET', new apigateway.LambdaIntegration(handler));
  }
}
\`\`\`

## CI/CD Pipeline

Automated deployment pipeline using GitHub Actions:

\`\`\`yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to AWS
        run: |
          npm ci
          npm run build
          npm run deploy
\`\`\`

## Security Implementation

- API Key authentication
- IAM roles and policies
- Request validation
- Rate limiting
- WAF integration

## Monitoring & Logging

### CloudWatch Integration
- Custom metrics
- Log aggregation
- Alert configuration
- Performance tracking

### Observability
- Distributed tracing
- Error tracking
- Performance metrics
- Cost monitoring

## Performance Optimization

- Function concurrency management
- Cold start optimization
- Database connection pooling
- Caching strategies
- Response compression

## Cost Management

- Pay-per-use model
- Auto-scaling configuration
- Resource optimization
- Cost allocation tags
- Budget alerts

## Testing Strategy

- Unit tests for Lambda functions
- Integration tests for API endpoints
- Load testing with Artillery
- Security testing
- Chaos engineering

## Documentation

- API documentation with Swagger/OpenAPI
- Deployment procedures
- Troubleshooting guides
- Architecture diagrams
- Security protocols

## Results & Impact

- 99.9% uptime achievement
- Sub-100ms response times
- 70% cost reduction compared to traditional architecture
- Zero downtime deployments
- Automatic scaling handling 10x traffic spikes

## Future Enhancements

- GraphQL API integration
- WebSocket support
- Enhanced authentication methods
- Machine learning capabilities
- Multi-region deployment`
  }
];

// Convert markdown to HTML
export const markdownToHtml = (markdown) => {
  if (!markdown) return '';
  return marked(markdown);
};

// Load markdown content from file
export const loadMarkdownContent = async (contentPath) => {
  try {
    const response = await fetch(contentPath);
    if (!response.ok) {
      throw new Error(`Failed to load markdown content: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown content:', error);
    return '';
  }
};

// Get blog content as HTML
export const getBlogContentAsHtml = async (blogId) => {
  const blog = getBlogById(blogId);
  if (!blog) return null;

  const content = await loadMarkdownContent(blog.contentPath);
  return {
    ...blog,
    content,
    contentHtml: markdownToHtml(content)
  };
};

// Get project content as HTML
export const getProjectContentAsHtml = async (projectId) => {
  const project = getProjectById(projectId);
  if (!project) return null;

  const content = await loadMarkdownContent(project.contentPath);
  return {
    ...project,
    content,
    contentHtml: markdownToHtml(content)
  };
};

// Get all blogs with content
export const getAllBlogsWithContent = async () => {
  const blogs = [];
  for (const blog of blogsData) {
    const content = await loadMarkdownContent(blog.contentPath);
    blogs.push({
      ...blog,
      content,
      contentHtml: markdownToHtml(content)
    });
  }
  return blogs;
};

// Get all projects with content
export const getAllProjectsWithContent = async () => {
  const projects = [];
  for (const project of projectsData) {
    const content = await loadMarkdownContent(project.contentPath);
    projects.push({
      ...project,
      content,
      contentHtml: markdownToHtml(content)
    });
  }
  return projects;
};

// Get all blog posts
export const getAllBlogPosts = async () => {
  try {
    return blogPosts.map(post => ({
      ...post,
      content: marked(post.content)
    })).sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return []; // Return empty array instead of throwing
  }
};

// Get a single blog post by slug
export const getBlogPostBySlug = async (slug) => {
  try {
    const post = blogPosts.find(post => post.slug === slug);
    if (!post) return null;
    
    return {
      ...post,
      content: marked(post.content)
    };
  } catch (error) {
    console.error(`Error loading blog post: ${slug}`, error);
    return null;
  }
};

// Get all projects
export const getAllProjects = async () => {
  try {
    return projects.map(project => ({
      ...project,
      content: marked(project.content)
    })).sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading projects:', error);
    return []; // Return empty array instead of throwing
  }
};

// Get a single project by slug
export const getProjectBySlug = async (slug) => {
  try {
    const project = projects.find(project => project.slug === slug);
    if (!project) return null;
    
    return {
      ...project,
      content: marked(project.content)
    };
  } catch (error) {
    console.error(`Error loading project: ${slug}`, error);
    return null;
  }
}; 