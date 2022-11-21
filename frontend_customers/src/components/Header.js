import React from 'react'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-danger bg-danger ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/"> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ "color": "white", "fontSize": "20px" }} href="/">Customers Application</a>
            </li>


          </ul>

          <form className="form-inline my-2 my-lg-0">
            <span style={{ "color": "white", "fontSize": "15px", "marginRight": "15px" }}> Customer Admin </span>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
              className="rounded-circle d-flex align-self-center me-4 shadow-1-strong " width="40" />
          </form>
        </div>
      </nav>

    </div>
  )
}

export default Header