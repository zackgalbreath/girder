function folder(model, parent) {
    return {
        title: model.name,
        folder: true,
        key: model._id,
        write: model._accessLevel >= 1,
        lazy: true,
        rest: [{
            url: '/item',
            data: {
                folderId: model._id
            }
        }, {
            url: '/folder',
            data: {
                parentType: 'folder',
                parentId: model._id
            }
        }],
        model: model,
        parent: parent,
        parentOf: ['folder', 'item']
    };
}

export default folder;
