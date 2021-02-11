# Arjuna 😎
Death simple nodejs boilerplate & utility wrapper

❓ Motivations
---
- Provide easy to use interfaces for nodejs application
- Standarize coding style
- Decrease repetable things (DRY)

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

  const randomText = App.Text.random(30);
  const randomText2 = Text.random(30);

```

📋 Docs
---
Documentations are available [here](https://github.com/gurisa/arjuna/tree/master/docs)

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

![Test coverages](https://github.com/gurisa/arjuna/blob/master/assets/coverage.png?raw=true)

😋 Dependencies
---
```md
1. ❌ Framework: express, express-jwt, express-validator
2. ⚠️ Utility: nodemon, lodash, moment, numeral, body-parser, dotenv, protobufjs, slugify, html-entities, html-to-text, uuid
3. ⚠️ ORM: sequelize, mysql2, mongoose
4. ⚠️ Networking & Messaging: axios, request, amqplib
5. ❌ Security: bcryptjs, jsonwebtoken
6. ❌ Logging: morgan, rotating-file-stream
7. ❌ Testing: mocha, nyc, chai, chai-like, chai-things, supertest
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