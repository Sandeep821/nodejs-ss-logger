# Splunk Log wrapper app

- Splunk Log wrapper application gets common and specific log information 
rom client, moulde, events and logs it in a developer-friendly formats
in clear key-value pairs, using category INFO, WARN, ERROR, and DEBUG.

logging comman value like unique identifiers, 
timestamps browser and device related information, locale.

following Logging best practices -  ref https://dev.splunk.com/enterprise/docs/developapps/logging/loggingbestpractices/

## Prerequisites

- Make sure `NodeJS` and `NPM` are installed and running on you local machine

## Run the app (Locally)

- Open `Terminal` or `PowerShell` or `Command Line`
- Clone the project to your desired location: `git clone repo url`
- Navigate to the project: `cd project floder`
- Install all the dependencies: `npm install`
- setup a local redis server to verify stored data
- Run the app locally : serverless offline or sls offline

## Deployment

## Commands
- to test run `npm test`
- run serverless function locally : serverless invoke local --function functionName run serverless
- locally : serverless offline or sls offline

