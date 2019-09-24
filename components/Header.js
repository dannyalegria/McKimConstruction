function Header(headerImage) {
  const h = JSON.stringify("https:" + headerImage.headerImage);
  console.log(h);
  return (
    <header>
      <div className="overlay" />
      <div className="banner">
        <div className="logo">
          <img src="https://i.imgur.com/vOgBo46.png" alt="white logo" />
        </div>
        <div className="text">
          <h2>At Your Service.</h2>
          <p>
            McKim & Co provides leading contracting services for Commerical,
            Residential & Public Works projects in the San Francisco Bay Area.
            We are General Contarctors who specialize is Site Work, Underground
            Utilities & Excavation. We pride ourselves on our staff of
            professional experts that are here for you every step of the way.
            McKim & Co is available for your next project, providing quality
            service no matter the demands of our clients.
          </p>
        </div>
      </div>

      <style jsx>
        {`
          header {
            position: absolute;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            grid-area: header;
            height: 100%;
            width: 100%;
            overflow: hidden;
            background-size: cover;
            background-position: center center;
            max-height: 500px;
            padding: 5%;
            z-index: 0;
          }
          .overlay {
            z-index: 1;
            height: 100%;
            width: 100%;
            position: absolute;
            overflow: auto;
            top: 0px;
            left: 0px;
            background: rgba(0, 0, 0, 0.3);
          }
          .banner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 2;
          }
          header .logo img {
            width: 100%;
            max-width: 450px;
            height: auto;
          }
          header .banner h2 {
            color: #fff;
            font-size: 1.5rem;
          }
          header .banner p {
            color: #fff;
            font-size: 1rem;
          }

          /* Smartphones (portrait and landscape) ----------- */
          @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
            /* Styles */
          }

          /* Smartphones (landscape) ----------- */
          @media only screen and (min-width: 321px) {
            header .logo {
              display: flex;
              flex-direction: row;
              justify-content: center;
            }
            header .logo img {
              width: 80%;
              max-width: 450px;
              height: auto;
              margin-left: auto;
              margin-right: auto;
            }
          }

          /* Smartphones (portrait) ----------- */
          @media only screen and (max-width: 320px) {
            /* Styles */
          }

          /* Tablets (portrait and landscape) ----------- */
          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
            header .logo img {
              width: 100%;
              width: 550px;
              margin: 0;
            }
            header .banner h2 {
              color: #fff;
              font-size: 1.8rem;
            }
            header .banner p {
              color: #fff;
              font-size: 1.3rem;
            }
          }

          /* Tablets (landscape) ----------- */
          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
            .banner {
              display: flex;
              flex-direction: row-reverse;
              align-items: center;
              justify-content: center;
              width: 825px;
              margin-right: auto;
              margin-left: auto;
            }
            header .banner .text {
              order: 0;
              flex: 1 0 60%;
            }
            header .banner .text h2 {
              font-size: 1.9rem;
            }
            header .banner .text p {
              font-size: 1.42rem;
            }
            header .banner .logo {
              flex: 0 1 40%;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
            }
          }
          /* Desktops and laptops ----------- */
          @media only screen and (min-width: 1224px) {
            header {
              display: flex;
              flex-direction: row;
              padding: 10% 5%;
              align-items: center;
            }
            .banner {
              display: flex;
              flex-direction: row-reverse;
              align-items: center;
              justify-content: center;
              width: 825px;
              margin-right: auto;
              margin-left: auto;
            }
            header .banner .text {
              order: 0;
              flex: 1 0 60%;
            }
            header .banner .text h2 {
              font-size: 2.25rem;
            }
            header .banner .text p {
              font-size: 1.5rem;
            }
            header .logo img {
              width: 100%;
              width: 750px;
              margin: 0;
            }
          }

          /* Large screens ----------- */
          @media only screen and (min-width: 1824px) {
            /* Styles */
          }
        `}
      </style>
      <style jsx>
        {`
          header {
            background-image: url(${h});
          }
        `}
      </style>
    </header>
  );
}
export default Header;
