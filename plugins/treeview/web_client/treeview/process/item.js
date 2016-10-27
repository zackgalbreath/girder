function item(model, parent) {
    return {
        title: model.name,
        folder: true,
        key: model._id,
        write: parent.write,
        lazy: true,
        rest: [{
            url: '/item/' + model._id + '/files'
        }],
        model: model,
        parent: parent,
        parentOf: ['file']
    };
}

export default item;
