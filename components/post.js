import ReactMarkdown from "react-markdown";

function Post({ title, about, log }) {
  console.log(log);
  let aboutSection = about.toString();
  return (
    <div>
      <h1>{title}</h1>
      <ReactMarkdown source={aboutSection} />

      <style jsx>{`
        
      `}</style>
    </div>
  );
}

export default Post;
