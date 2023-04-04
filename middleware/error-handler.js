const { CustomAPIError } = require("../errors/custom-error")

const errorHandlerMiddleware = (err, req,res,next) => {
    console.log(err instanceof CustomAPIError,err.status, err.message,Object.keys(err))

    if (err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    // console.log(err.status, err.message,Object.keys(err))
    return res.status(500).json({msg: `Something Went Wrong`})
}
module.exports = errorHandlerMiddleware