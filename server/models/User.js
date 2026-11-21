import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    email:{type: String, required: true, unique: true, lowercase: true},
    password:{type: String, required: true, minlength: 5, select: false}
})

userSchema.pre("save", async function(){
    if(!this.isModified("password"))return;
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.matchPassword = function(input){
    return bcrypt.compare(input, this.password)
}
export default mongoose.model("User", userSchema)