# Test task

This project was created to demonstrate my knowledge of React, Hooks and SASS

## Used tools and libraries

In this project I used Typescript, standard React Hooks, custom React Hooks (useFetch, useLocalStorage), AXIOS, Lazy loading, Formik, Yup, SASS.

## Tasks that had to be completed during the work

### General

For the fast loading of the application, I made a Skeleton for the banner, and lazy loading for the "successful registration" picture and user photos.
While waiting for a server response, the user sees a loading animation, and the button turns gray and does not respond to clicks.
When you click on "Users" and "Sign Up" buttons, the page smoothly scrolls to the corresponding sections.
After clicking on the logo in the header of the page, the local store is cleared and you can register again (developers opportunity).

### Users list

When you click on the button "show more", a request is sent to the server for 11 users (6-count + 5-overlay), in case new users have registered while you were on the page. This is done so that the shift of users on the server does not lead to a duplicate of users on your screen or a lack of them.
Newly registered users are not displayed so as not to shift all users on the screen.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
