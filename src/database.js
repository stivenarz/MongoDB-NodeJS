import {connect} from 'mongoose';

(async ()=>{
    try {
        // const db = connect('mongodb://localhost:27017/dbTest');
        const db = await connect('mongodb+srv://snarz:Snarz1505@students.72dzybg.mongodb.net/?retryWrites=true&w=majority');
        console.log('DB connected to ' + db.connection.name);
    } catch (error) {
        console.log(error);
    }
})()