const express = require("express");
const router = express.Router();
const { Menu } = require('../models/menu.model');

router.get('/getmenus', async (request, response) => {
    try {
        const menus = await Menu.find()
        response.json(menus);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
})

router.post('/addmenu', async (request, response) => {
    const menu = request.body.menu;
    try {
        const newmenu = new Menu({
            name: menu.name,
            price: menu.price,
            category: menu.category,
            image: menu.image,
            description: menu.description,
        })
        await newmenu.save();
        response.send('El nuevo menu se ha agregado correctamente')
    } catch (error) {
        return response.status(400).json({message: error});
    }

})

router.post('/getmenuid', async (request, response) => {
    const menuid = request.body.menuid;
    try {
        const menu = await Menu.findOne({_id: menuid})
        
        response.send(menu)
    } catch (error) {
        return response.status(400).json({message: error});
    }

})

router.post('/editmenu', async (request, response) => {
    const editedmenu = request.body.editedmenu;
    try {
        const menu = await Menu.findOne({_id: editedmenu._id})

        menu.name = editedmenu.name,
        menu.price= editedmenu.price,
        menu.category= editedmenu.category,
        menu.image= editedmenu.image,
        menu.description= editedmenu.description,

        await menu.save();
        response.send('Los detalles del menu se han editado correctamente')
    } catch (error) {
        return response.status(400).json({message: error});
    }

})

router.post('/deletemenu', async (request, response) => {
    const menuid = request.body.menuid;
    try {
        await Menu.findOneAndDelete({_id: menuid})
        
        response.send('Se ha eliminado el menu')
    } catch (error) {
        return response.status(400).json({message: error});
    }

})
module.exports = router;