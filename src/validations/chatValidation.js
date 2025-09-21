import Joi from 'joi'

const createNewChat = async (req, res, next) => {
    const valid = Joi.object({
        chat: Joi.string().min(1).required().trim().strict(),
        status: Joi.string().trim().strict().required()
    })

    try {
        
        await valid.validateAsync(req.body, { abortEarly: false })

        next()

    } catch (error) {
        console.log(error)

        res.status(422).json({
            error: new Error(error).message
        })
    }

}

export const chatValidation = {
    createNewChat,
}