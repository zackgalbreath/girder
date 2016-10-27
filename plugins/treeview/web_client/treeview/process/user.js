function user(model) {
    return {
        title: model.login,
        folder: true,
        key: model._id,
        write: model._accessLevel >= 1,
        lazy: true,
        rest: [{
            url: '/folder',
            data: {
                parentType: 'user',
                parentId: model._id
            }
        }],
        tooltip: model.firstName + ' ' + model.lastName,
        model: model,
        parentOf: ['folder']
    };
}

export default user;
