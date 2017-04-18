class BaseModel {
    constructor(options = {}, data = []) { // class constructor
        this.name = 'Base'
        this.options = options
        this.data = data
    }

    getName() {
        return `${this.name}`;
    }
}

var coolFunction = () => {
    var model = new BaseModel(undefined, ['some data']);
    document.writeln(JSON.stringify(model));
    document.writeln(model.getName());
}

coolFunction();