import View from 'girder/views/View';

import tree from '../templates/tree.pug';

var TreeWidget = View.extend({
    events: {
        'g-focus .g-treeview-container': '_focus'
    },
    initialize: function (settings) {
        this.settings = settings;
    },
    render: function () {
        this.$el.html(tree());
        this.$('.g-treeview-container').girderTreeview(this.settings);
    },
    _focus: function (evt, node) {
        var model = node.data.model;
        if (model._modelType) {
            this.trigger('focus:' + model._modelType, model);
        }
        this.trigger('focus', model);
    }
});

export default TreeWidget;
