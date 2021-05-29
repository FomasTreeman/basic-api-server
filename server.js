const express = require("express"); 
const app = express(); 

app.use(express.json()); // express middleware to allow parsing a json body 


const  database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: '0',
            joined: new Date(),
        },
        {
            id: '124',
            name: 'sally',
            email: 'sally@gmail.com',
            password: 'banananas',
            entries: '0',
            joined: new Date(), 
        }
    ]
}


app.get('/', (req, res) => {
    res.json(database.users);    
})


app.post("/signin", (req,res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
        res.json("successfully signed in");
    } else {
        res.status(400).json("error logging in");
    }
})


app.post("/register", (req,res) => {
    const {email , name, password} = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: '0',
        joined: new Date(),
    }); 
    res.json(database.users[database.users.length-1])
})


app.get('/profile/:id', (req,res) => {
    const {id} = req.params;
    let found = false;
    database.users.forEach(user => {
            if (user.id === id) {
                found = true;
                return res.json(user);
            } 
        }) 
})
    if (found = false) {
        res.staus(404).json("user doesnt exist")
    };


    app.post('/image', (req,res) => {
        const {id} = req.body;
        let found = false;
        database.users.forEach(user => {
                if (user.id === id) {
                    found = true;
                    user.entries++
                    return res.json(user.entries);
                } 
            }) 
    })
        if (found = false) {
            res.staus(404).json("user doesnt exist")
        };
    


app.listen(3000, ()=> {
    console.log("app is runnign on port 3000");
})

//  not necessary as defaults to port 3000 but this is validating the port and logging message for further proof 

