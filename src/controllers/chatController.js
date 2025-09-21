const createNewChat = (req, res) => {
    try {
        console.log(req.body)
        res.status(201).json({ message: "Post from Controller: success create new chat" })
    }catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export const chatController = {
    createNewChat
}