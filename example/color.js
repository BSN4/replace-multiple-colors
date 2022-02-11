const replaceColor = require("../");
const fs = require('fs');

var dir = './pics/'

var colors = {
    '#66AE74': '#63A4FF',
    '#273134': '#ffffff',
    '#B3877E': '#199000',
    '#1B1F22': '#ffffff',
    }

    const colorsArray = []
    Object.entries(colors)
    .forEach(([targetColor, replaceColor]) => {
      colorsArray.push({
        type: 'hex',
        targetColor: targetColor,
        replaceColor: replaceColor
      });
    });


 const changeImageColor = (name) => {
     var data = dir + name;

    data =  replaceColor({
                 image: data,
                 colors: colorsArray,
             }).then((jimpObject) => {
                jimpObject.write(dir + "output/" + name, (err) => {
                    if (err)
                        return console.log(err);
                });
              })
              .catch((err) => {
                console.log(err)
              });
 }

    fs.readdir(dir,
    { withFileTypes: true },
        (err, files) => {
        if (err)
          return console.log(err);

          files.forEach(async file => {
            if(file.name.endsWith('png')) {
                changeImageColor(file.name)
            }
          })
    })
