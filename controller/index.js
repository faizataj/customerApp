
const backend = require('../backend/index')({})
module.exports = function (props) {
    return {
        // customer_details
        getCustomers: getCustomers,
        selectCustomerById: selectCustomerById,
        insertCustomers: insertCustomers,
        updateCustomer: updateCustomer,
        deleteCustomer: deleteCustomer,

}
}

    function getCustomers(req, res) {
        backend.getCustomers([], function (response) {
            res.send(response)
        })
    }
    function selectCustomerById(req, res) {
        let payload = req.body
        console.log(payload)
        backend.selectCustomerById(payload, function (response) {
            res.send(response)
        })
    }
    function insertCustomers(req, res) {
        let payload = req.body
        backend.insertCustomers(payload, function (response) {
            res.send(response)
            console.log(response)
        })
    }
    function updateCustomer(req, res) {
        let payload = req.body
        backend.updateCustomer(payload, function (response) {
            res.send(response)
        })
    }
    function deleteCustomer(req, res) {
        let payload = req.body;
        backend.deleteCustomer(payload, function (response) {
            res.send(response)
        })
    }


