import events from 'girder/events';
import View from 'girder/views/View';

import ItemModel from 'girder/models/ItemModel';

// import FileInfoWidet from 'girder/views/widgets/FileInfoWidget';
import ItemView from 'girder/views/body/ItemView';
// import FolderView from 'girder/views/body/FolderView';
// import UserView from 'girder/views/body/UserView';

import detail from '../templates/detail.pug';

var DetailWidget = View.extend({
    initialize: function () {
        this.modelView = null;
    },
    render: function () {
        if (this.modelView) {
            this.modelView.remove();
        }
        this.$el.html(detail());
        if (this.modelView) {
            this.modelView.setElement(
                this.$('.g-model-detail')
            ).render();
        }
    },
    showModel: function (model) {
        if (this.modelView) {
            this.modelView.remove();
            this.modelView = null;
        }
        switch (model._modelType) {
            case 'item':
                this.setItemView(model);
                break;
            default:
                events.trigger('g:alert', {
                    text: 'Invalid model type "' + model._modelType + '"',
                    type: 'danger',
                    timeout: 5000,
                    icon: 'attention'
                });
        }
        this.render();
    },
    setItemView: function (item) {
        item = new ItemModel(item);
        this.modelView = new ItemView({
            item,
            parentView: this
        });
    }
});

export default DetailWidget;
