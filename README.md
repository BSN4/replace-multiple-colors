# Replace Multiple Colors


this a fork of [replace-color](https://github.com/turakvlad/replace-color) slightly changed to add multiple colors replacing functionality.

## Install

```sh
npm install --save replace-multiple-color
```

## Basic usage

```javascript
const replaceColor = require('replace-color')

replaceColor({
  image: './input.jpg',
  colors: [{
    type: 'hex',
    targetColor: '#FF0000',
    replaceColor: '#FFFFFF'
  },
  {
    type: 'hex',
    targetColor: '#FF0000',
    replaceColor: '#FFFFFF'
  }
  ], (err, jimpObject) => {
  if (err) return console.log(err)
  jimpObject.write('./output.jpg', (err) => {
    if (err) return console.log(err)
  })
})
```

see example folder.

## License

[MIT](LICENSE)
