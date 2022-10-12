
### What does this do?
Automate documenting what are the dependencies your javascript app uses. List those dependencies in below format.

```
Package name: nanoid
Reference: https://www.npmjs.com/package/nanoid/v/3.1.30
License: MIT
```

### Instructions
##### 1. Create `dependencies.json` file and copy/paste the dependencies from `package.json` of your application.

```json
{
  "client":{
     "axios":"0.24.0",
     "react":"17.0.2",
     "react-dom":"17.0.2",
     "react-redux":"7.2.6",
  },
  "server":{
     "express":"4.17.1",
     "joi":"17.5.0",
     "jsonwebtoken":"8.3.0",
     "uuid":"3.3.3",
  }
}
```

##### 2. Run `npm install`

##### 3. Run `npm start`