import exp from 'express'
import { connect } from 'mongoose'
import { userRoute } from './APIs/userAPI.js'
import { productRoute } from './APIs/prodAPI.js'

const app = exp();
const port = 4000;

app.use(exp.json())

app.use("/users", userRoute)
app.use("/products", productRoute)

async function connectionDB(){
    try{
        await connect("mongodb://localhost:27017/ecom")
        console.log("Connected to go")
        app.listen(port,()=>console.log("server listening on port 4000..."))
    }catch(err){
        console.log(err)
    }
}

connectionDB()

app.use((err,req,res,next)=>{
    res.status(500).send("Something went wrong")
})
