const express = require("express");
const router = express.Router();
const {User} = require('../models/usuario.model');

router.post('/resgister', async (request, response) => {
    const {name, lastname, email, password} = request.body;
    const newUser =  new User({name, lastname, email, password})
    try {
        newUser.save();
        response.json('El usuario se ha registrado');
    } catch (error) {
        response.status(400);
        response.json({message: error});
    }
});

router.post('/login', async (request, response) => {
    const {email, password} = request.body;
    
    try {
        const user= await User.find({email, password})
        if(user.length > 0){
            const currentUser ={
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            response.json(currentUser);
        }else {
            return response.status(400).json({message: 'Ha fallado en iniciar sesión'})
        }
    } catch (error) {
        response.status(400);
        response.json({message: error});
    }
}
)

router.get('/getallusers', async (request, response) => {

    try {
        const users = await User.find({})
        response.send(users);
    } catch (error) {
        response.status(400).json({message: error});
    }
});

router.post('/deleteuser', async (request, response) => {
    const userid = request.body.userid;
    try {
        await User.findOneAndDelete({_id: userid})
        response.send('El usuario se ha eliminado');
    } catch (error) {
        response.status(400).json({message: error});
    }
});

module.exports= router;