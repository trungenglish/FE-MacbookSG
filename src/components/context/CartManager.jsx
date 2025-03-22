class CartManager {
    constructor() {
        this.history = [];
    }

    execute(command) {
        this.history.push(command);
        command.execute();
    }

    undo() {
        const command = this.history.pop();
        if (command) command.undo();
    }
}

export const cartManager = new CartManager();
