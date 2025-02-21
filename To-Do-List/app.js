import express, {json} from 'express';
import tareas from './local_db/tareas.json' with {type: 'json'};
import { validateTarea } from './schemas/tarea.js';
import { randomUUID } from 'node:crypto';

const app = express()

app.disable('x-powered-by')

app.use(json())

// * GET 

app.get('/tareas', (req, res) => {
    const response = {
        success: true,
        data: tareas
    }
    res.json(response)
})

// * GET CON ID


app.get('/tareas/:id', (req, res) => {
    const { id } = req.params

    const parsedId = Number(id)

    if (isNaN(parsedId)){
        res.status(400).json({
            success: false,
            message: "El ID obligatoriamente debe de ser un numero"
        })
    }

    const tarea = tareas.find( (tarea) => tarea.id === parsedId)

    if (!tarea){
        res.status(204).json({
            success: true,
            data: null
        })
    }
    
    const response = {
        success: true,
        data: tarea ?? null
    }

    res.status(200).send(response)
})

// * POST

app.post('/tareas', (req, res) => {
    const data = req.body
    
    const result = validateTarea(data)

    if (!result.success){
        res.status(400).json({
            success: false,
            message: result.error.errors.map(error => ({
                message: error.message,
                path: error.path[0]
            }))
        })
    }

    const id = randomUUID()

    const info = {
        id, ... result.data,
        fecha: new Date().toISOString()
    }

    tareas.push(info)

    res.status(200).json({
        success: true, 
        data: info
    })

})

// * PUT

app.put('/tareas/:id', (req, res) => {
    const { id } = req.params

    const parsedId = Number(id)

    if (isNaN(parsedId)){
        res.status(400).json({
            success: false,
            message: "El ID obligatoriamente debe de ser un numero"
        })
    }

    const index = tareas.findIndex((tarea) => tarea.id === parsedId);

    if (index === -1) {
        return res.status(204).json({
            success: true,
            data: null
        });
    }

    const data = req.body
    const result = validateTarea(data)

    if (!result.success){
        res.status(400).json({
            success: false,
            message: result.error.errors.map(error => ({
                message: error.message,
                path: error.path[0]
            }))
        })
    }

    tareas[index] = {
        ...tareas[index],
        ...result.data
    }

    res.json({
        success: true,
        data: tareas[index]
    })

})

// * DELETE

app.delete('/tareas/:id', (req, res) => {
    const { id } = req.params

    const parsedId = Number(id)

    if (isNaN(parsedId)){
        res.status(400).json({
            success: false,
            message: "El ID obligatoriamente debe de ser un numero"
        })
    }

    const index = tareas.findIndex((tarea) => tarea.id === parsedId);

    if (index === -1) {
        return res.status(204).json({
            success: true,
            data: null
        });
    }

    const eliminar = tareas.splice(index, 1)[0];

    res.json({
        success: true,
        message: "Tarea ha sido eliminada",
        data: eliminar 
    })

})

app.use((req, res) => {
    res.status.json({
        success: false,
        message: "Recurso no encontrado"
    })
})



const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})

