import View from 'girder/views/View';

var TreeWidget = View.extend({
    initialize: function (settings) {
        this.settings = settings;
    },
    render: function () {
        this.$el.girderTreeview(this.settings);
    }
});

export default TreeWidget;
