const pg = require('../database/database');

exports.get = (req, res) => {
    res.send("musica get")
}

exports.find = async function selectCustomers() {
    const find = await connect();
    const res = await find.query('SELECT * FROM visitante(idade_visitante, nome_visitante, telefone_visitante, email_visitante)');
    return res.rows;
}

exports.post = async function insertCustomer(customer){
    const insert = await connect();
    const sql = 'INSERT INTO visitante(idade_visitante, nome_visitante, telefone_visitante, email_visitante) VALUES ($1,$2,$3,$4);';
    const values = [customer.idade_visitante, customer.nome_visitante, customer.telefone_visitante, customer.email_visitante];
    return await insert.query(sql, values);
}
