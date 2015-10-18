import React from 'react';
import classnames from 'classnames';

class TreeNode extends React.Component {

  static propTypes = {
    text: React.PropTypes.any,
    icon: React.PropTypes.node,

    opened: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    hovered: React.PropTypes.bool,

    children: React.PropTypes.node,

    prefixCls: React.PropTypes.string,
  };

  static defaultProps = {
    opened: true,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  renderCheckbox(props) { // eslint-disable-line

  }

  renderChildren(props) {
    const children = props.children;

    if (!children) {
      return children;
    }

    return (
      <ul className="jstree-children">
        {this.props.children}
      </ul>
    );
  }

  render() {
    const props = this.props;

    let newChildren = this.renderChildren(props);
    if (!newChildren || newChildren === props.children) {
      // content = newChildren;
      newChildren = null;
    }

    const liCls = {
      'jstree-node': true,
      'jstree-leaf': !newChildren,
      'jstree-open': this.props.opened,
      'jstree-closed': !this.props.opened,
      'jstree-loading': this.props.loading,
      'jstree-last': false,
    };

    const aCls = {
      'jstree-anchor': true,
      'jstree-clicked': this.props.selected,
      'jstree-disabled': this.props.disabled,
      'jstree-hovered': this.props.hovered,
    };

    return (
      <li className={classnames(liCls)}>
        <i className="jstree-icon jstree-ocl"/>
        <a className={classnames(aCls)} href="#" tabIndex={-1}>
          <i className="jstree-icon jstree-themeicon"/>
          {this.props.text}
        </a>
        {newChildren}
      </li>
    );
  }
}

export default TreeNode;
