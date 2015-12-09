import React from 'react';
import deepEqual from 'deep-equal';

import $ from 'jquery';
require('jstree');
require('./plugins/jstree.actions');

var ReactJstree = React.createClass({
    propTypes: {
        onSelect: React.PropTypes.func,
        onSelectedChange: React.PropTypes.func,
    },

    componentDidMount: function () {
        this.createTree();
    },

    shouldComponentUpdate: function (prevProps) {
        return !deepEqual(prevProps, this.props);
    },

    componentWillUpdate: function () {
        this.destroyTree();
    },

    componentDidUpdate: function () {
        this.createTree();
    },

    componentWillUnmount: function () {
        this.destroyTree();
    },

    render: function () {
        return (
            <div className={this.props.className} {...this.props}>
                <div ref="tree">
                    {this.props.children}
                </div>
            </div>
        );
    },

    getNode() {
        return $(this.refs.tree);
    },

    createTree: function () {
        let props = this.props;
        this.getNode()
            .on('select_node.jstree', (...args)=> {
                props.onSelect && props.onSelect(...args);
            })
            .on('changed.jstree', (...args)=> {
                props.onSelectedChange && props.onSelectedChange(...args);
            })
            .jstree(props.options);
    },

    destroyTree: function () {
        this.getNode()
            .off('select_node.jstree')
            .off('changed.jstree')
            .jstree('destroy');
    },

    /**
     * @returns {*}
     */
    getTree: function () {
        return this.getNode().jstree(true);
    },

    getJsTree: function () {
        return this.getNode().jstree(true);
    },

    selectAll() {
        this.getTree().select_all();
    },

    deselectAll() {
        this.getTree().deselect_all();
    },

    selectNode() {
        this.getTree().select_node();
    }


});

export default ReactJstree;
