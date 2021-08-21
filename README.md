[simple-txt](https://www.npmjs.com/package/simple-txt)
------------
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
txt.set('hello');
txt.add('world');

```

 Result:
-----
`test.txt` 
```js
hello
world

```
<br /><br />

Add (top)
-----
`index.js`
```js
txt.set('hello');
txt.add('world ', 'top');
```

 Result:
-----
`test.txt` 
```js

world hello
```
<br /><br />

Add (botton)
-----
`index.js`
```js
txt.set('hello ');
txt.add('world', 'bottom');
```

 Result:
-----
`test.txt` 
```js
hello world
```
<br /><br />

Has (default)
-----
`index.js`
```js
txt.has('world'); // true
```
<br /><br />

Has (index)
-----
`index.js`
```js
txt.has('world','index'); // 7
```
or
```js
txt.has('world','i'); // 7
```
<br /><br />

Has (boolean)
-----
`index.js`
```js
txt.has('world','boolean'); // true
```
or
```js
txt.has('world','b'); // true
```
<br /><br />

Clear
-----
`index.js`
```js
txt.clear(); // true
```

<br /><br />


Support
-------
<ul>
  <li><a href="mailto:support-@barid.com">support-@barid.com</a></li>
  <li><a href="https://wa.me/12132059765">+1 (213) 205-9765</a></li>
</ul>

<br />

#

Copyright © 2021 [Mustafa ALGhanim](https://www.npmjs.com/~mustafa-alghanim) with [Mr Dark](https://www.npmjs.com/~mr_dark)
