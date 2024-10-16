const con = require ('../connect/connect').con;

const create = (req, res) =>{
    let nome = req.body.nome;
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    let data_cadastro = req.body.data_cadastro;

    let query = 'INSERT INTO tarefas (nome, titulo, descricao, data_cadastro) VALUES'
    query += `('${nome}', '${titulo}', '${descricao}', '${data_cadastro}');`;
    con.query(query, (err, result) =>{
        if (err){
            res.status(500).json(err);
        }else{
            res.status(201).json(result)
        }
    })
}

const read = (req, res)=>{
    con.query('SELECT * FROM tarefas', (err,result)=> {
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

module.exports = {
    create,
    read
}