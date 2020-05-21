import React, { Component } from "react";
// import PropTypes from "prop-types";
import Link from "next/link";

class LinkTab extends Component {
  /*static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClickParent: PropTypes.func.isRequired,
    updateActiveTab: PropTypes.func.isRequired,
  };*/

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.label,
    };
  }

  onClick = () => {
    const { label, eventclick } = this.props;
    this.setState({ activeTab: label });
    if (eventclick != undefined) {
      eventclick(label);
    }
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
      <a className={className} onClick={onClick}>
        {label}
      </a>
    );
  }
}

export default LinkTab;
