const express = require('express');
const cors = require ('cors');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({
    type: 'application/vnd.api+json'
}))
app.use(cors());

const port = process.env.PORT || 3000;
//exemplo uso do get
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'))
});

//POST -> serve para incluir dados no servidor
app.post('/api', (req, res)=>{

    console.log('foi mandado :\n', req.body)
    _key = req.body._key;
    _key2 = req

    res.status(200).send(
        {sucess: 'true',
        message: 'Ok correto...'
    }
    );
});



app.listen(port, () => console.log(`Estou escutando na porta ${port}`));