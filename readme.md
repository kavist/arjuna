# Arjuna 😎
Death simple nodejs boilerplate & utility wrapper

❓ Motivations
---
- Provide easy to use interfaces for nodejs application
- Standarize coding style
- Decrease repeatable things (DRY)

🖖 Usage
---
Using npm
```md
  npm install arjuna
```

In NodeJS
```js

  /** file: app.js **/ 
  const { App, Text } = require('arjuna');

  const randomText = App.Text.random(30); //anifjaokpxb7589ewsmgiodkapnmkvc
  const randomText2 = Text.random(30); //ifjaok89ewsmapxbgiodkap75nnmkvc

```

📋 Docs
---

Complete documentations are available [here](https://github.com/gurisa/arjuna/tree/master/docs)


| Status | Facade      | Method      | Description |
| --- | ------      | ------      | ------ |
| ✔️ | Date        | getFullDate | |
| ✔️ |             | moment      | |
| ✔️ | Entity      | setParams   | |
| ✔️ | Request     | get         | |
| ✔️ |             | post        | |
| ✔️ |             | put        | |
| ✔️ |             | patch        | |
| ✔️ |             | delete        | |
| ✔️ |             | multiple         | |
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
| ❌ | Config      | set | |
| ❌ |             | get | |
| ❌ |             | all | |
| ❌ | Log         | report | |
| ❌ |             | customReport | |
| ❌ |             | localReport | |
| ❌ |             | consoleReport | |
| ❌ |             | onlineReport | |
| ❌ |             | customReport | |
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