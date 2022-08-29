# Test task

This project was created to demonstrate my knowledge of React, Hooks and SASS

## Used tools and libraries

In this project I used Typescript, standard React Hooks, custom React Hooks (useFetch, useLocalStorage), AXIOS, Lazy loading, Formik, Yup, SASS.

## Tasks that had to be completed during the work

### General

For the fast loading of the application, I made a Skeleton for the banner, and lazy loading for the "successful registration" picture and user photos.

While waiting for a server response, the user sees a loading animation, and the button turns gray and does not respond to clicks.

When you click on "Users" and "Sign Up" buttons, the page smoothly scrolls to the corresponding sections.

### Users list

When you click on the button "show more", a request is sent to the server for 11 users (6-count + 5-overlay), in case new users have registered while you were on the page. This is done so that the shift of users on the server does not lead to a duplicate of users on your screen or a lack of them.

Newly registered users are not displayed so as not to shift all users on the screen.

After you register, the list of users collapses to the first page and is updated. Now you can see yourself in this list and the users who registered while you filled out the form.

Fields that are too long are truncated. To see the full information, you need to hover the mouse over the required field.

### Form

Before submitting, the form is validated and does not allow the user to register if there is an error in some field or if the photo does not pass the requirements. An additional message also appears if a user with such data is already registered or that any other server error has occurred.

After registration, the form disappears and instead of it, the picture "successful registration" appears. The application will never show the registration form again until the localstorage is cleared.

Developers opportunity: After clicking on the logo in the header of the page, the local store is cleared and you can register again.
