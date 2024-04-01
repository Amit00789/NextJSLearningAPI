import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    city: String,
    tag:String
});

export const User = mongoose.models.user || mongoose.model('user', userSchema);
//the above line says mongodb to create a new collection if it doesn't exist already or
//use the existing one.
//mongoose.model('user',userSchema), here the first param is from atlas collection name
//second param is from the schema name we have created