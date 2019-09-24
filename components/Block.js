import ReactMarkdown from "react-markdown";
import Button from "./Button";

function Block({
  title,
  subtitle,
  image,
  text,
  link,
  btnText,
  align,
  bgColor,
  log
}) {
  let mainText = text.toString();
  let isLeft;
  align == "left" ? (isLeft = true) : (isLeft = false);
  return (
    <div className="row" style={{ backgroundColor: bgColor }}>
      <div className="column">
        <img src={image} />
      </div>
      <div className="column">
        <h1>{title}</h1>
        {subtitle ? <h3>{subtitle}</h3> : null}
        <ReactMarkdown source={mainText} />
        {btnText ? (
          <div className="blockButton">
            <Button goTo={link} text={btnText} />
          </div>
        ) : null}
      </div>
      <style jsx>{`
        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 5% 2.5%;
        }
        .column {
          flex-basis: 100%;
          display: flex;
          flex-direction: column;
        }
        p {
          text-align: justify;
          text-align-last: justify;
          text-justify: inter-word;
        }
        .row .column img {
          width: 300px;
          height: auto;
          align-self: center;
        }
        @media (min-width: 900px) {
        }

        /* Smartphones (landscape) ----------- */
        @media only screen and (min-width: 321px) {
          .row h1 {
            align-self: ${isLeft ? "flex-start" : "flex-end"};
          }
          .row h3 {
            align-self: ${isLeft ? "flex-start" : "flex-end"};
          }
          .blockButton {
            align-self: ${isLeft ? "flex-end" : "flex-start"};
          }
          .row .column img {
            width: 400px;
          }
        }

        /* Tablets (portrait and landscape) ----------- */
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
          .row .column {
            padding: 5%;
          }
          .row .column img {
            width: 400px;
          }
        }

        /* Tablets (landscape) ----------- */
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
          .row {
            flex-direction: ${isLeft ? "row-reverse" : "row"};
            flex-wrap: nowrap;
            padding: 5% 10%;
          }
          .column {
            flex: 1;
          }
          .row > * {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
          }
          .row .column img {
            width: 500px;
          }
          .row > * img {
            border-radius: 5px;
          }
          .row .column {
            padding: 5%;
          }
          .row h1 {
            align-self: ${isLeft ? "flex-start" : "flex-end"};
          }
          .row h3 {
            align-self: ${isLeft ? "flex-start" : "flex-end"};
          }
          .blockButton {
            align-self: ${isLeft ? "flex-end" : "flex-start"};
          }
        }
        /* Desktops and laptops ----------- */
        @media only screen and (min-width: 1224px) {
          .row {
            flex-direction: ${isLeft ? "row-reverse" : "row"};
            flex-wrap: nowrap;
            padding: 5% 10%;
          }
          .column {
            flex: 1;
          }
          .row > * {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
          }
          .row .column img {
            width: 500px;
          }
          .row > * img {
            border-radius: 5px;
          }
          .row h1 {
            align-self: ${isLeft ? "flex-start" : "flex-end"};
          }
          .row h3 {
            align-self: ${isLeft ? "flex-start" : "flex-end"};
          }
          .blockButton {
            align-self: ${isLeft ? "flex-end" : "flex-start"};
          }
        }

        /* Large screens ----------- */
        @media only screen and (min-width: 1824px) {
        }
      `}</style>
    </div>
  );
}

export default Block;
