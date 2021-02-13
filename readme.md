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
  const { Text } = require('arjuna');
  const randomText2 = Text.random(30); //ifjaok89ewsmapxbgiodkap75nnmkvc

```

📋 Docs
---

Complete documentations are available [here](https://github.com/gurisa/arjuna/tree/master/docs)

**Legends:**

- ✔️ Available with test
- ⚠️ Available without test (Use with your own risk 😆)
- ❌ Unavailable yet
- ❓ Ideation from folks

---

| Status | Facade   | Method      | Description |
| --- | ------      | ------      | ------ |
| <td colspan="3"> **Datastore Package** |
| ✔️ | Redis       | get | supported: redis |
| ✔️ |             | set | |
| ✔️ |             | del | |
| ✔️ |             | expire | |
| ✔️ |             | increment | |
| ✔️ |             | decrement | |
| ✔️ |             | resetCounter | |
| ✔️ |             | flushCurrentDb | |
| ✔️ | Config      | set | Set object data by a unique key into file |
| ✔️ |             | get | get object data by a unique key from a file |
| ✔️ |             | all | get all object data from file |
| <td colspan="3"> **Log Package** |
| ✔️ | Log | report | supported: slack |
| ✔️ |             | consoleReport    | |
| ✔️ |             | localReport      | |
| ✔️ |             | onlineReport     | |
| ❓ |             | setConfig     | |
| <td colspan="3"> **Manipulator Package** |
| ✔️ | [Date](https://github.com/gurisa/arjuna/tree/master/.docs/date.md) | getFullDate | get date (Format: YYYY-MM-DD HH:mm:ss, Default: Current Date) |
| ✔️ |             | getOnlyDate | get date (Format: YYYY-MM-DD, Default: Current Date) |
| ✔️ |             | moment      | return moment instance |
| ✔️ |             | wait | |
| ✔️ | Html | encode | encode html tag into html entity |
| ✔️ |             | decode | decode html entity into html tag |
| ✔️ |             | toText | convert html tag into plain text |
| ✔️ | [Number](https://github.com/gurisa/arjuna/tree/master/.docs/number.md) | random | |
| ✔️ |             | currency | |
| ✔️ | [Text](https://github.com/gurisa/arjuna/tree/master/.docs/text.md) | random | |
| ✔️ |             | isValidYoutubeUrl | |
| ✔️ |             | getYoutubeVideoId | |
| ✔️ |             | slugify | |
| ✔️ |             | uuid | |
| ✔️ |             | isValidUuid | |
| ✔️ |             | getUuidVersion | |
| <td colspan="3"> **Network Package** |
| ✔️ | Event       | publish | supported: rabbitmq |
| ✔️ |             | subscribe | |
| ✔️ |             | enqueue | |
| ✔️ |             | dequeue | |
| ✔️ | [Request](https://github.com/gurisa/arjuna/tree/master/.docs/request.md) | get         | perform http get request |
| ✔️ |             | post        | perform http post request |
| ✔️ |             | put         | perform http put request  |
| ✔️ |             | patch       | perform http patch request  |
| ✔️ |             | delete      | perform http delete request  |
| ✔️ |             | multiple    | perform multiple http request  |
| ✔️ | Response | setCode     | |
| ✔️ |             | setStatus   | |
| ✔️ |             | setMessage  | |
| ✔️ |             | setData     | |
| ✔️ |             | setError    | |
| ✔️ |             | toObject    | |
| ✔️ |             | toJson      | |
| ✔️ |             | success     | |
| ✔️ |             | error       | |
| ✔️ |             | invalid     | |
| ✔️ |             | forbidden   | |
| ✔️ |             | notFound    | |
| ✔️ |             | unauthenticate   | |
| ✔️ |             | badGateway       | |
| ✔️ |             | requestTimeout   | |
| <td colspan="3"> **Pattern Package** |
| ✔️ | Command     | execute | |
| ✔️ | Factory     | create | |
| ✔️ | Operation   | run | |
| ✔️ | Provider    | register | |
| ✔️ | [Repository](https://github.com/gurisa/arjuna/tree/master/.docs/repository.md) | all | |
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
| <td colspan="3"> **Serialization Package** |
| ✔️ | [Protobuf](https://github.com/gurisa/arjuna/tree/master/.docs/serialization.md) | encode | |
| ✔️ |             | decode | |
| ✔️ |             | verify | |
| ✔️ |             | createSchema | |
| <td colspan="3"> **Structure Package** |
| ✔️ | [Entity](https://github.com/gurisa/arjuna/tree/master/.docs/entity.md) | setParams   | set entity property from an object |
| ✔️ | [SqlModel](https://github.com/gurisa/arjuna/tree/master/.docs/sql-model.md) | instance         | |
| ✔️ |             | registerDefaultStaticFunctions | |
| ✔️ |             | registerStaticFunctions | |
| ✔️ |             | createSqlModel | |
| ✔️ |             | getOption | |
| ✔️ | ViewModel   | setParams | |
| ✔️ |             | toObject | |
| ✔️ |             | toJson | |
| <td colspan="3"> *Unavailable packages - coming soon, maybe?* |
| ❌ | Controller  | constructor | supported: express |
| ❌ | Middleware  | validation | supported: express |
| ❌ |             | logger | |
| ❌ |             | monitoring | supported: prometheus |
| ❌ | Builder     | build | |
| ❌ |             | toObject | |
| ❌ |             | toJson | |
| ❌ | Service     | call | |
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

Running unit test
```md
  npm run test-unit
```

Running integration test (make sure you setup .env.test, check .env.example for more info)
```md
  npm run test-integration
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