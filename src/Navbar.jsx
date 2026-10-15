import './navbar.css'
function Navbar() {
  return (
    <>
      <div className="navcontainer">
        <h3>Momoland</h3>

        <nav className="navitems">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Momo</a>
            </li>
            <li>
              <a>Our Products</a>
            </li>
            <li>
              <a></a>About us
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="iconcontainer">
          <i className="ri-search-line"></i>
          <i className="ri-user-line"></i>
          <i className="ri-shopping-cart-line"></i>
        </div>
      </div>
    </>
  );
}
export default Navbar
