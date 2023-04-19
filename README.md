You can easily modify, add, check for a specific text or delete the entire txt file content, without complications.
<br /><br />

Installation
------------

    npm i simple-txt

<br />

Setup
-----



```js
const stxt = require("simple-txt")

const txt = new stxt('test'); // file name
```
<br /><br />

Set:
-----
`index.js`
```js
txt.set('hello world'); // true

```
<br />

Get:
-----
`index.js`
```js
txt.get(); // hello world
```
<br />

Add (default)
-----
`index.js`
```js
txt.add('hello');
txt.add('world');
```

 Result:
-----
`test.txt` 
```
hello
world
```
<br /><br />

Add (no)
-----
`index.js`
```js
txt.add('hello');
txt.add('world', 'no');
```

 Result:
-----
`test.txt` 
```
hello world
```
<br /><br />

Add (top)
-----
`index.js`
```js
txt.add('hello');
txt.add('world', 'top');
```

 Result:
-----
`test.txt` 
```
world
hello
```
<br /><br />

Has (default)
-----
`test.txt` 
```
world
hello
```
`index.js`
```js
txt.has('world'); // true
```
<br /><br />

Has (index)
-----
`test.txt` 
```
world
hello
```
`index.js`
```js
txt.has('world','index'); // 7
```
or
```js
txt.has('world','i'); // 7
```
<br /><br />

Replace (default)
-----
`test.txt` 
```
hello tomas
```
`index.js`
```js
txt.replace('tomas','world'); // true
```

 Result:
-----
`test.txt` 
```
hello world
```
<br /><br />

Replace (regex flags, [click here to learn javaScript RegExp](https://www.w3schools.com/jsref/jsref_obj_regexp.asp))
-----
`test.txt` 
```
hello ToMAs
hi tomas
```
```js
txt.replace('tomas','world', 'gi');
```

 Result:
-----
`test.txt` 
```
hello world
hi world
```
<br /><br />

Length (default)
-----
`test.txt` 
```
hello world
```
`index.js`
```js
txt.length(); // 11
```
<br /><br />

Length (word)
-----
`test.txt` 
```
hello world
```
`index.js`
```js
txt.length('word'); // 2
```
or
```js
txt.length('w'); // 2
```
<br /><br /> 

Length (line)
-----
`test.txt` 
```
1| hello
2| world
3| ..
4| bye
```
`index.js`
```js
txt.length('line'); // 4
```
or
```js
txt.length('l'); // 4
```
<br /><br /> 

Clear
-----
`index.js`
```js
txt.clear(); // true
```

<br />

#

Copyright © 2023 [Mustafa ALGhanim](https://www.npmjs.com/~mustafa-alghanim) - [Mr Dark](https://www.npmjs.com/~mr_dark)
