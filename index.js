const express = require('express');
const dataStore = require('nedb')
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'))
app.use(express.json({limit: "1mb"}));

const database = new dataStore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    console.log(response)
})

app.get('/login/', (request, response) => {

})

app.get('/login/github', (request, response) => {
    
})

app.post('/api', (request, response) => {
console.log(request.body);
const data = request.body;
const timestamp = Date.now();
data.timestamp = timestamp;
database.insert(data);
response.json(data);


});
app.listen(port, ()=>{
    console.log('its running!!')
})