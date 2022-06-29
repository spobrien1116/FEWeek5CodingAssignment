// This is an app designed to make smoothies. You will be able to do the following:
// 1. Create a list of ingredients going into the smoothie.
// 2. View the contents of a smoothie.
// 3. Delete a recipe for a smoothie.

// class Smoothies {
//     constructor(ingredient, smoothie) {
//         this.ingredient = ingredient;
//         this.smoothie = smoothie;
//     }

//     createSmoothie(ingredient) {
//         if (ingredient instanceof Ingredients) {
//             this.smoothie.push(ingredient);
//         } else {
//             throw new Error(`Ingredient not found. Added ingredients must be from the list of available ingredients.
//             You attempted to add ${ingredient} into the smoothie: it failed!`);
//         }
//     }

//     describeSmoothie() {
//         return `${this.smoothie} is the name of this smoothie.
//         Its components are: ${this.smoothie}. Sounds good.`;
//     }
// }

// class Ingredients {
//     constructor(ingredient) {
//         this.ingredient = ingredient;
//         this.ingredients = [];
//     }

//     addAvailableIngredient() {
//         let newIngredient = prompt("What ingredient would you like to add to your list of ingredients available to create a smoothie?");
//         ingredients.push(newIngredient);
//         console.log(`You added ${this.newIngredient} as an ingredient.`);
//     }
// }

class Menu {
    constructor() {
        this.smoothies = [];
        this.ingredients = [];
    }

    runMenu() {
        let choice = null;
        while (choice != 0) {
            choice = prompt(`Welcome! It's smoothie time. Please choose an option, or enter 0 to exit.
            1) Add an ingredient to the list of available ingredients.
            2) List all available ingredients.
            3) Delete an ingredient from the list of available ingredients.
            4) Create a smoothie.
            5) List all smoothie recipes.
            6) Describe a created smoothie.
            7) Delete a created smoothie.`);
            switch (choice) {
                case '1':
                    alert("You chose to add an ingredient to the list of available ingredients.");
                    // this.addToIngredients();
                    break;
                case '2':
                    alert("You chose to display the list of all available ingredients.");
                    // this.listIngredients();
                    break;
                case '3':
                    alert("You chose to delete an ingredient from the list of all available ingredients.");
                    // this.deleteFromIngredients();
                    break;
                case '4':
                    alert("You chose to create a smoothie.");
                    // this.createSmoothie();
                    break;
                case '5':
                    alert("You chose to list all smoothie recipes.");
                    // this.listSmoothies();
                    break;
                case '6':
                    alert("You chose to describe a smoothie recipe.");
                    // this.describeSmoothie();
                    break;
                case '7':
                    alert("You chose to delete a smoothie recipe.")
                    // this.deleteSmoothie();
                    break;
                case '0':
                    alert("You have chosen to close the smoothie menu.");
                    break;
                default:
                    alert("You did not enter a valid selection. Please try again, or enter 0 to exit.");
            }
        }
        alert("Closing smoothie menu.");
        console.log("Smoothie menu has been closed.");
    }
}

let menu = new Menu();
menu.runMenu();