
var mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
      user: 'seu_usuario',
      password: 'sua_senha',
      database: 'nome_do_banco_de_dados'
})

con.connect(function(err:Error) {
    if (err) throw err;
    console.log("Connected!");
  });