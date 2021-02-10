## Models

Database model (ORM)

---

**File: models/user/user.js**

```js
  const { main: database } = require('../config/database');
  const { Model } = require('arjuna');

  class User extends Model
  {

    constructor()
    {
      super({
        connection: database,
        tableName: 'user',
        protecteds: [
          'password',
        ],
        schema: {
          id: {
            type: Model.ORM.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          username: {
            type: Model.ORM.STRING,
          },
          password: {
            type: Model.ORM.STRING,
          },
          created_at: {
            type: Model.ORM.DATE,
          },
          updated_at: {
            type: Model.ORM.DATE,
          }
        }
      });
    }

  }


```

**File: providers/model-registrant.js**
```js
  const User = require('./models/user/User');

  module.exports = {
    User: new User(),
  };
```

**File: repositories/user/user.js**
```js

  const { User: UserModel } = require('./providers/model-registrant');

  const Repository = require('../Repository');

  class User extends Repository
  {

    constructor()
    {
      super({ model: UserModel });
    }

  }

  module.exports = User;

```