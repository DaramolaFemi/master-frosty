import userMoldel from "../Models/UserModel.js";
import jwt from  'jsonwebtoken'
import bycrypt from 'bcrypt'
import validator from 'validator'

// user login

const LoginUser = async (req,res)=>{

    const {email, password} = req. body;
    try {
        const user = userMoldel.findOne({email})

        if (!user) {
          return  res.json({success:false, message: 'user not found!'})

        }
        const isMatch = await bycrypt.compare(password,user.password)
        if (!isMatch) {
            return res.json({success:false, message: 'invalid credentials!'})

        }
      const token = createToken(user._id);
      res.json({success:true, token})  
    } 
    catch (error) {
        console.log(error);
        res.json({success:false, message: "error"})
        
    }


}

// create token
const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// reg user

const registerUser = async (req,res)=>{

    const {name, password, email}= req.body   

    try {
        // check if existing user
        const exist = await userMoldel.findOne({email})
    if (exist) {
        return res.json({success:false, message: 'user alredy exist'})
    }
    // validating email and strong pass
    if (!validator.isEmail(email)) {
     return res.json({success:false, message: 'Pls enter a valid email'})
    }
    if (password.length < 8) {
        return res.json({success:false, message: 'enter a strong password'})
    }
    // hashing usr password
    const salt = await bycrypt.genSalt(10)
    const hashedPassword = await bycrypt.hash(password,salt);
    const newUser = new userMoldel({
        name:name,
        email:email,
        password:hashedPassword
    })
    const user = await newUser.save()

   const token = createToken(user._id)
   res.json({success:true, token}) 

    } catch (error) {
        console.log(error);
        res.json({success:false, error}) 
        
    }

}

export {LoginUser, registerUser}