import Joi from 'joi'

const createNewChat = async (req, res) => {
    const valid = Joi.object({
        chat: Joi.string().min(1).required().trim().strict(),
        status: Joi.string().trim().strict().required()
    })

    try {
        console.log(req.body)

        await valid.validateAsync(req.body, { abortEarly: false })
        res.status(201).json({ message: 'Post from Validation: success create new chat' })
    } catch (error) {
        console.log(error)
        console.log(new Error(error))

        res.status(422).json({
            error: new Error(error).message
        })
    }

}

export const chatValidation = {
    createNewChat,
}