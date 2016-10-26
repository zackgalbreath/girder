import View from 'girder/views/View';

var TreeviewBody = View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.girderTreeview({
            mockMutations: true,
            edit: true,
            dragAndDrop: true,
            persist: true
        });
    }
});

export default TreeviewBody;
