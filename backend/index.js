const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());


// database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sanjar1304',
    database: 'simpledb',
    port: 3306
})

// check database connection
db.connect((err) => {
    return !err ? console.log('database connected') : console.log(err);
})

// get all data
app.get('/user', (req, res) => {

    let query = `select * from user`;
    db.query(query, (err, result) => {
        if (err) console.log(err, 'error')

        if (result.length > 0) {
            res.send({
                message: 'all user data',
                data: result
            })
        }
    })

})



// get single data
app.get('/user/:id', (req, res) => {
    let getID = req.params.id;
    let query = `select * from user where id = ${getID}`;

    db.query(query, (err, result) => {
        if (err) console.log(err, 'error');

        if (result.length > 0) {
            res.send({
                message: 'get single data',
                data: result
            })
        } else {
            res.send({
                message: 'data not found',
            })
        }
    })
})



// post data
app.post('/user', (req, res) => {
    let fullname = req.body.fullname;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let query = `insert into user(fullname,email,mobile) values('${fullname}','${email}','${mobile}')`
    db.query(query, (err, result) => {
        if (err) console.log(err);
        res.send({
            message: 'data inserted',
        })
    })
})



// update single data
app.put('/user/:id', (req, res) => {

    let id = req.params.id;
    let fullname = req.body.fullname;
    let email = req.body.email;
    let mobile = req.body.mobile;

    let query = `update user set fullname = '${fullname}', email = '${email}', mobile = '${mobile}' where id = ${id}`;
    db.query(query, (err, result) => {
        if (err) console.log(err);
        res.send({
            message: 'data updated',
        })
    })
})



// delete data
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    let query = `delete from user where id = ${id}`;
    db.query(query, (err, result) => {
        if (err) console.log(err);
        res.send({
            message: 'data deleted'
        })
    })
})







app.listen(3000, () => {
    console.log('server running...!')
})