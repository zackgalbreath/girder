function file(model, parent) {
    return {
        title: model.name,
        write: parent.write,
        key: model._id,
        model: model,
        parent: parent,
        parentOf: []
    };
}

export default file;
