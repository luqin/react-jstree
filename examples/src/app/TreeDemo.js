import React from 'react';

import 'jstree/dist/themes/default/style.css';
import Tree, {TreeNode} from 'react-jstree';

class TreeDemo extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <Tree>
        <TreeNode text="Root Node 1">
          <TreeNode
            text={<span>initially <b>Selected</b></span>}
            selected
          />
          <TreeNode text="initially hovered" hovered/>
          <TreeNode text="initially disabled" disabled/>
          <TreeNode text="initially open" opened>
            <TreeNode text="Another Node"/>
          </TreeNode>
          <TreeNode text="initially close" opened={false}>
            <TreeNode text="Another Node"/>
          </TreeNode>
          <TreeNode text="Loading children" loading/>
        </TreeNode>
        <TreeNode text="Root Node 2"/>
      </Tree>
    );
  }
}

export default TreeDemo;
