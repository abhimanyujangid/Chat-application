import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

//-------------------------------Send Message-------------------------
export const sendMessage = async (req, res) => { 
    try {
        const senderId = req.id; // Get the sender's ID from the authenticated user
        const receiverId = req.params.id; // Get the receiver's ID from the request parameters
        const { message } = req.body; // Extract the message content from the request body
       
        // Check if a conversation already exists between the sender and receiver
        let gotConversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        // If no conversation exists, create a new one
        if (!gotConversation) {
            gotConversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        // Create a new message document
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });

        // If the message was created successfully, add its ID to the conversation's messages array
        if (newMessage) {
            gotConversation.messages.push(newMessage._id);
        }

        // Save the updated conversation
        await gotConversation.save();

        // Optionally, send a response back to the client indicating success
        return res.status(201).json({ message: "Message sent successfully" });

    } catch (error) {
        console.error("Error sending message:", error);

        // Send a response back to the client indicating failure
        return res.status(500).json({ message: "Failed to send message" });
    }
};

//---------------------------------Get Message------------------------
export const getMessage =  async (req, res) =>{
    try {
        const receiverId =  req.params.id;
        const senderId = req.id; // Get the sender's ID from the authenticated user
        const conversation =  await Conversation.findOne ({
            participants:{$all:[senderId,receiverId]}
        }).populate("messages")
        console.log(conversation.messages)
    } catch (error) {
        console.log(error)
    }
}