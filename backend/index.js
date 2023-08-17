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
        if (err) console.log(err, 'error')
        if (result.length > 0) {
            res.send({
                message: 'required user data',
                data: result
            })
        }
    })
})











app.listen(3000, () => {
    console.log('server running...!')
})