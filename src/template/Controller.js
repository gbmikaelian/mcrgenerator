
const lowerGenName = process.env.GNAME.toLowerCase();
const nameCapitalized = process.env.GNAME.charAt(0).toUpperCase() + process.env.GNAME.slice(1);
const controller = `
import Controller from './Controller';
import ${nameCapitalized} from '../models/${nameCapitalized}';

export class ${nameCapitalized}Controller extends Controller {
    async getAll (req, res) {
        try {
            const ${lowerGenName}s = await ${nameCapitalized}.find(req.query);
            res.json(${lowerGenName}s);
        } catch (e) {
            res.json({ error: e.message });
            console.log(e);
        }
    }

    async getOne (req, res) {
        try {
            const ${lowerGenName}s = await ${nameCapitalized}.findById(req.params.id);
            res.json(${lowerGenName}s);
        } catch (e) {
            super.handleError(res, e);
        }
    }

    async create (req, res) {
        try {
            const ${lowerGenName} = new ${nameCapitalized}();
            super.assign(req.body, ${lowerGenName}, ${nameCapitalized});
            await ${lowerGenName}.save();

            res.json(${lowerGenName});
        } catch (e) {
            super.handleError(res, e);
        }
    }

    async update (req, res) {
        try {
            const ${lowerGenName} = await ${nameCapitalized}.findById(req.params.id);
            super.assign(req.body, ${lowerGenName}, ${nameCapitalized});
            await ${lowerGenName}.save();
            res.json(${lowerGenName});
        } catch (e) {
            super.handleError(res, e);
        }
    }

    async delete (req, res) {
        try {
            const ${lowerGenName} = await ${nameCapitalized}.findByIdAndDelete(req.params.id);
            if (!${lowerGenName}) {
                throw new Error('not found');
            }
            res.json(${lowerGenName});
        } catch (e) {
            super.handleError(res, e);
        }
    }
}
`;
module.exports = controller;