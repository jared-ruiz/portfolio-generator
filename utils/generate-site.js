const fs = require('fs');

//writeFile Promise
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, reject the promise and send the error to the promise's catch method
            if (err) {
                reject(err);
                //return out of the function to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            //if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        })
    });
}

//copyFile Promise
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            //if there's an error, reject the promise and send the error to the promise's catch method
            if (err) {
                reject(err);
                return;
            }

            //if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: `Stylesheet created!`
            });
        })
    })
}

module.exports = { writeFile, copyFile };