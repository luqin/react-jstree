import React from 'react';


class Tree extends React.Component {

  static propTypes = {
    prefixCls: React.PropTypes.string,

    multiple: React.PropTypes.bool,
    selected: React.PropTypes.array,
  };

  static defaultProps = {
    multiple: true,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  renderTreeNode(child) {
    return child;
  }

  render() {
    return (
      <div className="jstree jstree-default">
        <ul className="jstree-container-ul jstree-children">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default Tree;
