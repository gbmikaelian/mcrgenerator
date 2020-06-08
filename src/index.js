const fs = require('fs');
const recursiveDirectory = require('./helpers/recursiveDirectory');
const path = require('path');


const controller = require('./template/Controller');
const rootController = require('./template/RootController');
const model = require('./template/Model');
const route = require('./template/Route');


const absPath = path.join(__dirname, '../../../')

const nameCapitalized = process.env.GNAME.charAt(0).toUpperCase() + process.env.GNAME.slice(1);

recursiveDirectory(absPath+'src/controllers/')
recursiveDirectory(absPath+'src/models/')
recursiveDirectory(absPath+'src/routes/')

fs.writeFileSync(`${absPath}src/controllers/${nameCapitalized}Controller.js`, controller);
fs.writeFileSync(`${absPath}src/controllers/${nameCapitalized}Controller.js`, controller);
fs.writeFileSync(`${absPath}src/controllers/Controller.js`, rootController);
fs.writeFileSync(`${absPath}src/models/${nameCapitalized}.js`, model);
fs.writeFileSync(`${absPath}src/routes/${nameCapitalized}.js`, route);

const initRoutes = require('./template/initRoutes');
fs.writeFileSync(absPath+'src/routes/initRoutes.js', initRoutes);
