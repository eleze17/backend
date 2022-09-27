const fs = require('fs');

class Contenedor{
    constructor(archivo){
        this.archivo = archivo
        this.productos = []
    }

     async save(p){
        let id = this.productos.length
        this.productos.push({...{id: id}, ...p })
        await fs.promises.writeFile(this.archivo,JSON.stringify(this.productos))
         }
    
        async getall(){
        let contenido = await fs.promises.readFile(this.archivo,'utf8')
        let contjson =  JSON.parse(contenido)
        return contjson
    }

    
    async getById(id){
        let contenido = await fs.promises.readFile(this.archivo,'utf8')
        let contjson =  JSON.parse(contenido)
        let buscado = contjson.find(prod => prod.id == id)
        return buscado
    }
        
    

    async deleteall(){
        this.productos.splice(0,this.productos.length)
        await fs.promises.writeFile(this.archivo,"[]")
    }

    async deletebyid(id){
        const index = this.productos.findIndex(prod => prod.id == id)
        this.productos.splice(index,1)
        await fs.promises.writeFile(this.archivo,JSON.stringify(this.productos))
        .then (console.log(`Se elimino el producto ${id}`))
    }


}


let contenedor = new Contenedor('productos.txt')
//let producto1 = {'Marca':'Coca-Cola','Categoria':'Bebida','Precio':400}
//let producto2 = {'Marca':'Ala','Categoria':'Limpieza','Precio':800}
//let producto3 = {'Marca':'Paty','Categoria':'Congelados','Precio':1000}
//let producto4 = {'Marca':'Toddy','Categoria':'Galletitas','Precio':200}
//let producto5 = {'Marca':'Colgate','Categoria':'Perfumeria','Precio':300}


const funciones= async () => {
 //await contenedor.save(producto1);
 //await contenedor.save(producto2);
 //await contenedor.save(producto3);
 //await contenedor.save(producto4);
 //await contenedor.save(producto5);
 const todos = await contenedor.getall()
 console.log(todos)
 ;
//const busca = (id)=> console.log(  contenedor.getById(id))
//busca(2)
//await contenedor.deletebyid(2)
//await contenedor.deleteall()

}
 
funciones()


module.exports = Contenedor

 


