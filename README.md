# NabCurrencyProfitCalculator frontend application built with Angular 7, Material and TypeScript and deployed on AWS Elastic Beanstalk

This NabCurrencyProfitCalculator frontend application is built using Angular 7, Material and TypeScript. It uses the backend services configured in settings.ts to fetch and serve the data for BTC, ETC and LTC. It is deployed on AWS Elastic Beanstalk as a cloud solution. The backend services are also served from AWS cloud using AWS Elastic Beanstalk, AWS API Gateway and AWS Lambda. For testing purposes, steps are also given to run this application locally using Angular CLI.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

# Deploy to AWS Elastic Beanstalk

Install and get the Elastic Beanstalk Command Line Interface (EB CLI) running by referring this link: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html
 
### Refer document Frontend_Deployed_To_AWS_EBS_Screenshots.docx for steps with screenshots.

Follow these steps for deploying to AWS Elastic Beanstalk:

1. Go inside cloned project directory and execute below cmd. Keep default values or give values as you wish.
	
	eb init

2. Create an environment by executing below cmd. 
	
	eb create etc-service
	
3. In case any changes are made, please commit the changes and then deploy / update the environment by executing below cmd. 
	
	eb deploy
 
4. Access the API using link like below.
	
	http://etc-service.tthmedhjhb.us-west-2.elasticbeanstalk.com/etc?inputDate=05/07/2019
	
5. EBS provisions all the required resources for running a node application in AWS. Go to AWS Console under Elastic Beanstalk service section and view the above created application.

# Getting Started locally

To get the Node server running locally:

- Clone this repo
- Make sure to have Node (https://nodejs.org/en/) and Angular CLI (https://cli.angular.io/) installed locally.
- `npm install` to install all required dependencies
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
