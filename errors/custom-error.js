class CustomAPIError {
    constructor(message, statusCode) {
        // super(message)
        this.message = message;

        this.statusCode = statusCode
    }
}

const createCustomHandler = (msg, statusCode) => {
    return new CustomAPIError(msg,statusCode)
}

module.exports = { createCustomHandler, CustomAPIError}