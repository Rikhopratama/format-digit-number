# Format To Some Digits Number
To format number become some digits number.


## Usage
```js
const formatDigitsNumber = require('format-digit-number');
const result1 = formatDigitsNumber(5, 11200);
const result2 = formatDigitsNumber(4, 150);
const result3 = formatDigitsNumber(10, 8);

console.log(result1);  // 11200
console.log(result2);  // 0150
console.log(result3);  // 0000000008

```

## API
```js
formatDigitsNumber(numberOfDigits, number)
```

The result will be a `string`