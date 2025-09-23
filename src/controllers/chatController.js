const createNewChat = (req, res, next) => {
    try {
        throw new Error("test error global")
        console.log(req.body)
        res.status(201).json({ message: "Post from Controller: success create new chat" })
    }catch (error) {
        next(error)
        // res.status(500).json({
        //     error: error.message
        // })
    }
}

export const chatController = {
    createNewChat
}