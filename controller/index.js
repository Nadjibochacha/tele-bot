const {handelMessege } = require('./lib/telegram')

async function handler(req, method) {
    const {body} = req
    if (body) {
        const messageObj = body.message
        await handelMessege(messageObj)
    }
    return;
}

module.exports = {handler};