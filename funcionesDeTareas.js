console.clear()

const fs = require("fs")

const leerJson = fs.readFileSync("./tareas.json","utf8")
const jsonParse = JSON.parse(leerJson)
const guardarEnJson = (guardar) => fs.writeFileSync("./tareas.json",JSON.stringify(guardar,null,3))

module.exports ={  

  listarTareas : () => jsonParse.forEach((e,i) =>  console.log(i + 1 , e)),

  crearTareas : (nuevaTarea) =>{

        jsonParse.push(nuevaTarea)
        guardarEnJson(jsonParse)
    },

  filtrarPorEstado : tarea =>{

      let estadoParse = jsonParse.filter(e => e.estado === tarea)

      estadoParse.forEach(( e , i ) => console.log( i + 1 , e ))
      return " "
    }
}


