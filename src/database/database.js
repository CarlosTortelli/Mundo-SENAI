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
    const res = await client.query('select * from "NorthWind".visitante')
    const result = res.rows[0].message
    await client.end()
    return result;
}

ObterVisitantes().then((result) => {
    console.log(result)
});
