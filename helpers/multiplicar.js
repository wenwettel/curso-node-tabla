const fs = require("fs");
const colors = require("colors");

//Promesa creada con new Promise

// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     console.log(`================
//  tabla del : ${base}
// ================`);
//     let salida = "";
//     for (let i = 1; i <= 10; i++) {
//       salida += `${base} x ${i} = ${base * i}\n`; // salto de linea \n
//     }

//     console.log(salida);

//     // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     //   if (err) throw err;

//     //   console.log(`tabla-${base}.txt creado`);
//     // });

//     //para mostar el error se usaria try/catch
//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     resolve(`tabla-${base}.txt `);
//   });
// };

// module.exports = {
//   crearArchivo,
// };

//promesa creada con async
const crearArchivo = async (base = 5, isListar = false, hasta = 10) => {
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`; // salto de linea \n
    }

    if (isListar) {
      console.log("================".green);
      console.log(`  tabla del : ${base}`.green);
      console.log("================".green);

      console.log(salida);
    }

    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if (err) throw err;

    //   console.log(`tabla-${base}.txt creado`);
    // });

    //para mostar el error se usaria try/catch
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt `;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
