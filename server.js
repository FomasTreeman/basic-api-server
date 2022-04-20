
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require('dotenv').config();

const app = express();

const dbConfig = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    port: process.env.DB_PORT,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const mysqlConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// express middleware to allow parsing a json body 
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

var con = mysql.createConnection(mysqlConfig);

// simple route
app.get("/", async (req, res) => {
    res.send('hello world');
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

// test db is a ok
// app.get("/init", (req, res) => {
//     con.connect((err) => {
//         if (err) throw err;
//         console.log('connected')
//         con.query('show tables;', (err, result) => {
//             if (err) throw err;
//             console.log('created tables');
//             res.send(result)
//         })
//     })
// })

app.get("/chats", (req, res) => {
    con.connect((err) => {
        if (err) throw err;
        console.log('connected')
        con.query('select * from chats;', (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result)
        })
    })
})

app.post("/register", (req,res) => {
    const {username , display_name } = req.body;
    con.connect((err) => {
        if (err) throw err;
        console.log('connected')
        var createUser = 'insert into users values ?;';
        con.query(createUser, [username, display_name], (err, result) => {
            if (err) throw err;
            console.log('successfully created user');
        })
    })
})

// app.get('/api/users', (req, res) => {
//     res.json(database.users);    
//     res.send(JSON.stringify(database.users));
// })

// app.post("/signin", (req,res) => {
//     if (req.body.email === database.users[0].email &&
//         req.body.password === database.users[0].password) {
//         res.json("successfully signed in");
//     } else {                                                                                                                                                                                                                                                         
//         res.status(400).json("error logging in");
//     }
// })




// app.get('/profile/:id', (req,res) => {
//     const {id} = req.params;
//     let found = false;
//     database.users.forEach(user => {
//             if (user.id === id) {
//                 found = true;
//                 return res.json(user);
//             } 
//         }) 
// })
//     if (found = false) {
//         res.staus(404).json("user doesnt exist")
//     };


const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});

//  not necessary as defaults to port 3000 but this is validating the port and logging message for further proof 

