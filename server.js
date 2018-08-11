const express = require('express');

async function main() {
    const app = express();

    //permite que nossa aplicacao escute o pedido de personagens
    app.get('/personagens', (requisicao, resposta) => {
        resposta.send('oi');
    });

    // A aplicacao pode escutar na porta determinada
    app.listen(5000, () => {
        console.log('Escutando na porta 5000');
    });
}

main();