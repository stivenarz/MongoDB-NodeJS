import app from "./app";
import {PORT} from './config'


app.listen(PORT,()=>{
    console.log('Server is running now on port ' + PORT)
})