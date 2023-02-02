const {User} = require("../models");

const userController = {
    getUserById({params}, res) {
        User.findOne({_id: params.id})
        .populate({
            path: "todos",
            select: "-__v"
        })
        .select(-__v)
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
        User.create(User)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(404).json(err));
    },
    deleteUser({params}, res) {
        User.findOneAndDelete({_id: params._id})
        .then(dbUserdata => {
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