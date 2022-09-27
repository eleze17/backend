const express = require('express')
const Contenedor = require('./contenedor')
const app = express()

const PORT = process.env.PORT ||8080

const server = app.listen(PORT,()=> console.log('Servidor corriendo '))
server.on('error',error => console.log(`Error ${error}`))

let contenedor = new Contenedor('productos.txt')

contenedor.getall()
    .then(productos => app.get('/productos',(req,res)=>{
    res.send(productos)}))

let id_buscar = Math.floor(Math.random() * 4)

contenedor.getById(id_buscar)
.then(producto => app.get('/productorandom',(req,res)=>{
    res.send(producto)}))

    