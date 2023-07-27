This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install dependency & Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm install
npm start

# OR using Yarn
yarn install
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## TASK 1: Login Screen (**DONE**)

Now that you have successfully run the app, let's input the auth.

```bash
# For auth you need to enter below credentials
username: admin
password: admin
```

If you press the login button and entered above credentials then it navigate to next Home screen.

## TASK 2: Fetch and Display Data (**DONE**)
1. Create a new screen Home that displays a list of posts obtained from this JSONPlaceholder API endpoint: https://jsonplaceholder.typicode.com/posts  (**DONE**)
2. Each list item should show the post title and body. (**DONE**)
3. When a user taps on a post, navigate to a new screen that displays the full details of that post.(**DONE**)
4. Add a "Refresh" button on the list screen that fetches and updates the list of posts from the API.(**DONE**)
2. To run test case run below command (written test case on __test__ root folder)(**DONE**)
```bash
# using npm
npm test

# using yarn
yarn test
```

## Bonus (**DONE**)
1. Implement error handling for API requests and display an error message if the data cannot be fetched.(**DONE**)
2. Add pull-to-refresh functionality on the list screen.(**DONE**)
3. Add pagination to the list of posts if the API supports it.(**DONE**)

