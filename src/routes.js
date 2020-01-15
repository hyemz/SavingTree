const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var jwt = require('jsonwebtoken');
var tokenKey = "fintechAcademy!0@1#06$"

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'savingTree',
  port     : '8889' 
});
 
//connection.connect();
 
// Starting our app.
const app = express();
app.use(bodyParser.json())

// Creating a GET route that returns data from the 'users' table.
// app.get('/user', function (req, res) {
//     // Connecting to the database. 
//     connection.getConnection(function (err, connection) {

//     // Executing the MySQL query (select all data from the 'users' table).
//     connection.query('SELECT * FROM user', function (error, results, fields) {
//       // If some error occurs, we throw an error.
//       if (error) throw error;

//       // Getting the 'response' from the database and sending it to our route. This is were the data is.
//       res.send(results)
//     });
//   });
// });

app.post('/login', function(req, res){
  console.log(req.body);
  var email = req.body.email;
  var userPassword = req.body.password;
  var sql = "SELECT * FROM user WHERE email = ?";
  connection.query(sql, [email], function(error, results, fields){
      if(error) {
        console.log('error 났다..')
      }
      if(!results[0]) {
        return res.json(0);
      }
      console.log(results);
      console.log(results[0].password, userPassword) ;
          if(results[0].password == userPassword){
              jwt.sign(
                  {
                      userName : results[0].name,
                      userId : results[0].id,
                      userEmail : results[0].email
                  },
                  tokenKey,
                  {
                      expiresIn : '90d',
                      issuer : 'fintech.admin',
                      subject : 'user.login.info'
                  },
                  function(err, token){
                      console.log('로그인 성공', token)
                      res.json(token)
                  }
              )
          }
          else{
              console.log('비밀번호 틀렸습니다.');
              res.json(0);
          }    
  })

});

app.post('/user', function(req, res){
  console.log(req.body);
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var accessToken = req.body.accessToken;
  var refreshToken = req.body.refreshToken;
  var userSeqNo = req.body.userSeqNo;

  var sql = "INSERT INTO savingTree.user (name, email, password, accessToken, refreshToken, userSeqNo) VALUES (?, ?, ?, ?, ?, ?)"

  connection.query(sql, [name, email, password, accessToken, refreshToken, userSeqNo], function (error, results, fields) {
      if (error) throw error;
      console.log('The result is: ', results);
      console.log('sql is', this.sql);
      res.json(1);
  });
})
  

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/user so you can see the data.');
});
