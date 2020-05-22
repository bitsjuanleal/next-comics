import React, { useState, useReducer } from "react";
import App from "next/app";
import Link from "next/link";
import "../components/styles/base.scss";
import Header from "./../components/core/Header";
import LinkTab from "../components/core/link-tab";
import {
  Context,
  initialState,
  reducer,
} from "../components/hooks/initialState";

function MyApp({ Component, pageProps }) {
  // const [activeTab, setActiveTab] = useState("marvel");
  const [store, dispatch] = useReducer(reducer, initialState);
  const onClickTab = (comic) => {
    /*console.log(comic);
    dispatch(comic);*/
    dispatch({ tab: comic, detailUrl: store.detailUrl });
  };
  console.log(store.activeTab);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <Header />
      <div className="tabs">
        <ol className="tab-list">
          <LinkTab
            eventclick={onClickTab}
            activeTab={store.activeTab}
            label="marvel"
            urlTab="/marvel"
          />
          <LinkTab
            eventclick={onClickTab}
            activeTab={store.activeTab}
            label="dc"
            urlTab="/dc"
          />
          <LinkTab
            eventclick={onClickTab}
            activeTab={store.activeTab}
            label="detail"
            urlTab={store.detailUrl}
          />
        </ol>
      </div>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

/*MyApp.getStaticProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getStaticProps(appContext);

  return { ...appProps };
};*/

export default MyApp;
