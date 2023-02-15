const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "PC Builds API",
    description: "U wot m8?!",
  },
  host: "localhost:8000",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = [
  "./routers/buildsRouter.js",
  "./routers/partsRouter.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index.js"); // Starta servern efter att swaggern genererats
});
