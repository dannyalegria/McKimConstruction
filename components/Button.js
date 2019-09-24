import Link from "next/link";

function Button({ goTo, text }) {
  return (
    <div>
      <button>
        <Link href={goTo}>
          <a>{text}</a>
        </Link>
      </button>
      <style jsx>{`
        button {
          border: solid 1px #000;
          border-radius: 5px;
          padding: 0.5rem 1rem;
          background: #fafafa;
          color: #000;
          transition: all 200ms ease-in;
        }
        button:hover {
          cursor: pointer;
          color: #f1c40f;
          background-color: #333;
          box-shadow: 2px 2px 0 0 #001f33;
          -webkit-transform: translate(-2px, -2px);
          transform: translate(-2px, -2px);
          transition: all 100ms ease-in-out;
        }
        button:hover a {
          color: #f1c40f;
        }
        button:active {
          box-shadow: 0px 0px 0px 0px black;
          -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
          color: #f7b731;
        }
        button:focus {
          outline: none;
        }
        button a {
          text-decoration: none;
          color: #333;
        }
      `}</style>
    </div>
  );
}

export default Button;
