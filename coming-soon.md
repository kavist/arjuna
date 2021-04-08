
**Text**
```js

class Text
{

  static alphabets(params)
  {
    
  }

  static mask(params)
  {
    if (!params || !params.text) {
      throw new Error("Invalid params");
    }    
    if (typeof text !== "string") {
      throw new Error("Invalid text");
    }
    if (params.masker !== undefined && 
      typeof params.masker !== "string") {
      throw new Error("Invalid masker");
    }
    const formatedText = [...params.text];
    const maskerLength = formatedText.length >= 6 ? 3 : 1;
    return formatedText.map((c, i) => {
      if (i <= maskerLength || i >= formatedText.length - maskerLength) {
        return params.masker || "*";
      }
      return c;
    }).join("");
  }


}

```

---

**Repository**
```js

class Repository
{

  static last(params)
  {
    
  }

}

```

---

**Security**
```js

class Security
{

  static base64Encode(params)
  {
    
  }

  static base64Decode(params)
  {
    
  }

  static createRandomKey(params)
  {
    
  }

  static createRandomSecret(params)
  {
    
  }

  static encrypt(params)
  {
    
  }

  static decrypt(params)
  {
    
  }

}

```

---

**Object**
```js

class Object
{

  static renameKey(params)
  {
    
  }

  static renameKeys(params)
  {
    
  }

}

```

---

**Queries**
```js

class Queries
{

  static get(params)
  {
    
  }

}

```

---
