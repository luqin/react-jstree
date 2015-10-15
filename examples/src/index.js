import './index.scss';

import React from 'react';

import ReactJstree from 'react-jstree';

class Example extends React.Component {

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }

}

React.render(<Example/>, document.querySelector('#app'));
