// {
//     id: 1,
//     author: 'Emma',
//     quote: 'Dudas?',
//     year: 2022
// }
const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Quotes = db.define('quotes', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quote: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        defaultValue: 'Anonymous'
    },
    year: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: false
})

module.exports = Quotes