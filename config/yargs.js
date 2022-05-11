const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      description: "es la base de la tabla de multiplicar",
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      description: "muestra la tabla credaa en consola",
    },
    h: {
      alias: "hasta",
      type: "number",
      demandOption: false,
      description: "limite de la multiplicacion",
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que se un número";
    }

    return true;
  })
  .check((argv, options) => {
    if (isNaN(argv.h)) {
      throw "hasta tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
