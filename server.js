import exp from 'express'
import {userApp} from './APIs/UserAPi.js'
import {productApp} from './APIs/ProductAPI.js'
import {connect} from 'mongoose'
const app=exp()
const PORT = 4000;

async function connectDB(){
    try{
    await connect('mongodb://localhost:27017/anuragdb2')
    console.log("DB Connection success")
    //Assign port
    app.listen(PORT, () => console.log("Server running on port  4000..."));
    }catch(err){
        console.log("error in db connection:",err)
    }
}
connectDB()
 //body parser middleware
 app.use(exp.json())
//if path starts with /user-api , forward req ro userApp
 app.use('/user-api',userApp)
 app.use('/product-api', productApp) 

