const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('db_dados', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})
// sequelize.authenticate().then(()=>{
//     console.log('conexão realizada com sucesso... ')
// }).catch((error)=>{
//     console.error('não foi possível realizar essa conexão com o db... ')
// })

module.exports = sequelize 