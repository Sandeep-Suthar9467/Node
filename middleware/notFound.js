const notFoundRoute = (req,res) =>{
    res.status(404).json({
        mssg: "Route does not exist"
    })
}
module.exports = notFoundRoute