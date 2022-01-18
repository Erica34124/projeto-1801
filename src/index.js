import {opendb} from "./database.js";
import express from "express";


const app = express();

app.use(express.json());

app.get('/api/ping',(request, response)=>{
    response.send({
        message: 'pong'
    })
} );


// endpoints
app.get('/api/veiculos', async  (request, response)=>{
   const db =  await opendb();
   const veiculos = await db.all(`
   SELECT * FROM veiculos
   `);
   response.send(veiculos)
       
});
app.post('/api/veiculos1', (request, response)=>{
    response.send({
        
            id: 4,
            name: 'civic',
            owner: 'erica',
            type: 'car'
           
    })

});
app.put('/api/veiculos2', (request, response)=>{
    response.send({
        
        id: 5,
        name: 'civic',
        owner: 'erica',
        type: 'car'
       
})

});
app.delete('/api/veiculos3', (request, response)=>{
    response.send({
        
        id: 6,
        name: 'civic',
        owner: 'erica',
        type: 'car'
       
})
});
app.listen ( 8000,( )=>{
    console.log('servidor rodando na porta 8000');
});