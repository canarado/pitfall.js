let ncp = require('ncp').ncp;
const ver = require('./package.json').version;
const path = require('path');
const rmrf = require('rimraf');

ncp(path.join('docs', 'pitfall.js', ver), 'docs', (e) => {
    if(e) console.error(e);

    rmrf(path.join('docs', 'pitfall.js'), (e) => {
        if(e) console.error(e);
    })
})