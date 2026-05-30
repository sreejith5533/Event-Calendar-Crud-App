function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img className="logo-img" src="logo/logo.png" alt="logo-img" />
          <span className="logo-text">EventFlow</span>
        </a>
        <div className="d-flex align-items-center gap-3">
          <i className="fa-regular fa-bell"></i>
          <div className="profile-div">
            <img className="profile-img" src="logo/person-logo.avif" alt="person-logo" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
