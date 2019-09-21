# React-www-redirect
[![npm](https://img.shields.io/npm/v/react-https-redirect.svg)](https://www.npmjs.com/package/react-www-redirect)

> ⚠️ Security note ⚠️ - This element provides a client-side option when server-enforced www redirects are not possible. Please don’t use this if you can configure the server.

The element redirects the current page of your React Application to www, unless the page is loaded from a web server that is running on localhost.

# Installation

Using npm:

`npm install --save react-www-redirect`

Update your `index.js` file as below:

```
import WWWRedirect from 'react-www-redirect';

// you can just wrap your entire app to redirect it to the equivalent www version
// for example:
// http://example.com/    =>    http://www.example.com/

// you can also use a "disabled" prop to dinamically disable it
// <WWWRedirect disabled={...}>

class WWWApp extends React.Component {

  render() {
    return (
      <WWWRedirect>
        <App />
      <WWWRedirect/>
    );
  }
}
```

## Author
**Shahin Alam**

[github/sopnopriyo](https://github.com/sopnopriyo)
