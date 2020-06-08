const nameCapitalized = process.env.GNAME.charAt(0).toUpperCase() + process.env.GNAME.slice(1);
const nameLowerCase = process.env.GNAME.toLowerCase();

const router = `
import { Router } from 'express';

import { ${nameCapitalized}Controller } from '../controllers/${nameCapitalized}Controller';

const router = new Router();
const ${nameLowerCase}Controller = new ${nameCapitalized}Controller();

router.get('/${nameLowerCase}s', ${nameLowerCase}Controller.getAll);
router.get('/${nameLowerCase}s/:id', ${nameLowerCase}Controller.getOne);
router.post('/${nameLowerCase}s', ${nameLowerCase}Controller.create);
router.put('/${nameLowerCase}s/:id', ${nameLowerCase}Controller.update);
router.delete('/${nameLowerCase}s/:id', ${nameLowerCase}Controller.delete);

export default router;
`;

module.exports = router;