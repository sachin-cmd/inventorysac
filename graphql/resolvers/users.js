const User = require('../../models/user')

 const bcrypt = require('bcryptjs')

// const jwt = require('jsonwebtoken')

// const nodemailer = require('nodemailer')







module.exports = {


    createUser: async (args) => {
        try {
            const user = await User.findOne({ email: args.userInput.email });
        

            if (user) {
                throw new Error("User Already Exists");
            } else {

                const hashedPass = await bcrypt.hash(args.userInput.password, 12);
                const user = new User({
                    firstname: args.userInput.firstname,
                    lastname: args.userInput.lastname,
                    department: args.userInput.department,
                    email: args.userInput.email,
                    password: hashedPass,
                    verified:false

                });

                const result = await user.save();
                return { ...result._doc,password:null, createdAt: new Date(result._doc.createdAt).toLocaleString(),
                    updatedAt: new Date(result._doc.updatedAt).toLocaleString() };
            }
        } catch (err) {
            throw err;
        }
    },






        users: async () => {
            try {
                const users = await User.find();
                return users.map(user => {
                    return { ...user._doc, _id: user.id };
                });
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    
}
        
               
    
