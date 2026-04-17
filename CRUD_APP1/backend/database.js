const mongoose = require('mongoose');

async function dbconnect() {
    const conn = await mongoose.connect("mongodb+srv://zainabshujatali_db_user:<db_password>@cluster0.jids5l7.mongodb.net/?appName=Cluster0");
    if (conn) { 
        console.log("Database connected successfully");
    } else {
        console.log("Database connection failed");
    }
}
module.exports = dbconnect;
