## Repositories

Bridge to interact with database within orm

---

**File: repositories/user/user**
```js

  const { User: UserModel } = require('./providers/model-registrant');

  const { Repository } = require('arjuna');

  class User extends Repository
  {

    constructor()
    {
      super({ model: UserModel });
    }

  }

  module.exports = User;

```

**File: controllers/v1/HomeController**
```js

  const UserRepository = require('../../../repositories/user/user');

  exports.test = async (req, res) => {
    const user = await UserRepository.first({
      filter: {
        id: 1
      }
    });

    console.log("user", user);// sequelize instance

  }

```

**Available methods**
```js

  const { Repository } = require('arjuna');

  await Repository.all();
  await Repository.get({
    attributes: attributes
    filter: filter
    order: order
    transaction: transaction
  });
  await Repository.create({
    data: data,
    option: {
      transaction: transaction
    }
  });
  await Repository.first({
    attributes: attributes,
    filter: filter,
    paranoid: paranoid,
    order: order,
    transaction: transaction,
  });
  await Repository.update({
    data: data,
    filter: filter,
    paranoid: paranoid,
    transaction: transaction
  });
  await Repository.delete({
    filter: filter,
    force: force
  });
  await Repository.insert({
    data: data
    option: {
      transaction: transaction
    }
  });
  await Repository.findByIdentifier({
    identifier: identifier
    columns: ['id', 'slug', 'username', 'email', 'uuid']
  });
  Repository.generateQueryFromParams({
    limit: limit,
    offset: offset,
    sort_by: sort_by,
    sort_type: sort_type,
    q: q,
    qColumns: qColumns,
  });
  Repository.getTransactionFromParams({
    option: {
      transaction: transaction
    },
    transaction: transaction
  });
  Repository.registerStaticFunctions();
  Repository.registerStaticFunction();

```