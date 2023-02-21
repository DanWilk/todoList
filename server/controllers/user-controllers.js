const {User} = require("../models");
const { signToken, authMiddleware } = require("../utils/auth");

const userController = {
    getUserById({params}, res) {
        User.findOne({_id: params.id})
        .populate({
            path: "todos",
            select: "-__v"
        })
        .select("-__v -password")
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: "No User found with this id!"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    createUser({body}, res) {
        User.create(body)
        .then(dbUserData => {
            const token = signToken(dbUserData);
            const userData = {
                username: dbUserData.username,
                email: dbUserData.email,
                _id: dbUserData._id
            }
            const userResponseData = {
                token: token,
                user: userData
            }
            res.json(userResponseData);
        })
        .catch(err => {
            console.log(err);
            res.status(404).json(err)
        });
    },
    async login({body}, res) {
        const user = await User.findOne({email: body.email});
            
        if(!user) {
            res.json({text: "invalid username/password"});
        }
    
        const correctPw = await user.isCorrectPassword(body.password);
    
        if(!correctPw) {
            res.json({text: "invalid username/password"});
        }

        const userData = {
            username:user.username,
            email:user.email,
            _id:user._id
        }
    
        const token = signToken(user);
        res.json({
            token: token,
            user: userData
        })
    },
    deleteUser({params}, res) {
        User.findOneAndDelete({_id: params._id})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: "No user found with this id"});
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
}

module.exports = userController;