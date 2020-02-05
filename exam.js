class Kitchen {
    menu = [];
    productsInStock = [];
    actionsHistory = '';
    mealPrice = [];
    constructor(budget) {
        this.budget = budget;
    }
    loadProducts(products) {
        // products is array of elements:[ productName, productQuantity, productPrice ];
        let arr = [];
        for(let i = 0; i < products.length; i++) {
            arr.push(products[i].split(' '));
        }

        arr.map(x => {                     //// push a product in productsInStock
            this.budget -= Number(x[2]);   ///// if we have enough money to buy this product
            if(this.budget > 0){
                this.productsInStock.push([x[1], x[0]]);
                this.actionsHistory += `Successfully loaded ${x[1]} ${x[0]}\n`
            }
            if(this.budget < 0) {
                this.budget += Number(x[2]);
                this.actionsHistory += `There was not enough money to load ${x[1]} ${x[0]}\n`;
            }
        });
        return this.actionsHistory;
    }
    addToMenu(meal, neededProducts, price) {
        //// neededProducts format: [productName, productQuantity];
        this.mealPrice.push(`${meal} - $${price}`);
        this.menu.push(`Great idea! Now with the ${meal} we have ${this.menu.length + 1} meals in the menu, other ideas?`);
        
        return this.menu.join('\n') 
    }
    showMenu() {
        if(this.mealPrice.length > 0) {
            return this.mealPrice.join('\n');
        } else return 'Our menu is not ready yet, please come later';
    }
    makeTheOrder(meal) {
        for(let i = 0; i < this.mealPrice.length; i++) {
                                        ///////    Take a name of meal    ////////
            if(this.mealPrice.map(x => x.split(' - '))[i][0] === meal) {
                console.log(                                                            ////////    Take a price of meal     /////
                    `Your order ${meal} will be completed in the next 30 minutes for ${this.mealPrice.map(x => x.split(' - '))[i][1]}`                                                                                                                           
                );
            } 
        }
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

kitchen.addToMenu('FrozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showMenu());
kitchen.makeTheOrder('Pizza');
kitchen.makeTheOrder('FrozenYogurt');
