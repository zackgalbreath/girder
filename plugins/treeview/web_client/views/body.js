import View from 'girder/views/View';

import TreeWidget from './tree';

import body from '../templates/body.pug';
import '../stylesheets/body.styl';

var TreeviewBody = View.extend({
    initialize: function (settings) {
        this.tree = new TreeWidget({
            mockMutations: true,
            edit: true,
            dragAndDrop: true,
            persist: true,
            parentView: this
        });

        this.render();
    },
    render: function () {
        this.$el.html(body());
        this.tree.setElement(this.$('.g-treeview-widget')).render();
    }
});

export default TreeviewBody;
