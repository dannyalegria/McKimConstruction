function Footer({}) {
  return (
    <div>
      <footer className="footer row">
        <div className="column">
          <ul>
            <li>
              <h3>Directory</h3>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Team</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>
              <h3>Contact</h3>
            </li>
            <li>
              <a>Info@McKim-Company.com</a>
            </li>
            <li>
              <a>P.O. Box 21328</a>
            </li>
            <li>
              <a>El Sobrante, CA 94820</a>
            </li>
            <li>
              <a>
                <ion-icon name="logo-facebook" />
              </a>
              <a>
                <ion-icon name="logo-instagram" />
              </a>
              <a>
                <ion-icon name="logo-twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>
              <h3>Information</h3>
            </li>
            <li>
              <a>Lic# 423873 AB</a>
            </li>
            <li>
              <a>DIR Reg# 1000012356</a>
            </li>
          </ul>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          flex-direction: row !important;
          grid-area: footer;
          border: solid 3px #4b4b4b;
          border-radius: 5px;
          list-style-type: none;
          background: #4b4b4b;
          color: #ffffff;
          text-align: center;
        }
        .footer ul {
          list-style: none;
        }
        .footer h3 {
          color: #ffffff;
        }
        .footer a {
          color: #ffffff;
        }
        .footer a:hover {
          color: #f1c40f;
          cursor: pointer;
        }
        .footer .column ul {
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default Footer;
