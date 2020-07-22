const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};

const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: {
        material: 'metal',
        ingredients: {},
    },
    addIngredientToKettle(nameOfIngredient, amount) {
        this.kettle.ingredients[nameOfIngredient] = amount;
        this[nameOfIngredient] -= amount;
    },
    cook(recipe) {
        let recipeName = magicBook.recipes[recipe];
        for (const key in recipeName) {
            if (recipeName.hasOwnProperty(key) && recipeName[key] === this.kettle.ingredients[key]) {
                continue;
            } else {
                console.log('There are not enough ingredients');
                return;
            };
        };

        console.log(recipe);
    },
};

kitchen.addIngredientToKettle('lava', 10);
kitchen.addIngredientToKettle('evil', 999);
console.log(kitchen);
kitchen.cook('littleDevil');


