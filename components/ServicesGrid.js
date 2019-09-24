import { Grid, Cell } from "styled-css-grid";

function ServicesGrid({ bgColor }) {
  return (
    <div className="wrapper" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <Grid columns="repeat(auto-fill, minmax(300px, 1fr))">
          <Cell>
            <div className="icons">
              <a href="#">
                <img src="https://image.flaticon.com/icons/svg/99/99801.svg" />
              </a>
              <p>Underground Utilities</p>
            </div>
          </Cell>
          <Cell>
            <div className="icons">
              <a href="#">
                <img src="https://image.flaticon.com/icons/svg/99/99850.svg" />
              </a>
              <p>Asphalt Paving</p>
            </div>
          </Cell>
          <Cell>
            <div className="icons">
              <a href="#">
                <img src="https://image.flaticon.com/icons/svg/99/99805.svg" />
              </a>
              <p>Site Work</p>
            </div>
          </Cell>
          <Cell>
            <div className="icons">
              <a href="#">
                <img src="https://image.flaticon.com/icons/svg/99/99826.svg" />
              </a>
              <p>Drilling</p>
            </div>
          </Cell>
          <Cell>
            <div className="icons">
              <a href="#">
                <img src="https://image.flaticon.com/icons/svg/632/632480.svg" />
              </a>
              <p>Excavation</p>
            </div>
          </Cell>
          <Cell>
            <div className="icons">
              <a href="#">
                <img src="https://image.flaticon.com/icons/svg/99/99813.svg" />
              </a>
              <p>Learn More</p>
            </div>
          </Cell>
        </Grid>
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          width: 100%;
          max-width: 1000px;
        }
        p {
          text-align: center !important;
        }
        .icons {
          text-align: center;
          width: 100%;
          height: 100%;
          padding: 0 15%;
        }
        img {
          width: auto;
        }
        .services-grid {
          display: grid;
          grid-gap: 10px;
          grid-template-rows: auto;
          grid-template-columns: 1fr;
          grid-template-areas: "one" "two" "three" "four" "five" "six";
          padding-top: 0;
          padding-bottom: 0;
        }
        div {
          display: flex;
          flex-direction: column;
        }
        .services-grid div:nth-child(1) {
          grid-area: "one";
        }
        .services-grid div:nth-child(2) {
          grid-area: "two";
        }
        .services-grid div:nth-child(3) {
          grid-area: "three";
        }
        .services-grid div:nth-child(4) {
          grid-area: "four";
        }
        .services-grid div:nth-child(5) {
          grid-area: "five";
        }
        .services-grid div:nth-child(6) {
          grid-area: "six";
        }
        img {
          max-width: 150px;
        }

        @media (min-width: 900px) {
          .services-grid {
            grid-template-rows: auto;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "one" "two" "three" "four" "five" "six";
          }
        }
        @media (min-width: 1200px) {
          .services-grid {
            grid-template-rows: auto;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas: "one" "two" "three" "four" "five" "six";
          }
        }
      `}</style>
    </div>
  );
}

export default ServicesGrid;
