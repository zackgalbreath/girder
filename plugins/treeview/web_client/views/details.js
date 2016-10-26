// import events from 'girder/events';
import View from 'girder/views/View';

import ItemModel from 'girder/models/ItemModel';
import FolderModel from 'girder/models/FolderModel';
import CollectionModel from 'girder/models/CollectionModel';
import UserModel from 'girder/models/UserModel';

// import FileInfoWidet from 'girder/views/widgets/FileInfoWidget';
import ItemView from 'girder/views/body/ItemView';
import FolderView from 'girder/views/body/FolderView';
import CollectionView from 'girder/views/body/CollectionView';
import UserView from 'girder/views/body/UserView';

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
            case 'folder':
                this.setFolderView(model);
                break;
            case 'collection':
                this.setCollectionView(model);
                break;
            case 'user':
                this.setUserView(model);
                break;
            default:
        }
        this.render();
    },
    setItemView: function (item) {
        item = new ItemModel(item);
        this.modelView = new ItemView({
            item,
            parentView: this
        });
    },
    setFolderView: function (folder) {
        folder = new FolderModel(folder);
        this.modelView = new FolderView({
            folder,
            parentView: this
        });
    },
    setCollectionView: function (collection) {
        collection = new CollectionModel(collection);
        this.modelView = new CollectionView({
            collection,
            parentView: this
        });
    },
    setUserView: function (user) {
        user = new UserModel(user);
        this.modelView = new UserView({
            user,
            parentView: this
        });
    }
});

export default DetailWidget;
