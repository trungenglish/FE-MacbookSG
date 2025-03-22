class CartCommand {
    constructor(dispatch, payload) {
        this.dispatch = dispatch;
        this.payload = payload;
    }

    execute() {
        throw new Error("execute() must be implemented");
    }

    undo() {
        throw new Error("undo() must be implemented");
    }
}

class AddToCartCommand extends CartCommand {
    execute() {
        this.dispatch({ type: "ADD_TO_CART", payload: this.payload });
    }

    undo() {
        this.dispatch({ type: "DECREASE_QUANTITY", payload: this.payload });
    }
}

class RemoveFromCartCommand extends CartCommand {
    execute() {
        this.dispatch({ type: "REMOVE_FROM_CART", payload: this.payload });
    }

    undo() {
        this.dispatch({ type: "ADD_TO_CART", payload: this.payload });
    }
}

class DecreaseQuantityCommand extends CartCommand {
    execute() {
        this.dispatch({ type: "DECREASE_QUANTITY", payload: this.payload });
    }

    undo() {
        this.dispatch({ type: "ADD_TO_CART", payload: this.payload });
    }
}

export { AddToCartCommand, RemoveFromCartCommand, DecreaseQuantityCommand };
