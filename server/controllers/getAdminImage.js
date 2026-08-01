import Admin from '../models/admin.js'

const getAdminImage = async (req, res) => {
    try {
        console.log('req came')
    const findImage=await Admin.findOne()
    return res.status(200).json(findImage)
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
export default getAdminImage