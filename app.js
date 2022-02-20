console.clear()

//const tareas = require("./tareas.json") // trae el json parseado, pero NO es lo que pide el TP
const process = require("process");
const { listarTareas,crearTareas,filtrarPorEstado } = require("./funcionesDeTareas");

const comando = process.argv[2]//.toLowerCase()


switch (comando) {
    case "listar":    
        listarTareas()
    break;

    case "agregar":
        let titulo = process.argv[3]
        
        let nuevoObjeto ={
            titulo,
            estado : "pendiente"
        }
        titulo === undefined ? console.log("Debe ingresar un estado") : crearTareas(nuevoObjeto) + console.log(" Tarea agregada exitosamente!")  
    break
    
    case "filtrar": 
        let estado = process.argv[3]//.toLowerCase()
        let estadosValidos = ["terminada","en progreso","pendiente"]

        if (true === estadosValidos.includes(estado)) {
             console.log(filtrarPorEstado(estado))
             return console.log("Filtrado exitoso!")
        }
        else if (estado === undefined) {
            return console.log("Debe ingresar un parametro a filtrar. Por ej: " + estadosValidos)
        }else {
            return console.log("Filtrado exitoso! No se encontraron resultados!")
        }          
    break

    case (undefined):
        console.log("Atención - Tienes que pasar una acción.")
    break
    
    default:
        console.log("No entiendo qué quieres hacer.")
    break
}
