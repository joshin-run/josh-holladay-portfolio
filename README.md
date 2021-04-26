# vue-calico

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Old Lint script: "lint": "vue-cli-service lint"





Bootstrapping a Firebase Project
Introduction
This guide will help you get your Firebase project up and running with a frontend hosted web app, Firebase Functions, and Firestore.  This tutorial assumes you’ll be developing a React app, but the same principles could apply to any frontend framework.  Firebase is free to use and easy to set up a fully functioning full-stack web application.

To help validate that your project is on the right track, we’ve created an example-starter repo that you can cross check your own steps against.
The init commit contains only the exact steps listed below.
The second commit adds some helpful examples of how to call Firebase Functions from your React app and how to call Firestore from the Firebase Functions.
We recommend checking all other commits in the commit history just in case there are other useful changes added later.

Steps
Prerequisites
If you haven’t already, make sure you have npm installed.  We recommend using nvm to manage your npm versions.
If you haven’t already, make sure you have npx installed.
Create the Firebase Project
Navigate to Firebase Console
Select Add Project, and follow the onscreen instructions to get it set up.
On the left side bar, select Cloud Firestore, then click Create Database.  You can start in test or production mode, and we recommend keeping the default location (us-central).  Then, finish creating the database.

On the left side bar, select Hosting, then click Get Started.
On the setup screen (Install Firebase CLI), make sure to follow the steps to install firebase-tools locally.  You don’t need to check the box regarding steps for the Firebase JavaScript SDK as we’ll handle it more elegantly later in this tutorial.
On the next screen (Initialize your project) make sure to run firebase init inside a newly created root directory of your web app on your local machine.  Unless specified below, assume the default is acceptable:
You’ll want to select Firestore, Functions, and Emulators from the list of CLI features.

Make sure to select Use an existing project, which should default to the Firebase project you just created.
Unless we specify otherwise, the default choice for each option is recommended.
When choosing the language for Cloud Functions, we recommend TypeScript, but you may also choose JavaScript.
You should use ESLint.
For the emulators, set up Functions and Firestore.

You’ll want to enable the Emulator UI, which is useful for local debugging, but also useful if you don’t want to set up billing in Firebase to deploy your app.  If it runs fine on the emulator, you can assume it would work if deployed.
For the Emulator, you may need to install the Java Developer Kit (JDK) if you haven’t already.  You can download it at https://jdk.java.net and here are some helpful instructions.  On my Mac, I ran:
sudo mv jdk-<the download version number>.jdk /Library/Java/JavaVirtualMachines/

On the last setup screen (Deploy to Firebase Hosting), you can technically skip this step if you plan to just develop locally.

Create your web app
The instructions are for creating a React app, but you are welcome to create your web app using any Framework (or VanillaJS/Web Components) that you’d like.
Run the following command in the root directory on your local machine:
If you want to build it with JavaScript:
npx create-react-app hosting

If you want to build it with TypeScript:
npx create-react-app hosting --template typescript

Navigate to your new React app directory (hosting), and install firebase:
npm install firebase

Since this (hosting) is a sub directory to our root app and the Create React App script cloned a git repo, you’ll likely want to remove the .git folder and its content at hosting/.git, especially if you plan to initialize this web app root project as a git repository.
As part of the hosting/package.json:
Add "proxy": "http://localhost:5001" to have your Firebase Function requests be directed to where the functions will be emulated.  If you altered the default port of your functions in the emulator installation, it should match the alternative port.  You can see the port in your firebase.json file.
To the list of scripts add: "lint": "npx eslint src", which is used for linting your code.
You’ll want to set up a file for making requests to your Firebase Functions (in the example starter repo, we created sdk.ts).  Two really good guides for this are:
https://firebase.google.com/docs/web/setup#add-sdks-initialize
https://firebase.google.com/docs/functions/callable#web_2

Create your functions
Inside functions/src/index.ts you’ll want to remove the example helloWorld function it gives you and replace it with one that utilizes functions.https.onCall, which automatically handles CORS issues, like so:
export const helloWorld = functions.https.onCall((data, context) => {
  return { text: 'Hello from Firebase!' };
});

As part of the functions/package.json:
To the list of scripts add: "build:watch": "tsc -w", which is used for running a build on changes to your Firebase Functions that the emulator will automatically pick up on.
Running Locally
To run the emulator locally, in the root directory, run:
firebase emulators:start

If starting the emulator complains about Port 8080 (or another port) is not open on localhost; if means you probably have a process that is using that port, potentially even a rogue version of the emulator that you failed to shutdown gracefully.  You can either find and kill that process, or go to firebase.json and alter the port to something else.
To run your React app locally, in a different terminal, navigate to hosting, and run:
npm start 

To run a continue build of your Firebase Functions locally, in a different terminal, navigate to functions, and run:
npm run build:watch 

Final Changes/Tips
When running the emulator, make sure to navigate to http://localhost:4001 for some useful tooling, specifically http://localhost:4001/firestore for viewing the current database state.
For information regarding Firestore functionality, see: https://firebase.google.com/docs/firestore/manage-data/add-data#web_6 and https://firebase.google.com/docs/firestore/query-data/get-data#web 
If you’re diving into actually deploying to Firebase, you may eventually reach their “pay wall”.  But don’t let that scare you.  Upgrading to Blaze is actually free and they give you a free $300 credit on the off chance you somehow rack up costs greater than a few pennies.

### Firebase Emulator
firebase emulators:start


