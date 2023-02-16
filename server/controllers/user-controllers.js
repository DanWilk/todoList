const {User} = require("../models");
const { signtoken, authMiddleware } = require("../utils/auth");

const userController = {
    getUserById({params}, res) {
        User.findOne({_id: params.id})
        .populate({
            path: "todos",
            // select: "-__v"
        })
        // .select(-_v)
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
            res.json(
                {
                    token: token,
                    user: dbUserData

                }
            )
        })
        .catch(err => res.status(404).json(err));
    },
    async login({ username, password}, res) {
        const user = await User.findOne({username});

        if(!user) {
            res.json({text: "invalid username/password"});
        }

        const correctPw = await user.isCorrectPassword(password);

        if(!correctPw) {
            res.json({text: "invalid username/password"});
        }

        const token = signToken(user);
        res.json({
            token: token,
            user: user
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