const e = require('express');
const express = require('express') //carregando o express.
const app = express() //Construindo o objeto da aplicação principal.
const port = 3000 //Determina a porta http do servidor.


//Implementar as rotas 
app.get('/', (Req, res) => {
    res.send('Aplicativo on line.')
});

app.use(express.json())

app.post('/login', (req,res) => {
    const user = req.body;
    console.log(user.email , user.user);
    res.send(' Usuario recebido.')
});



app.listen(port, () => {
     console.log(`Aplicação rodando na porta ${port}`)
});