import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClickParent: PropTypes.func.isRequired,
    updateActiveTab: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClickParent, eventclick, activeUrlTab, updateActiveTab } = this.props;
    onClickParent(label);
    if (eventclick != undefined) {
      eventclick(label);
    }
  };

  componentDidMount() {
      const { label, updateActiveTab, activeUrlTab } = this.props;
    if (label == 'detail') {
      updateActiveTab(activeUrlTab, label);
    }
  }

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <Link
        className={className}
        onClick={onClick}
        to={'/' + label.toLowerCase()}
      >
        {label}
      </Link>
    );
  }
}

export default Tab;
