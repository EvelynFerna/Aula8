const express = require ('express')
const router = express.Router();

const tarefas = require('./controllers/tarefas')

const teste = (req, res) =>{
    res.json(" API Tarefas respondendo com sucesso!!");
}

router.get('/', teste);
router.post('/tarefas', tarefas.create);
router.get('/tarefas', tarefas.read);

module.exports = router;