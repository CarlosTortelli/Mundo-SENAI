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

ObterVisitantes().then((res) => {
    console.log("BANCO FUNUNCIA")
});
