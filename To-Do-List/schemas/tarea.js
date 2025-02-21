import { z } from 'zod'

const tareaSchema = z.object({
    "titulo": z.string({
        required_error: "El titulo es obligatorio"
    }),
    "descripcion": z.string().min(20),
    "completada": z.boolean(),
})

export const validateTarea = (data) => {
    return tareaSchema.safeParse(data)
}
