import Link from "next/link";

function Navbar(logo) {
  return (
    <div id="mainNavbar" className="classic navbar">
      <nav>
        <input
          type="checkbox"
          value="selected"
          id="nav-dropdown-toggle-input"
          className="dropdown-toggle-input"
        />
        <div className="container">
          <div className="brand">
            <Link href="/index">
              <a>
                <img src="https://i.imgur.com/DopBlxW.png" alt="logo" />
              </a>
            </Link>
          </div>

          <label
            htmlFor="nav-dropdown-toggle-input"
            id="nav-dropdown-toggle-label"
            className="dropdown-toggle-label"
          />
          <ul className="nav-items">
            <li>
              <Link href="/about">
                <a title="About Us">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a title="Services">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a title="Projects">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a title="contact">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="nav-dropdown">
          <li>
            <Link href="/about">
              <a title="About Us">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a title="Services">Services</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a title="Projects">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a title="contact">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          .navbar {
            z-index: 100;
            grid-area: navbar;
            display: flex;
            align-items: center;
            width: 100%;
            height: 80px;
          }

          .classic {
            /* border-radius: 5px; */
            box-shadow: 1px 3px #bdc3c7;
          }
          .classic nav {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: #fff;
          }
          .classic nav .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            width: 100%;
            margin-left: 1.5%;
            margin-right: 1.5%;
          }
          .classic nav .container .brand {
            flex: 0 1 auto;
            display: flex;
            height: 100%;
          }
          .classic nav .container .brand a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            width: 100%;
            height: auto;
            border-radius: 5px;
          }
          .classic nav .container .brand a:hover {
            cursor: pointer;
          }
          .classic nav .container .brand img {
            width: 175px;
          }
          .classic nav .container .dropdown-toggle-label {
            font-size: 1.5rem;
            cursor: pointer;
            display: block;
            padding: 0.5rem 1rem;
            box-shadow: 0 1px 2px 0 rgba(153, 153, 153, 0.25);
            border-radius: 5px;
          }
          .classic nav .container .dropdown-toggle-label:hover {
            background-color: #ecf0f1;
          }
          .classic nav .container .dropdown-toggle-label:after {
            color: #4b4b4b;
            content: "☰";
            float: right;
            font-weight: bold;
            transition: all 600ms ease-in-out;
          }
          @-webkit-keyframes grow-nav-dropdown {
            from {
              height: 0;
            }
            to {
              height: auto;
            }
          }
          @keyframes grow-nav-dropdown {
            from {
              height: 0;
            }
            to {
              height: auto;
            }
          }
          .classic nav .nav-items {
            display: none;
          }
          .classic .nav-dropdown {
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
            z-index: 1;
            width: calc(100% + 5px);
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            margin: 0;
            -webkit-padding-start: 0;
            padding-inline-start: 0;
            list-style: none;
            background-color: #ffffff;
            transition: all 600ms ease-in-out;
          }
          .classic .nav-dropdown li {
            width: 100%;
            padding: 0.5rem 1.5rem;
            border-radius: 5px;
            text-align: center;
          }
          .classic .nav-dropdown li:hover {
            background-color: #bdc3c7;
            color: #fafafa;
            cursor: pointer;
          }
          .classic .nav-dropdown li:hover a {
            color: #fafafa;
          }
          .classic .nav-dropdown li:active {
            background-color: #123851;
          }
          .classic .nav-dropdown li:last-child {
            margin-bottom: 15px;
          }
          .classic .nav-dropdown li .nav-item {
            display: block;
          }
          .classic .nav-dropdown a {
            display: block;
            width: 100%;
            border-radius: 5px;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            text-decoration: none;
            color: #333333;
            transition: all 250ms;
          }
          .classic .nav-dropdown a:hover {
            background-color: #bdc3c7;
            cursor: pointer;
            color: #fafafa;
          }
          .classic .dropdown-toggle-input {
            display: none;
          }
          .classic .dropdown-toggle-input:not(checked) ~ .nav-dropdown {
            display: none;
            transition: all 600ms ease-in-out;
          }
          .classic .dropdown-toggle-input:checked ~ .nav-dropdown {
            display: flex;
          }
          .classic
            .dropdown-toggle-input:checked
            + .container
            .dropdown-toggle-label:after {
            content: "×";
            transition: all 600ms ease-in-out;
          }

          @media (min-width: 900px) {
            .navbar {
              grid-area: navbar;
              display: flex;
              align-items: center;
              width: 100%;
              height: 80px;
              background-color: #ffffff;
            }
            .navbar nav {
              display: flex;
              align-items: center;
              width: 100%;
              height: 100%;
            }
            .navbar nav #nav-dropdown-toggle-input {
              display: none;
            }
            .navbar nav .nav-dropdown {
              display: none !important;
            }
            .navbar nav .container {
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 100%;
              width: 100%;
              margin-left: 2.5%;
              margin-right: 2.5%;
            }
            .navbar nav .container #nav-dropdown-toggle-label {
              display: none !important;
            }
            .navbar nav .container .brand {
              flex: 0 1 auto;
              display: flex;
              height: 100%;
            }
            .navbar nav .container .brand a {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0;
              width: 250px;
              border-radius: 5px;
              padding-top: 15px;
              padding-bottom: 15px;
            }
            .navbar nav .container .brand a:hover {
              cursor: pointer;
            }
            .navbar nav .container .brand a img {
              height: auto;
              width: 250px;
            }
            .navbar nav .nav-items {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              justify-content: space-around;
              align-items: center;
              height: 100%;
              padding-left: 0;
              padding-right: 0;
              margin-top: 0;
              margin-bottom: 0;
              list-style: none;
            }
            .navbar nav .nav-items li {
              border-radius: 5px;
              margin-right: 1rem;
            }
            .navbar nav .nav-items li:active {
              background-color: #78848c;
            }
            .navbar nav .nav-items a {
              border-radius: 5px;
              text-decoration: none;
              color: #333333;
              padding: 10px 25px;
              transition: all 250ms;
            }
            .navbar nav .nav-items a:hover {
              background-color: #bdc3c7;
              cursor: pointer;
              color: #fafafa;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;
