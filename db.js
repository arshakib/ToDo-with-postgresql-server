const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Youtube",
  password: "123@artcell",
  port: 5432,
});

module.exports = pool;
