require("dotenv").config();
const { Pool } = require('pg');
//const db = require("./db//");

 
const pool = new Pool();
 
module.exports = {
  query: (text, params) => pool.query(text, params),
};
