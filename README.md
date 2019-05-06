# NabCurrencyProfitCalculator frontend application built with Angular 7, Material and TypeScript and deployed on AWS S3 and AWS Cloudfront

This NabCurrencyProfitCalculator front-end application is built using Angular 7, Material and TypeScript. It uses 3 backend micro-services viz. btc-service, etc-service and ltc-service, to fetch and serve the data for BTC, ETC and LTC respectively. The URLs for these services are configured in src/app/settings.ts file. It is deployed as a complete cloud solution serving static content from AWS S3 and hooked behind AWS Cloudfront content delivery network for faster performance. For testing purposes, steps are also given to run this application locally using Angular CLI.

For directly accessing and testing the AWS deployed front-end application, please use below link. The UI is completely responsive and can be assessed seamlessly on either mobile, tab or desktop browser. The backend contains the data for three dates viz. 07-May-2019, 08-May-2019 and 09-May-2019. You may try searching for profit details by giving different dates accordingly for each of BTC, ETC and LTC tabs.

http://d3106i0h4fo7t9.cloudfront.net

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

# Deploy to AWS S3 and AWS Cloudfront

Please refer document App_deployment_AWS_S3_and_AWS_Cloudfront_Screenshots.docs given in the project root for detailed steps with screenshots to deploy the solution to AWS S3 and AWS Cloudfront. Alternatively, please access below cloudfront URL to directly access and test the application:

http://d3106i0h4fo7t9.cloudfront.net

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
