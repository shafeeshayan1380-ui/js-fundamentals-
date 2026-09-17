# 02 - Operators

 1. `[] + {}`

My prediction: `object`  
Actual output:`[object Object]`

I thought the result would just be `object`. However, JavaScript converts the empty array to an empty string and the object to the string `[object Object]`. Then the `+` operator combines them.

 2. `null == undefined`

My prediction:`false`  
Actual output:`true`

I thought `null` and `undefined` would not be equal because they are different values. However, when using loose equality (`==`), JavaScript considers `null` and `undefined` equal.

With strict equality (`===`), they are not equal.

3. `5 === "5"`

My prediction: `true`  
Actual output: `false`

I expected them to be equal because both represent the value 5. However, `===` also compares the types.

`5` is a number, while `"5"` is a string, so the result is `false`.
 


