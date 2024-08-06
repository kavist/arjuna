# ⚠ This is just a hack ⚠

> I am not the original maintainer of [Arjuna](https://github.com/idaman-id/arjuna/tree/master/docs). This repo is merely a hack to satisfy NPM Audit results, since the original package is not updated for a long time. Do not expect any bug fixes or new features out of this repo.

# Arjuna 😐
Death simple Node.js boilerplate & utility wrapper

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

Complete documentations are available [here](https://github.com/idaman-id/arjuna/tree/master/docs)

**Legends:**

- ✔️ Available with test
- ⚠️ Available without test (Use with your own risk 😆)
- ❌ Unavailable yet
- ❓ Ideation/request

---

| Status | Facade   | Method      | Description |
| --- | ------      | ------      | ------ |
| <td> **Datastore Package** </td> |
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
| <td> **Log Package** </td> |
| ✔️ | Log | report | supported: slack |
| ✔️ |             | consoleReport    | |
| ✔️ |             | localReport      | |
| ✔️ |             | onlineReport     | |
| ❓ |             | setConfig     | |
| <td> **Manipulator Package** </td> |
| ✔️ | Date | getFullDate | get date (Format: YYYY-MM-DD HH:mm:ss, Default: Current Date) |
| ✔️ |             | getOnlyDate | get date (Format: YYYY-MM-DD, Default: Current Date) |
| ✔️ |             | moment      | return moment instance |
| ✔️ |             | wait | |
| ✔️ | Html | encode | encode html tag into html entity |
| ✔️ |             | decode | decode html entity into html tag |
| ✔️ |             | toText | convert html tag into plain text |
| ✔️ | Number | random | |
| ✔️ |             | currency | |
| ✔️ | Text | random | |
| ✔️ |             | isValidYoutubeUrl | |
| ✔️ |             | getYoutubeVideoId | |
| ✔️ |             | slugify | |
| ✔️ |             | uuid | |
| ✔️ |             | isValidUuid | |
| ✔️ |             | getUuidVersion | |
| ✔️ |             | mask | |
| ✔️ | Security    | createRandomKey | |
| ✔️ |             | createRandomSecret | |
| ✔️ |             | encrypt | |
| ✔️ |             | decrypt | |
| ✔️ | Object      | renameKey    | |
| <td> **Network Package** </td> |
| ✔️ | Event       | publish | supported: rabbitmq |
| ✔️ |             | subscribe | |
| ✔️ |             | enqueue | |
| ✔️ |             | dequeue | |
| ✔️ | Request | get         | perform http get request |
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
| <td> **Pattern Package** </td> |
| ✔️ | Command     | execute | |
| ✔️ | Query     | get    | |
| ✔️ | Factory     | create | |
| ✔️ | Operation   | run | |
| ✔️ | Provider    | register | |
| ✔️ | Repository | all | |
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
| ❓ |             | last     | |
| <td> **Serialization Package** |
| ✔️ | Protobuf | encode | |
| ✔️ |             | decode | |
| ✔️ |             | verify | |
| ✔️ |             | createSchema | |
| ✔️ | Base64      | encode | |
| ✔️ |             | decode | |
| <td> **Structure Package** |
| ✔️ | Entity | setParams   | set entity property from an object |
| ✔️ | SqlModel | instance         | |
| ✔️ |             | registerDefaultStaticFunctions | |
| ✔️ |             | registerStaticFunctions | |
| ✔️ |             | createSqlModel | |
| ✔️ |             | getOption | |
| ✔️ | ViewModel   | setParams | |
| ✔️ |             | toObject | |
| ✔️ |             | toJson | |
| <td> *Unavailable packages - coming soon, maybe?* </td> |
| ❌ | Controller  | constructor | supported: express req/res |
| ❌ | Middleware  | validation | supported: express req/res |
| ❌ |             | logger | |
| ❌ |             | monitoring | supported: prometheus |
| ❌ | Builder     | build | |
| ❌ |             | toObject | |
| ❌ |             | toJson | |
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

![Test coverages](https://github.com/idaman-id/arjuna/blob/master/assets/image/coverage.png?raw=true)

😋 Dependencies
---
```md
1. Utility: moment, numeral, uuid, nodemon, lodash, body-parser, dotenv, protobufjs, slugify, html-entities, html-to-text
2. ORM: sequelize, mysql2, mongoose
3. Networking: axios
4. Messaging: amqplib
5. Security: bcryptjs, jsonwebtoken
6. Logging: morgan, rotating-file-stream
7. Testing: mocha, nyc, chai, chai-like, chai-things, supertest
```

🤩 Contributor
---
[![](https://github.com/kokoraka.png?size=50)](https://github.com/kokoraka)

Feel free to [contribute](https://github.com/idaman-id/arjuna/pulls)

💖 Support
---
This is open source project feel free to contributes and supporting us through: [Idaman](https://idaman.id)


📜 License
---
MIT