import { useEffect, useState } from "react";
import { Grid, Cell } from "styled-css-grid";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Block from "../components/Block";
import Footer from "../components/Footer";

const client = require("contentful").createClient({
  space: "kx9ztdbtk5cq",
  accessToken: "UNfXdUa6_vpvne7S_kCNkSdlCo-mI4GZSCKuLGJy-7A"
});

function ProjectsPage() {
  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log("Error getting Content Types.");
  }
  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      const allPosts = await fetchEntriesForContentType(contentTypes[0]);
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);
  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <style>{`
          html,
          body {
            height: 100%;
          }
          body {
            margin-left: 0px;
            margin-bottom: 0px;
            margin-top: 0px;
            margin-right: 0px;
          }
          @charset "UTF-8";
          * {
            box-sizing: border-box;
          }

          ::-moz-selection {
            background: #2980b9;
            color: #fafafa;
          }

          ::selection {
            background: #2980b9;
            color: #fafafa;
          }

          html {
            font-size: 1.25rem;
          }

          body {
            background-color: #fafafa;
          }

          html {
            font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 15px;
          }

          h1 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 2rem;
            color: #333333;
          }

          h2 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.75rem;
            color: #333333;
          }

          h3 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.5rem;
            color: #333333;
          }

          p {
            margin-top: 0.5rem;
            font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.25rem;
            color: #333333;
          }

          a {
            text-decoration: none;
            color: #3498db;
          }
          a:hover {
            color: #2980b9;
          }
          a:visited {
            color: #9b59b6;
          }

          .flex {
            display: flex;
          }

          .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 10% 2.5%;
          }

          .col {
            flex-direction: column;
          }

          .column {
            flex-basis: 100%;
          }

          @media (min-width: 1200px) {
            .row {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
            }

            .column {
              flex: 1;
            }
          }
          .wrap {
            flex: row-wrap;
          }

          .justify-content-start {
            justify-content: start;
          }

          .justify-content-end {
            justify-content: end;
          }

          .justify-content-center {
            justify-content: center;
          }

          .justify-content-between {
            justify-content: space-between;
          }

          .justify-content-around {
            justify-content: space-around;
          }

          .align-items-start {
            align-items: start;
          }

          .align-items-end {
            align-items: end;
          }

          .align-items-center {
            align-items: center;
          }

          .align-items-baseline {
            align-items: baseline;
          }

          .align-items-stretch {
            align-items: stretch;
          }

          .align-self-start {
            align-self: start;
          }

          .align-self-end {
            align-self: end;
          }

          .align-self-center {
            align-self: end;
          }

          .align-self-baseline {
            align-self: baseline;
          }

          .align-self-stretch {
            align-self: stretch;
          }

          .white-1 {
            background: #ffffff;
          }

          .grey-1 {
            background: #ecf0f1;
          }

          a {
            color: #ffffff;
          }
          a:hover {
            color: #f1c40f;
          }
        `}</style>
      </Head>
      <div
        style={{
          marginLleft: 0,
          marginBottom: 0,
          marginTop: 0,
          marginRight: 0
        }}
      >
        {posts.length > 0
          ? posts.map(p => (
              <Grid
                key={1}
                height={"100%"}
                columns={"1fr"}
                rows={"82px 1fr 50px"}
                areas={["navbar", "content", "footer"]}
              >
                {/* Navbar */}
                <Cell area="navbar">
                  <Navbar />
                </Cell>
                {/* Content */}
                <Cell area="content">
                  <Block
                    title="Projects"
                    subtitle={null}
                    image={p.fields.projectsImage.fields.file.url}
                    text={p.fields.projectsText}
                    link="#"
                    btnText={null}
                    align="left"
                    bgColor="#ffffff"
                  />
                </Cell>
                <Cell area="footer">
                  <Footer />
                </Cell>
              </Grid>
            ))
          : null}
      </div>
    </>
  );
}

export default ProjectsPage;
