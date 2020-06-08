const fs = require('fs');

const recursiveDirectory = (folder, cb) => {
    if (!fs.existsSync(folder)) {
        const path = fs.mkdirSync(folder, { recursive: true });
        return path
    }
}

module.exports = recursiveDirectory