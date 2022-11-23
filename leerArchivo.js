var fs = require('fs');

console.log('abriendo el archivo.txt')

var archivo = fs.readFile('archivo.txt',
                          'utf8',
                          function(error,archivo) {
                            console.log(archivo)
                        })

console.log('\nTerminado')