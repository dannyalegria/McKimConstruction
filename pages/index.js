import { useEffect, useState } from "react";
import { Grid, Cell } from "styled-css-grid";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/post";
import Block from "../components/Block";
import ServicesGrid from "../components/ServicesGrid";
import AboutPage from "./about";

require("dotenv").config();

const client = require("contentful").createClient({
  space: "MCKIM_SPACE_ID",
  accessToken: "MCKIM_ACCESS_TOKEN"
});

function HomePage() {
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
  console.log(posts);
  return (
    <>
      <Head>
        <title>McKim Construction</title>
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
            font-family: "Candara", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 15px;
          }

          h1 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Candara", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 2rem;
            color: #333333;
          }

          h2 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Candara", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.75rem;
            color: #333333;
          }

          h3 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Candara", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.5rem;
            color: #333333;
          }

          p {
            margin-top: 0.5rem;
            font-family: "Candara", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.25rem;
            color: #333333;
            text-align: justify;
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
            padding: 2.5% 2.5%;
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
                gap={"0"}
                rows={"82px 500px 1fr 50px"}
                areas={["navbar", "header", "content", "footer"]}
              >
                {/* Navbar */}
                <Cell key={2} area="navbar">
                  <Navbar
                    // logo={JSON.stringify(p.fields.logo.fields.file.url)}
                    logo="../public/images/logo.png"
                  />
                </Cell>
                {/* Header */}

                <Cell key={3} area="header">
                  <Header
                    headerImage={p.fields.homePageHeader.fields.file.url}
                  />
                </Cell>
                {/* Content */}
                <Cell area="content">
                  <Block
                    title="About Us"
                    subtitle={null}
                    image={p.fields.homePageAboutUsImage.fields.file.url}
                    text={p.fields.homePageAboutUsText}
                    link="/about"
                    btnText="Get In Touch"
                    align="left"
                    bgColor="#ffffff"
                    log={p.fields.logo.fields.file.url}
                  />
                  <Block
                    title="Our Services"
                    subtitle={null}
                    image={p.fields.homePageServicesImage.fields.file.url}
                    text={p.fields.homePageServicesText}
                    link="/services"
                    btnText="Explore"
                    align="right"
                    bgColor="whitesmoke"
                  />
                  <ServicesGrid bgColor="whitesmoke" />
                  <Block
                    title="Projects"
                    subtitle={null}
                    image={p.fields.homePageProjectsImage.fields.file.url}
                    text={p.fields.homePageProjectsText1}
                    link="/projects"
                    btnText="Explore"
                    align="left"
                    bgColor="#ffffff"
                  />
                </Cell>
                {/* Footer */}
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

export default HomePage;
