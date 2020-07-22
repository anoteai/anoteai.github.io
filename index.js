const express = require('express')
const bodyParser = require('body-parser')

const api = express();
api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

api.listen(process.env.PORT || 3000, () => {
    console.log(`Anote ai na port http://localhost:3000`)
})
