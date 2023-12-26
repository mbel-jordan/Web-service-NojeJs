const express =  require("express")
const app = express()
const cors = require('cors')

const port = 3000
const ChansonsRouter =  require("./routes/chansonsRouts")

app.use(cors())
app.use(express.json())
app.use(
    express.urlencoded({
        extended:true
    })
)

app.get("/",(req,res) => {
    res.json({message: "ok"})
})

app.use("/chansons",ChansonsRouter)

app.use((err,rea,res,next) =>{
    const statusCode = err.statusCode || 500
    console.error(err.message,err.stack)
    res.status(statusCode).json({message : err.message})
    return
})

app.listen(port, () => {
    console.log("belom jordan")
    console.log(`Chansons app listening at http://localhost:${port}`)

})