const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT), // Convert to number
});

module.exports = pool;

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "Youtube",
//   password: "123@artcell",
//   port: 5432,
// });
