const { copyFile } = require("fs");

const fs = requrie('fs')

function writeSite(html){
    fs.writeFile('./dist/index.html', html, err => {
        if (err){
            throw err
        }
        console.log('saved');
        copyFile()
    })
}

const copyFile = ()=>{
    fs.copyFile('./site/style.css','./dist/style.css', err => {
        if (err){
            console.log(err);
        }
        console.log('css copied')
    });
}

module.exports = writeSite, copyFile