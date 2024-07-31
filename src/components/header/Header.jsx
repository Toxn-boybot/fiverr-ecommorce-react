import React, { useEffect } from "react";
import "./header.css";
import logo from "../../img/logo.png";

const Header = () => {
  useEffect(() => {
    const scrollFunction = () => {
      const logoOne = document.getElementById("logo");
      const contHeaderElement = document.getElementById("ContHeader");
      const logoTwo = document.getElementById("logo2");

      if ((logoOne && contHeaderElement) || logoTwo ) {
        if (
          document.body.scrollTop > 0 ||
          document.documentElement.scrollTop > 50
        ) {
          contHeaderElement.style.height = "70px";
          logoOne.style.height = "50px";
          logoTwo.style.top = "0px";
          logoTwo.style.backgroundColor =  "#f8f9fa";
          logoTwo.style.boxShadow = "none";
        } else {
          contHeaderElement.style.height = "90px";
          logoOne.style.height = "70px";
          logoTwo.style.top = "30px";
          logoTwo.style.backgroundColor = "wheat";
          logoTwo.style.boxShadow = "rgb(0 0 0 / 35%) 0px 5px 15px";
        }
      }
    };

    scrollFunction();
    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null; // Cleanup the event listener on component unmount
    };
  }, []);

  return (
    <>
      {" "}
      <div className="header">
        <div className="container" id="ContHeader">
          <div className="logoParent">
            <div className="logo">
              <img id="logo" src={logo} alt="" />
            </div>
          </div>
          <ul className="nav">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#our-menu">Menu</a>
            </li>
            <li>
              <a href="#offers">Offers</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>Other</li>
            <a href="#our-menu" className="order">
              <span>ORDER</span>
            </a>
          </ul>
          <div
            className="cart"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="fa-solid fa-basket-shopping"></i>
            <span>$35.00</span>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header cartMenu">
              <h5
                className="offcanvas-title cartMenu"
                id="offcanvasExampleLabel"
              >
                Your Cart
              </h5>
              <button
                type="button"
                className="btn-close cartMenu"
                id="closer2"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body cartMenu">
              <table className="cart-table">
                <tbody>
                  <tr>
                    <td className="title">
                      <span className="name">Angus Burger</span>
                    </td>
                    <td className="price">$14.00</td>
                    <td className="actions">
                      <a href="#" className="action-icon">
                        <i className="ti ti-pencil"></i>
                      </a>
                      <a href="#" className="action-icon">
                        <i className="ti ti-close"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="title">
                      <span className="name">Banbury cake</span>
                    </td>
                    <td className="price">$13.00</td>
                    <td className="actions">
                      <a href="#" className="action-icon">
                        <i className="ti ti-pencil"></i>
                      </a>
                      <a href="#" className="action-icon">
                        <i className="ti ti-close"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="title">
                      <span className="name">Coffee</span>
                    </td>
                    <td className="price">$13.00</td>
                    <td className="actions">
                      <a href="#" className="action-icon">
                        <i className="ti ti-pencil"></i>
                      </a>
                      <a href="#" className="action-icon">
                        <i className="ti ti-close"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="cart-table-summary">
                <div className="row">
                  <div className="text-right text-muted col-7">
                    Products total:
                  </div>
                  <div className="col-5">
                    <strong>$40.00</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="text-right text-muted col-7">Delivery:</div>
                  <div className="col-5">
                    <strong>$9.00</strong>
                  </div>
                </div>
                <hr className="hr-sm" />
                <div className="row text-lg">
                  <div className="text-right text-muted col-7">Total:</div>
                  <div className="col-5">
                    <strong>$49.00</strong>
                  </div>
                </div>
              </div>
              <a
                href="#"
                id="checkout1"
                className="btn cartMenu"
                target="_self"
              >
                <span>Go to checkout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Header */}
      <nav className="navbar bg-light fixed-top mobile-header">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="logo2" className="logo">
            <a href="index.html">
              <img id="mobileLogo" src={logo} alt="" />
            </a>
          </div>
          <div
            className="cart"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample2"
            aria-controls="offcanvasExample"
          >
            <i className="fa-solid fa-basket-shopping"></i>
          </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasExample2"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header cartMenu">
              <h5
                className="offcanvas-title cartMenu"
                id="offcanvasExampleLabel"
              >
                Your Cart
              </h5>
              <button
                type="button"
                className="btn-close cartMenu"
                id="closeMobileCart"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body cartMenu">
              <table className="cart-table">
                <tbody>
                  <tr>
                    <td className="title">
                      <span className="name">Angus Burger</span>
                    </td>
                    <td className="price">$14.00</td>
                    <td className="actions">
                      <a href="#" className="action-icon">
                        <i className="ti ti-pencil"></i>
                      </a>{" "}
                      <a href="#" className="action-icon">
                        <i className="ti ti-close"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="title">
                      <span className="name">Banbury cake</span>
                    </td>
                    <td className="price">$13.00</td>
                    <td className="actions">
                      <a href="#" className="action-icon">
                        <i className="ti ti-pencil"></i>
                      </a>{" "}
                      <a href="#" className="action-icon">
                        <i className="ti ti-close"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="title">
                      <span className="name">Coffee</span>
                    </td>
                    <td className="price">$13.00</td>
                    <td className="actions">
                      <a href="#" className="action-icon">
                        <i className="ti ti-pencil"></i>
                      </a>
                      <a href="#" className="action-icon">
                        <i className="ti ti-close"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="cart-table-summary">
                <div className="row">
                  <div className="text-right text-muted col-7">
                    Products total:
                  </div>
                  <div className="col-5">
                    <strong>$40.00</strong>
                  </div>
                </div>
                <div className="row">
                  <div className="text-right text-muted col-7">Delivery:</div>
                  <div className="col-5">
                    <strong>$9.00</strong>
                  </div>
                </div>
                <hr className="hr-sm" />
                <div className="row text-lg">
                  <div className="text-right text-muted col-7">Total:</div>
                  <div className="col-5">
                    <strong>$49.00</strong>
                  </div>
                </div>
              </div>
              <a
                href="#"
                id="checkoutMobileCart"
                className="btn cartMenu"
                target="_self"
              >
                <span>Go to checkout</span>
              </a>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header menu">
              <h5 className="offcanvas-title menu" id="offcanvasNavbarLabel">
                Fiverr
                <ion-icon size="large" name="restaurant-outline"></ion-icon>
              </h5>
              <button
                type="button"
                id="btn-close"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body menu">
              <ul className="navbar-nav menu justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    id="aboutbtn"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    id="menubtn"
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    id="offersbtn"
                  >
                    Offers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    id="contactbtn"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Other
                  </a>
                </li>
                <li className="nav-item menu">
                  <button id="OrderNow" className="order">
                    <span>Order Now!</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
