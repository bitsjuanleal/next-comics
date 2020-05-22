// import PropTypes from "prop-types";
/*import Link from "next/link";

class LinkTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.label,
    };
  }

  onClick = () => {
    const { label } = this.props;
    this.setState({ activeTab: label });
    //if (eventclick != undefined) {
    // eventclick(label);
    //}
  };

  componentDidMount() {
    const { label } = this.props;
  }

  render() {
    const {
      onClick,
      props: { label },
      state: { activeTab },
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <LinkTab href={`/${label}`}>
        <a className={className} onClick={onClick}>
          {label}
        </a>
      </LinkTab>
    );
  }
}

export default LinkTab;*/
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { Context } from "./../../components/hooks/initialState";

const LinkTab = (props) => {
  const { store, dispatch } = useContext(Context);
  const { label, eventclick, activeTab, urlTab } = props;
  // const [activeTabItem, setActiveTabItem] = useState(activeTab);

  const onClick = () => {
    // setActiveTabItem(activeTab);
    eventclick(label);
  };
  let className = "tab-list-item";
  if (activeTab === label) {
    className += " tab-list-active";
  }
  let urlRedirect = urlTab;
  console.log(urlTab);
  if (urlTab == "" || urlTab == undefined) {
    urlRedirect = "/";
  }
  return (
    <li>
      <Link href={urlRedirect}>
        <a className={className} onClick={onClick}>
          {label}
        </a>
      </Link>
    </li>
  );
};

export default LinkTab;
