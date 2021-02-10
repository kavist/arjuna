## Entities

Application data model (Not Model/ORM)

---

**File: entities/user/user.js**
```js

  const { Entity } = require('arjuna');

  class User extends Entity
  {

    constructor()
    {
      super();
      this.setParams(params);
    }

  }
  
```

**Available methods**
```js

  const { Entity } = require('arjuna');
  class User extends Entity {}

  const user = new User();

  const VALID_PARAMS = [
    'id',
    'name',
    'username',
  ];
  const userData = {
    id: 1,
    name: 'Raka',
    username: 'kokoraka',
    password: 'secret'
  };
  user.setParams(userData, VALID_PARAMS);

  console.log("User", user);
  /** 
   * User { id: 1, name: 'Raka', username: 'kokoraka' }
   * /
  
```