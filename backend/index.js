const db = require('../mysqlHandler')
module.exports = function (props) {
    return {
        getCustomers: getCustomers,
        selectCustomerById: selectCustomerById,
        insertCustomers: insertCustomers,
        updateCustomer: updateCustomer,
        deleteCustomer: deleteCustomer

    }
}

function getCustomers(payload, callback) {

    let sqlStmt = `SELECT * FROM customer`;
    db.query(sqlStmt, function (err, res) {
        if (!err) {
            let options = {
                status: 200,
                response: res,
                err: null
            }
            callback(options)
        }
        else {
            let options = {
                status: 500,
                response: null,
                err
            }
            callback(options)
        }
    })

}

function selectCustomerById(payload, callback) {
    let sqlStmt = `SELECT c.customerId,c.firstName,c.lastName,c.userName,c.email,c.phone,c.dob,c.gender,
    a.address, a.landmark, a.city, a.state, a.country, a.zipCode FROM customer AS c INNER JOIN address as a ON c.customerId= a.customerId 
    WHERE c.customerId = "${payload.customerId}"`

    db.query(sqlStmt, function (err, res) {
        if (!err) {
            let options = {
                status: 200,
                response: res,
                err: null
            }
            callback(options)
        }
        else {
            let options = {
                status: 500,
                response: null,
                err
            }
            callback(options)
        }
    })

}

function insertCustomers(payload, callback) {


    let sqlStmt = `INSERT INTO customer(customerId,firstName,lastName,userName,email,phone,dob,gender,password,confirmPassword) VALUES("${payload.customerId}","${payload.firstName}","${payload.lastName}","${payload.userName}","${payload.email}","${payload.phone}","${payload.dob}","${payload.gender}","${payload.password}","${payload.confirmPassword}") `
    db.query(sqlStmt, function (err, result) {
        if (!err) {
            let sql = `INSERT INTO address(addressId, customerId, address, landmark, city, state, country, zipCode) VALUES ("${payload.addressId}",
                "${result.insertId}","${payload.address}","${payload.landmark}","${payload.city}","${payload.state}","${payload.country}","${payload.zipCode}")`
            db.query(sql, function (err, res) {
                if (!err) {
                    let options = {
                        status: 200,
                        response: res,
                        err: null
                    }
                    callback(options)
                }
                else {
                    let options = {
                        status: 500,
                        response: null,
                        err
                    }
                    callback(options)
                }
            });

        }
        else {
            let options = {
                status: 500,
                response: null,
                err
            }
            callback(options)
        }
    })
}
function updateCustomer(payload, callback) {
    let firstName = payload.firstName;
    let lastName = payload.lastName;
    let userName = payload.userName;
    let email = payload.email;
    let phone = payload.phone;
    let dob = payload.dob;
    let gender = payload.gender;
    let password = payload.password
    let confirmPassword = payload.confirmPassword
    let id = payload.customerId
    // let addressId=payload.addressId;
    // let address=payload.address;
    // let landmark=payload.landmark;
    // let city=payload.city
    // let state=payload.state;
    // let country=payload.country;
    // let zipCode=payload.zipCode;


    let sqlStmt = ` UPDATE customer SET firstName="${firstName}",lastName="${lastName}",userName="${userName}",
        email="${email}",phone="${phone}",dob="${dob}",gender="${gender}",password="${password}",
        confirmPassword="${confirmPassword}") WHERE customerId="${id}",`
    db.query(sqlStmt, function (err, res) {
        if (!err) {

        }
        if (!err) {
            let options = {
                status: 200,
                response: res,
                err: null
            }
            callback(options)
        }
        else {
            let options = {
                status: 500,
                response: null,
                err
            }
            callback(options)
        }
    })
}

function deleteCustomer(payload, callback) {
    let id = payload.customerId

    let sqlStmt = `DELETE FROM customer WHERE customerId = "${id}"`;
    console.log(sqlStmt)
    db.query(sqlStmt, function (err, res) {
        if (!err) {
            let options = {
                status: 200,
                response: res,
                err: null
            }
            callback(options)
        }
        else {
            let options = {
                status: 500,
                response: null,
                err
            }
            callback(options)
        }
    })
}
function deleteCustomer(payload, callback) {
    let id = payload.customerId

    let sqlStmt = `DELETE FROM customer WHERE customerId = "${id}"`;
    console.log(sqlStmt)
    db.query(sqlStmt, function (err, res) {
        if (!err) {
            let options = {
                status: 200,
                response: res,
                err: null
            }
            callback(options)
        }
        else {
            let options = {
                status: 500,
                response: null,
                err
            }
            callback(options)
        }
    })
}
function deleteCustomer(payload, callback) {
    let id = payload.customerId

    let sqlStmt = `DELETE FROM customer WHERE customerId = "${id}"`;
    console.log(sqlStmt)
    db.query(sqlStmt, function (err, res) {
        if (!err) {
            let options = {
                status: 200,
                response: res,
                err: null
            }
            callback(options)
        }
        else {
            let options = {
                status: 500,
                response: null,
                err
            }
            callback(options)
        }
    })
}
