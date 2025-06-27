import Address from "../models/Address.js";


//add Address : /api/address/add;
export const addAddress = async (req, res) => {
    try {
        const { address } = req.body;
        const userId = req.userId; 
        await Address.create({...address,userId});
        res.json({success: true, message: "Address Added Successfully"});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}
//get address : /api/address/get
export const getAddress = async (req, res) => {
    try {
        const userId = req.userId; 
        const addresses = await Address.find({userId});
        res.json({success: true, addresses});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}