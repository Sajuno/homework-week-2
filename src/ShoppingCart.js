module.exports = class ShoppingCart {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(itemName, quantity, price) {
        if(price && quantity) {
            this.items.push({name: itemName, quantity: quantity, pricePerUnit: price})
        }
    }

    clear() {
        this.items = []
    }

    total() {
        return this.items.reduce((acc, current) => {
            return current.pricePerUnit*current.quantity + acc
        }, 0)
    }
}