const messages = [];

exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
        const {nickname, message} = JSON.parse(event.body);
        messages.push({nickname, message});
        if (messages.length > 20) {
            messages.shift();
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(messages)
    };
};
