const express = require('express')

const app = express();
const port = 3000;

const lista = [{ id: 1, name: 'Fernandinho Da Vila'},
    { id: 2, name: 'Xarlis fn'},
    { id: 3, name: 'Dudu Kittimete'}];

const cors = require('cors');
app.use(cors())

app.use(express.json());
app.get('/', (req, res) =>{
    res.send(lista)
})

app.listen(port, ()=>{
    console.log(port)
})