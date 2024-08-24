import MenuItem from '../models/MenuItem.js';

export const getMenuItems = async (req, res) => {
    const menuItems = await MenuItem.find().populate('restaurant');
    res.json(menuItems);
};

export const createMenuItem = async (req, res) => {
    const { restaurant, item_name, price, image } = req.body;

    const menuItem = new MenuItem({
        restaurant,
        item_name,
        price,
        image,
    });

    const createdMenuItem = await menuItem.save();
    res.status(201).json(createdMenuItem);
};