const stxt = require("simple-txt")
const txt = new stxt('test'); // file name (test)


txt.set('hello');

txt.get();

txt.add('world');

txt.has('world');

// txt.clear();


