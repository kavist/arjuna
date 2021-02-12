# Arjuna 😎
Death simple nodejs boilerplate & utility wrapper

❓ Motivations
---
- Provide easy to use interfaces for nodejs application
- Standarize coding style among teams and applications
- Decrease repeatable things, write once run everywhere (DRY)
- Increase software quality by using well tested utility library

🖖 Usage
---
Using npm
```md
  npm install arjuna
```

In NodeJS
```js

  /** file: app.js **/ 
  const { App } = require('arjuna'); //compact version

  const randomText = App.Text.random(30); //anifjaokpxb7589ewsmgiodkapnmkvc

  const { Text } = require('arjuna'); //lightweight version
  const randomText2 = Text.random(30); //ifjaok89ewsmapxbgiodkap75nnmkvc

```

📋 Docs
---

Complete documentations are available [here](https://github.com/gurisa/arjuna/tree/master/docs)


| Status | Facade      | Method      | Description |
| --- | ------      | ------      | ------ |
| ✔️ | Date        | getFullDate | get current date (Format: YYYY-MM-DD HH:mm:ss |
| ✔️ |             | getOnlyDate | get current date (Format: YYYY-MM-DD |
| ✔️ |             | moment      | return moment instance |
| ✔️ | Entity      | setParams   | set entity property from an object |
| ✔️ | Request     | get         | perform http get request |
| ✔️ |             | post        | perform http post request |
| ✔️ |             | put        | perform http put request  |
| ✔️ |             | patch        | perform http patch request  |
| ✔️ |             | delete        | perform http delete request  |
| ✔️ |             | multiple         | perform multiple http request  |
| ✔️ | Response    | setCode     | |
| ✔️ |             | setStatus   | |
| ✔️ |             | setMessage   | |
| ✔️ |             | setData   | |
| ✔️ |             | setError   | |
| ✔️ |             | toObject   | |
| ✔️ |             | toJson   | |
| ✔️ |             | success   | |
| ✔️ |             | error   | |
| ✔️ |             | invalid   | |
| ✔️ |             | forbidden   | |
| ✔️ |             | notFound   | |
| ✔️ |             | unauthenticate   | |
| ✔️ |             | badGateway   | |
| ✔️ |             | requestTimeout   | |
| ✔️ | Log         | report | |
| ✔️ |             | consoleReport | |
| ✔️ |             | localReport | |
| ✔️ |             | onlineReport | |
| ✔️ | SqlModel    | instance | |
| ✔️ |             | registerDefaultStaticFunctions | |
| ✔️ |             | registerStaticFunctions | |
| ✔️ |             | createSqlModel | |
| ✔️ |             | getOption | |
| ✔️ | Number      | random | |
| ✔️ |             | currency | |
| ✔️ | Repository  | all | |
| ✔️ |             | get | |
| ✔️ |             | create | |
| ✔️ |             | first | |
| ✔️ |             | update | |
| ✔️ |             | delete | |
| ✔️ |             | insert | |
| ✔️ |             | findByIdentifier | |
| ✔️ |             | generateQueryFromParams | |
| ✔️ |             | getTransactionFromParams | |
| ✔️ |             | registerStaticFunctions | |
| ✔️ |             | registerStaticFunction | |
| ✔️ |             | getMethodNames | |
| ✔️ | Protobuf    | encode | |
| ✔️ |             | decode | |
| ✔️ |             | verify | |
| ✔️ |             | createSchema | |
| ✔️ | Text        | random | |
| ✔️ |             | isValidYoutubeUrl | |
| ✔️ |             | getYoutubeVideoId | |
| ✔️ |             | slugify | |
| ✔️ | Config      | set | Set object data by a unique key into file |
| ✔️ |             | get | get object data by a unique key from a file |
| ✔️ |             | all | get all object data from file |
---

✔️ Test & Coverages
---
Running test without coverage + watchers
```md
  npm run test-minimal
```

Running test with coverage
```md
  npm run test
```

Test Coverages

![Test coverages](https://github.com/gurisa/arjuna/blob/master/assets/image/coverage.png?raw=true)

😋 Dependencies
---
```md
1. Utility: moment, numeral, uuid, nodemon, lodash, body-parser, dotenv, protobufjs, slugify, html-entities, html-to-text, express-jwt, express-validator
2. ORM: sequelize, mysql2, mongoose
3. Networking: axios
4. Messaging: amqplib
5. Security: bcryptjs, jsonwebtoken
6. Logging: morgan, rotating-file-stream
7. Testing: mocha, nyc, chai, chai-like, chai-things, supertest
8. Framework: express
```

🤩 Contributor
---
[![](https://github.com/kokoraka.png?size=50)](https://github.com/kokoraka)

Feel free to [contribute](https://github.com/gurisa/arjuna/pulls)

💖 Support
---
This is open source project feel free to contributes and supporting us through: [Idaman](https://idaman.id/arjuna)


📜 License
---
MIT