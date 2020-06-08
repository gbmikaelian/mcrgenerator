const nameCapitalized = process.env.GNAME.charAt(0).toUpperCase() + process.env.GNAME.slice(1);

const model = `
import { Schema, model } from 'mongoose';

const schema = new Schema({
    name: String
}, {
    timestamps: true
});

schema.statics.protectedFields = [];
const ${nameCapitalized} = model('${nameCapitalized}', schema);

export default ${nameCapitalized};
`;

module.exports = model;