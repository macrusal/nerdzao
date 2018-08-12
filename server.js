const express = require('express');
const mongo = require('mongodb');

async function main() {
    try {
        const app = express();
        const cliente = 
            await mongo.connect('mongodb://ronaldinho:nerdzao1@ds213832.mlab.com:13832/nerdzao-rick-and-morty',{
                useNewUrlParser:true,
            })
        
            const bancoDados = cliente.db('nerdzao-rick-and-morty');
            const personagens = bancoDados.collection('characters');
        
        //permite que nossa aplicacao escute o pedido de personagens
        app.get('/personagens', async (requisicao, resposta) => {
            const personagensTodos = await personagens.find().toArray();
            resposta.send(personagensTodos);
        });

        // A aplicacao pode escutar na porta determinada
        app.listen(5000, () => {
            console.log('Escutando na porta 5000');
        });
    } catch (error) {
        //const variavel = "Teste";
        console.log(`Deu ruim...${error}`);
    }
}

main();