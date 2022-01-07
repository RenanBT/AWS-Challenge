
  
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000; //porta padrão
const mysql = require('mysql');
//const { parse } = require('path/posix');

  var cors = require('cors');

  app.use(cors());
  

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({message: 'Funcionando!'}));
app.use('/', router);


//inicia o servidor
app.listen(port);
console.log('API connected!');


router.get('/categories', (req, res) => {
  execSQLQuery('SELECT * FROM category', res);
});

router.post('/categories', (req, res) =>{
  const name = req.body.name;
  execSQLQuery(`INSERT INTO category(name) VALUES('${name}')`, res);
});

router.get('/devices', (req, res) => {
  execSQLQuery('SELECT d.*,c.name as category_name FROM device d INNER JOIN category c ON d.category_id = c.id', res);

});

router.post('/devices', (req, res) =>{
  const category_id = parseInt(req.body.category_id);
  const color = req.body.color;
  const part_number = parseInt(req.body.part_number);
  execSQLQuery(`INSERT INTO device(category_id, color, part_number) VALUES(${category_id},'${color}',${part_number})`, res);
});

router.delete('/devices/:id', (req, res) =>{
  execSQLQuery('DELETE FROM device WHERE id=' + parseInt(req.params.id), res);
});

router.delete('/categories/:id', (req, res) =>{
  execSQLQuery('DELETE FROM category WHERE id=' + parseInt(req.params.id), res);
});


function execSQLQuery(sqlQry, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bem280919',
    database: 'eldorado'
  });
//host: 'database-2.c7rkqa95l1aj.sa-east-1.rds.amazonaws.com',
  connection.query(sqlQry, function (error, results, fields) {
    if (error)
      res.json(error);
    else
      res.json(results);
    connection.end();
    console.log('executou!');
  });
}
