// This is an app designed to make smoothies. You will be able to do the following:
// 1. Create a list of ingredients going into the smoothie.
// 2. View the contents of a smoothie.
// 3. Delete a recipe for a smoothie.

class Smoothie {
    constructor(smoothieName) {
        this.smoothieName = smoothieName;
        this.smoothieIngredients = [];
    }

    createSmoothie(ingredients) {
        let choice = null;
        while (choice !== '0') {
            choice = prompt("Do you want to add an ingredient? (Type 0 to exit, 1 to continue.");
            if (choice === '1') {
                alert(`You are currently working on the recipe of a smoothie named ${this.smoothieName}.`);
                let addIngredientToSmoothie = prompt("What is the index of the ingredient you would like to add?");
                if (addIngredientToSmoothie > -1 && addIngredientToSmoothie < ingredients.length) {
                    this.smoothieIngredients.push(ingredients[addIngredientToSmoothie]);
                    alert(`You added ${ingredients[addIngredientToSmoothie]} into the smoothie recipe.`);
                } else {
                    alert(`Ingredient not found. Added ingredients must be from the list of available ingredients.
                    You attempted to add an index number that does not fit into the confines of the ingredients array.`);
                }
            } else if (choice === '0') {
                alert(`Finished completing ${this.smoothieName} recipe.`);
            } else {
                alert("You did not enter a valid choice. Please try again.");
            }
        }
        alert(`You created a smoothie recipe named ${this.smoothieName}. It contains the following ingredients:
        ${this.smoothieIngredients.join(', ')}.`);
    }

    // describeSmoothie() {
    //     return `${this.smoothieName} is the name of this smoothie.
    //     Its components are: ${this.smoothie}. Sounds good.`;
    // }
}


class Menu {
    constructor() {
        this.smoothies = [];
        this.ingredient = '';
        this.ingredients = [];
    }

    addAvailableIngredient(ingredient) {
        this.ingredients.push(ingredient);
        alert(`You added ${ingredient} as an ingredient.`);
    }

    listIngredients() {
        alert(`Here is a list of all ingredients available to make a smoothie: ${this.ingredients}.`);
    }

    deleteAvailabeIngredient() {
        let deleteIngredient = prompt(`What ingredient would you like to remove from the list of available ingredients?
        Please enter the index value for the ingredient you want removed.`);
        if (deleteIngredient > -1 && deleteIngredient < this.ingredients.length) {
            let alertOutput = this.ingredients[deleteIngredient];
            alert(`You deleted ${alertOutput} from the list of available ingredients.`);
            this.ingredients.splice(deleteIngredient, 1);
        } else {
            alert(`Cannot delete this ingredient. You entered an invalid index.`);
        }
        
    }

    runMenu() {
        let choice = null;
        while (choice !== '0') {
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
                    let ingredient = prompt("What ingredient do you want to add to your list" +
                    " of available ingredients for smoothies?");
                    this.addAvailableIngredient(ingredient);
                    break;
                case '2':
                    alert("You chose to display the list of all available ingredients.");
                    this.listIngredients();
                    break;
                case '3':
                    alert("You chose to delete an ingredient from the list of all available ingredients.");
                    this.deleteAvailabeIngredient();
                    break;
                case '4':
                    alert("You chose to create a smoothie.");
                    let nameASmoothie = prompt("What is the name of the smoothie you are looking to create?");
                    let smoothie = new Smoothie(nameASmoothie);
                    smoothie.createSmoothie(this.ingredients);
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