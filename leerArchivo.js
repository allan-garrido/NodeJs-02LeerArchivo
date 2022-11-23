var fs = require('fs');
console.log('abriendo el archivo.txt')
var archivo = fs.readFileSync('archivo.txt','utf-8')

console.log(archivo)

console.log('\nTerminado')