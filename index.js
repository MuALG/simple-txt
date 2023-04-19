const stxt = require("simple-txt")
const txt = new stxt('test'); // file name (test)


txt.set('hello'); // true

txt.get(); // hello

txt.add('world');

txt.has('world'); // true

txt.replace('world', 'w'); // hello w

txt.length('l') // 1

txt.clear();


