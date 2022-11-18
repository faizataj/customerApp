
const indexController=require('../controller/index')({})
module.exports = function (routers, expressApp){


    routers.get('/selectCustomers' , indexController.getCustomers)
    routers.post('/selectCustomerById' , indexController.selectCustomerById)
    routers.post('/insertCustomer' , indexController.insertCustomers)
    routers.post('/updateCustomer' , indexController.updateCustomer)
    routers.post('/deleteCustomer' , indexController.deleteCustomer)
   
    return routers;

}

