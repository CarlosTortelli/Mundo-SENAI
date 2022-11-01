const { Client } = require('pg')

const ObterVisitantes = async () => {

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'NorthWind',
        password: 'admin123',
        port: 5432,

      })

    await client.connect()
    const res = await client.query('Select * from "NorthWind".visitante')
    console.table(res.rows)
    await client.end()
}

    exports.post = async function insertCustomer(customer){
        const insert = await connect();
        const sql = 'INSERT INTO visitante(idade_visitante, nome_visitante, telefone_visitante, email_visitante) VALUES ($1,$2,$3,$4);';
        const values = [customer.idade_visitante, customer.nome_visitante, customer.telefone_visitante, customer.email_visitante];
        return await insert.query(sql, values);
    }

ObterVisitantes().then((res) => {
    console.log("BANCO FUNUNCIA")
   
});
