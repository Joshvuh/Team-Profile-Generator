const fs = require('fs');

const writeFile = fileData => {
    fs.writeFile('./dist/index.html', fileData, (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log(`Your team's dashboard has been created`)
        }
    })
}

module.exports = writeFile;