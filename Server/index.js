const server = require("../Server/src/app");

const { db } = require("../Server/src/db");

const { PORT } = process.env || 3001;


db.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
  });
});
