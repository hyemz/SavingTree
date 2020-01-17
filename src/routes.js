//Our SavingTree's Server file :)
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var jwt = require('jsonwebtoken');
var tokenKey = "fintechAcademy!0@1#06$";
var auth = require('../lib/auth');
var request = require('request');


//Connect to mysql 
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'savingTree',
  port     : '8889' 
});
 
// Starting our app.
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));


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
                      issuer : 'savingTree.admin',
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

app.get('/user', function (req, res) {
  connection.getConnection(function (err, connection) {

  connection.query('SELECT * FROM savingtree.user', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
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

app.post('/forestAdd', function(req, res){
  console.log(req.body);
  var forest_name = req.body.forest_name;
  var limit_num = req.body.limit_num;
  var goal = req.body.goal;
  var user_user_id = req.body.user_user_id;

  var sql = "INSERT INTO savingTree.forest (user_user_id, limit_num, goal, forest_name) VALUES (?,?, ?, ?)"
  connection.query(sql, [user_user_id,limit_num, goal, forest_name], function (error, results, fields) {
      if (error) throw error;
      console.log('The result is: ', results);
      console.log('sql is', this.sql);
      res.json(1);
  });
})
  
app.post('/accountList',auth, function(req, res){
  var userData = req.decoded;
  var sql = "SELECT * FROM savingtree.user WHERE user_id = ?"
  
  connection.query(sql, [userData.userId], function(err, result){
      if(err){
          console.error(err);
          throw err;
      }else {
        console.log('result-----------------\n',result);
          var option = {
              method : "get",
              url : "https://testapi.openbanking.or.kr/v2.0/account/list",
              headers : {
                  "Authorization" : "Bearer "+result[0].accessToken
              },
              qs : {
                  'user_seq_no' : result[0].userSeqNo,
                  'include_cancel_yn' : 'Y',
                  'sort_order' : 'D'
              }
          }
          request(option, function(error,response, body){
            console.log('------body------');
            console.log(body);
            var parseData = JSON.parse(body);
            console.log('------parse------');
            console.log(parseData.res_list[0].fintech_use_num);
              // window.fin_num = parseData.res_list[0].fintech_use_num;
              res.json(parseData);
          })        
      }
  })    
});
app.post('/select', function(req, res){
  var email = req.body.email;
  var sql = "SELECT * FROM savingtree.user u JOIN savingtree.forest f ON f.forest_id = u.forest_id where u.email = ?;";
  
  connection.query(sql, [email], function(error, results, fields){
      if(error) {
        console.log('error 났다..')
      }
      else {
        res.json(results); 
      }
  })
});

// Starting our server.
app.listen(3010, () => {
 console.log('Go to http://localhost:3010/user ');
});
