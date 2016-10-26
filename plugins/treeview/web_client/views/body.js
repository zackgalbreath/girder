import View from 'girder/views/View';

var TreeviewBody = View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.girderTreeview();
    }
});

export default TreeviewBody;
