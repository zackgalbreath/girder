function collection(model) {
    return {
        title: model.name,
        folder: true,
        key: model._id,
        write: model._accessLevel >= 1,
        lazy: true,
        rest: [{
            url: '/folder',
            data: {
                parentType: 'collection',
                parentId: model._id
            }
        }],
        model: model,
        parentOf: ['folder']
    };
}

export default collection;
