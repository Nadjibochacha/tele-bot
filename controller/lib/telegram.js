const { axiosInstance } = require("./axios");

function sendMessage(msgObj,msgText){
    return axiosInstance.get("sendMessage", {
        chat_id: msgObj.chat.id,
        text : msgText
    })
}

function handelMessege(messageObj) {
    const messageText = messageObj.text || "";
    if (messageText.charAt(0) === '/') {
        const command = messageText.substr(1)
        switch (command) {
            case 'start':
                return sendMessage(messageObj,"Hi! i'm Nadjib's bot, i'm here to help you.")    
            case 'about': 
                return sendMessage(messageObj,
                    "Hello, I'm Najib, a web application developer. My mission is to create digital solutions that make your daily tasks, both general and specific, easier and less time-consuming. I aim to deliver these services at an affordable cost. My focus is on solving issues related to office management, business operations, digital marketing, and e-commerce. I would be happy to assist you—please feel free to contact me here. You can view my previous work at the following link: https://nadjib-chacha.vercel.app/")
        
            default:
                return sendMessage(messageObj,"Actully, i don't know how can i help you")
        }
    } else {
        return sendMessage(messageObj,messageText)
    }  
}

module.exports = {handelMessege}
