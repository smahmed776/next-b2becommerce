import vendorprofile from '../../../../server/Schemas/vendorprofile'
import Customer from '../../../../server/Schemas/Customer'

export default async function alluser(req, res){
    const getvendor = await vendorprofile.find({}, ['email', 'username','companyName', 'profile.home.products.name', 'phone']);
    const getcustomer = await Customer.find({}, ['email', 'name','phone']);
    res.status(200).json({getvendor, getcustomer})
}