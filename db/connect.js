const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://sandeep:12345@atlascluster.51npqof.mongodb.net/Task_Manager?retryWrites=true&w=majority'


const connectDB = (url) => {
    return mongoose
    .connect(url,
        {useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
        })
    .then(()=> console.log("Connected to the DB...."))
    .catch((err)=>console.log(err))
}

module.exports = connectDB