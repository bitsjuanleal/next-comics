import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Marvel from "./marvel";
import Dc from "./dc";
import LinkTab from "../components/core/link-tab";
import Comic from "../components/comic";
import fetch from "node-fetch";
import { Context } from "./../components/hooks/initialState";
import Router from "next/router";

export async function getStaticProps() {
  const resMarvel = await fetch("http://localhost:4000/marvel");
  const resDc = await fetch("http://localhost:4000/marvel");
  const charactersMarvel = await resMarvel.json();
  const charactersDc = await resDc.json();
  return { props: { charactersMarvel, charactersDc } };
}

//export default function Home() {
function Home({ charactersMarvel, charactersDc }) {
  const { store, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ tab: "marvel", detailUrl: store.detailUrl });
    const { pathname } = Router;
    console.log(pathname);
    if (pathname == "/") {
      Router.push("/marvel");
    }
  }, []);

  const getDataComponents = (comic) => {
    const MarvelDynamic = dynamic(import("./marvel"), {
      loading: () => <p>Loading characters...</p>,
      ssr: false,
    });
    const DcDynamic = dynamic(import("./dc"), {
      loading: () => <p>Loadinig characters.</p>,
      ssr: false,
    });
    var dataMarvel = {
      page: <Marvel />,
      label: "marvel",
      imgHeader: "../public/images/marvel.svg",
      title: "Marvel characters",
      color: "#d40317",
      fontColor: "#ffffff",
    };
    var dataDc = {
      page: <Dc />,
      label: "dc",
      imgHeader: "../public/images/dc.svg",
      title: "DC characters",
      color: "#100055",
      fontColor: "#ffffff",
    };
    return comic == "marvel" ? dataMarvel : dataDc;
  };
  const [defaultComic, setDefaultComic] = useState(getDataComponents("marvel"));
  const onClickTab = (comic) => {
    let data = getDataComponents(comic);
    console.log(data);
    setDefaultComic(data);
  };
  return <h1>Loading...</h1>;
  return <React.Fragment>{defaultComic.page}</React.Fragment>;
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="tabs">
          <ol className="tab-list">
            <LinkTab eventclick={onClickTab} label="marvel" />
            <LinkTab eventclick={onClickTab} label="dc" />
          </ol>
        </div>
        {/*<ul>
          <li>
            <Link href="/marvel">
              <a>Marvel</a>
            </Link>
          </li>
          <li>
            <Link href="/dc">
              <a>DC</a>
            </Link>
          </li>
        </ul>*/}
        {defaultComic.page}
      </main>

      {/*<footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>*/}
    </div>
  );
}

/*Home.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:4000/dc");
  const json = await res.json();
  return { charactersMarvel: json };
};*/
export default Home;
