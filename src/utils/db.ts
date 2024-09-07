import mongoose from "mongoose"




export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("MongoDB Connected")
        })

        connection.on('error', (err) => {
            console.log("mongodb connection error , please make sure server running" + err);
            process.exit()
        })
    } catch (error) {
        console.log("db Connection wrong");
        console.log(error)
    }
}