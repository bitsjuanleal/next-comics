/*import { useRouter } from "next/router";
import ErrorPage from "next/error";

function Detail({ props }) {
  const router = useRouter();
  const { comic, name } = router.query;
  console.log(router);*/
/*if (!router.isFallback && !comic?.name) {
    return <ErrorPage statusCode={404} />;
  }*/
/*return <div>Detail characters de {comic}</div>;
}*/

// This function gets called at build time
/*export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://.../[comic]/[name]");
  const comics = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = comics.map((comic) => ({
    params: { comic: comic.comic, name: comic.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../${params.comic}/${params.name}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { comic, name } };
}*/

//export default Detail;

import React from "react";
import Link from "next/link";
import Powers from "./../../../components/Powers";

class Detail extends React.Component {
  static async getInitialProps(ctx) {
    const { comic, name } = ctx.query;
    const res = await fetch(`http://localhost:4000/${comic}?name=${name}`);
    const json = await res.json();
    return {
      character: json[0],
      comic: comic,
    };
  }

  getDataComic = (comicName) => {
    const configCardMarvel = {
      background: "#ffd4d4",
      repeatPowers: "repeat(3, 1fr)",
    };
    const configCardDc = {
      background: "#e0ecf9",
      repeatPowers: "repeat(2, 1fr)",
    };
    let data = configCardMarvel;
    switch (comicName) {
      case "dc":
        data = configCardDc;
        break;
      case "detail":
        data = configCardMarvel;
        break;
    }
    return data;
  };

  render() {
    const { background, repeatPowers } = this.getDataComic(this.props.comic);
    const { character, comic } = this.props;
    const styleImg = {
      backgroundColor: background,
    };
    const styleDiv = {
      gridTemplateColumns: repeatPowers,
    };
    return (
      <section className="detail-hero">
        <h1>{character.name}</h1>
        <div className="hero-profile">
          <div className="hero-description">
            <img src={character.image} alt="Avatar" style={styleImg} />
          </div>
          <div>
            <h2>Skills</h2>
            <div className="hero-powers" style={styleDiv}></div>
            <Powers powers={character.powers} />
          </div>
        </div>
        <div className="description">
          <h2>BIOGRAPHY</h2>
          {character.biography}
        </div>
        {character.url != undefined && (
          <div className="url">
            <Link href={`/${comic}`}>
              <a className="alignleft">Back</a>
            </Link>
            <a href={character.url} target="_blank" className="alignright">
              See more
            </a>
          </div>
        )}
      </section>
    );
  }
}

export default Detail;
