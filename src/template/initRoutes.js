const fs = require('fs');
const absPath = require('mcrgenerator/src/helpers/absPath')


const files = fs.readdirSync(absPath)

let imports = ''
let appRoutes = ''
files.filter(v => v !== 'initRoutes.js').map(v => {
    const name = v.replace('.js', '')
    imports+= `import ${name} from './${name}'\n`
    appRoutes+= `app.use('/api/v1', ${name});
    `
})


const initRoutes = `
${imports}
const initRoutes = (app) => {
    ${appRoutes}
};

export default initRoutes;`;

module.exports = initRoutes;
