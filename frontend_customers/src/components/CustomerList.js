import React, { useState } from 'react'

function CustomerList(props) {
  const customersData = [{
    id: 1,
    customerName: 'john',
    email: 'john@gmail.com',
    imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
  }, {
    id: 2,
    customerName: 'john',
    email: 'john@gmail.com',
    imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"

  }, {
    id: 3,
    customerName: 'john',
    email: 'john@gmail.com',
    imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"

  }, {
    id: 4,
    customerName: 'john',
    email: 'john@gmail.com',
    imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"

  }, {
    id: 5,
    customerName: 'john',
    email: 'john@gmail.com',
    imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"

  }]
  
  return (
    <div>
      <section>
        <div className="container py-5">
          <div className='container-fluid d-flex align-items-center pt-3 pb-2'>
            <div className='row'>
              <div className='col-8'>
                <h5 className="font-weight-bold mb-3 text-center text-lg-start">Customers</h5>
              </div>

              <div className='col-2'>
                <i className="fa fa-search" style={{ fontSize: "25px" }} aria-hidden="true"></i>

              </div>
              <div className='col-2'>
                <span><i className="fa fa-plus-square-o" data-toggle="modal" data-target="#addModal" data-whatever="@mdo" style={{ fontSize: "30px" }} aria-hidden="true"></i></span>
              </div>
              <hr />

            </div>
          </div>
          <div className="card">
          <div className="card-body">

          {customersData.map(item =><ul className="list-unstyled mb-0" key={item.id}>
                <li className="p-2 border-bottom">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img src={item.imageUrl} alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                      <div className="pt-0">
                        <p className="fw-bold mx-5">{item.customerName}</p>
                        <p className="small text-muted">{item.email}</p>
                      </div>
                    </div>

                  </div>
                </li>

              </ul>)}

            </div>
              </div>

        </div>
      </section>



      <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModallabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addModallabel">Add Customer Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="FirstName" className="col-form-label">FirstName:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="LastName" className="col-form-label">LastName:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="UserName" className="col-form-label">UserName:</label>
                  <input type="text" className="form-control" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">proceed</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CustomerList