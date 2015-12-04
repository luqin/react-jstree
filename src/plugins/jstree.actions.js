import ReactDOM from 'react-dom';

$.jstree.defaults.actions = $.noop;

$.jstree.plugins.actions = function (options, parent) {
    this.redraw_node = function (node_id, deep, callback, force_draw) {
        var node = parent.redraw_node.call(this, node_id, deep, callback, force_draw);
        if (node) {
            var e = options.getElement(this._model.data[node.id]);

            if (e) {
                var el = document.createElement('span');
                el.className = 'jstree-actions';
                var place = node.querySelector('a');
                node.insertBefore(el, place);

                ReactDOM.render(e, el);
            }
        }
        return node;
    };
};
