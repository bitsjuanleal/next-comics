import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/tabs.scss';

import Tab from './Tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.activeUrlTab.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  updateActiveTab = (activeUrlTab, label) => {
    // console.log(activeUrlTab, label);
    // this.setState({ activeTab: `${activeUrlTab}/${label}` });
  };

  render() {
    const {
      onClickTabItem,
      updateActiveTab,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label, onclickevent, activeUrlTab } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                eventclick={onclickevent}
                activeUrlTab={activeUrlTab}
                updateActiveTab={updateActiveTab}
                onClickParent={onClickTabItem}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Tabs;
