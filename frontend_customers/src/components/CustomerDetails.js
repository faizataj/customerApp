import React from 'react'

function CustomerDetails() {
  return (
    <div>
      <div className='container-fluid py-4'>
        <div className="card">
          <div className="card-body">
            <div className='row'>
              <div className='col-3'>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                  className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="100" />

              </div>
              <div className='col-8'>
                <h4 style={{ "marginRight": "18px" }}>merry doe</h4>
                <div className='row d-flex justify-content-between'>
                  <p><i className="fa fa-user-o" aria-hidden="true" style={{ "fontSize": "18px" }}></i> merrydoe</p>
                  <p><i className="fa fa-envelope-o" aria-hidden="true" style={{ "fontSize": "18px" }}></i> merrydoe@gmail.com</p>
                  <p><i className="fa fa-phone" aria-hidden="true" style={{ "fontSize": "18px" }}></i> 88-98-75-998</p>
                </div>
                <button className='btn btn-outline-warning mx-2'><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                <button className='btn btn-outline-danger mx-2'><i className="fa fa-trash-o" aria-hidden="true"></i> Delete </button>
              </div>
              <hr />
            </div>
            <hr />
            <div className='row py-4'>
              <div style={{ "fontSize": "18px", "fontWeight": "bolder", "marginLeft": "20px" }}>Personal details</div>
            </div>
            <div className='d-flex justify-content-around'>
              <div className="personalCard" style={{ "backgroundColor": "#f4b3be52", "width": "200px", "height": "97px" }}>
                <div className="card-body">
                  <p>FirstName</p>
                  <h5>merry</h5>

                </div>
              </div>
              <div className="personalCard" style={{ "backgroundColor": "#f4b3be52", "width": "200px", "height": "97px" }}>
                <div className="card-body">
                  <p>LastName</p>
                  <h5>Doe</h5>
                </div>
              </div>
              <div className="personalCard" style={{ "backgroundColor": "#f4b3be52", "width": "200px", "height": "97px" }}>
                <div className="card-body">
                  <p>Gender</p>
                  <h5>Female</h5>
                </div>
              </div>
              <div className="personalCard" style={{ "backgroundColor": "#f4b3be52", "width": "200px", "height": "97px" }}>
                <div className="card-body">
                  <p>Date Of Birth</p>
                  <h5>Aug -21 -1989</h5>
                </div>
              </div>

            </div>
            <div className='row py-4'>
              <div style={{ "fontSize": "18px", "fontWeight": "bolder", "marginLeft": "20px" }}>Address</div>
            </div>
            <div>

              <table className="table">

                <tbody>
                  <tr>
                    <th scope="row">AddressLIine</th>
                    <td>Mark</td>

                  </tr>
                  <tr style={{ "backgroundColor": "#f4b3be52" }}>
                    <th scope="row">Landmark</th>
                    <td>Jacob</td>

                  </tr>
                  <tr>
                    <th scope="row">City</th>
                    <td>Larry</td>

                  </tr>
                  <tr style={{ "backgroundColor": "#f4b3be52" }}>
                    <th scope="row">State</th>
                    <td>Larry</td>

                  </tr>
                  <tr>
                    <th scope="row">Country</th>
                    <td>USA</td>

                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails