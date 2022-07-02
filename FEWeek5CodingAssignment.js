// This is an app designed to make smoothies. You will be able to do the following:
// * Create a list of ingredients available for smoothies, view the list, and delete from the list.
// * Create a smoothie recipe with a name and ingredients, view the contents of a smoothie, and
// view all the created smoothie recipes.
// * Delete a recipe for a smoothie.
// The breakdown of each option will be presented in the menu class.
// Main classes will be menu and smoothie, with only one instance of menu being instantiated.

class Smoothie {
    constructor(smoothieName) {
        this.smoothieName = smoothieName;
        this.smoothieIngredients = [];
        this.completedSmoothie = [];
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
        ${this.smoothieIngredients}.`);
        let completedSmoothie = [this.smoothieName, this.smoothieIngredients];
        return completedSmoothie;
    }

}


class Menu {
    constructor() {
        this.smoothies = [];
        this.ingredient = '';
        this.ingredients = ["apple", "orange", "banana"];
    }

    // Method for case 1: adding an available ingredient to the list of all available ingredients.
    addAvailableIngredient(ingredient) {
        this.ingredients.push(ingredient);
        alert(`You added ${ingredient} as an ingredient.`);
    }

    // Method for case 2: listing all available ingredients.
    listIngredients() {
        alert(`Here is a list of all ingredients available to make a smoothie: ${this.ingredients}.`);
    }

    // Method for case 3: removing an ingredient from the list of all available ingredients.
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

    // Method for case 5: listing all smoothie recipes.
    listSmoothieNames() {
        // This is a two-dimensional array. It is an array of arrays.
        alert(`Here is a list of all smoothie recipe names:`);
        for (let i = 0; i < this.smoothies.length; i++) {
            alert(this.smoothies[i][0]);
        }
    }

    // Method for case 6: listing the name and ingredient list of a smoothie recipe.
    describeSmoothie(chosenSmoothie) {
        alert(`${this.smoothies[chosenSmoothie][0]} is the name of this smoothie.
        Its components are:`);
        for (let i = 1; i <this.smoothies.length; i++) {
            alert(this.smoothies[chosenSmoothie][i]);
        }
        alert("Sounds good!");
    }

    // Method for case 7: deleting a smoothie reciple from the list of smoothie recipes.
    deleteSmoothie(removeSmoothie) {
        alert(`You are deleting ${this.smoothies[removeSmoothie][0]} from the list of smoothie recipes.`);
        this.smoothies.splice(removeSmoothie, 1);
    }

    // The main menu of the entire application. Provides all the main menu options needed.
    runMenu() {
        let choice = null;
        while (choice !== '0') {
            choice = prompt(`Welcome! It's smoothie time. Please choose an option, or enter 0 to exit.
            1) Add an ingredient to the list of available ingredients.
            2) List all available ingredients.
            3) Delete an ingredient from the list of available ingredients.
            4) Create a smoothie.
            5) List all smoothie recipe names.
            6) Describe a created smoothie name's ingredients.
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
                    this.smoothies.push(smoothie.createSmoothie(this.ingredients));
                    break;
                case '5':
                    alert("You chose to list all smoothie recipes by name.");
                    this.listSmoothieNames();
                    break;
                case '6':
                    alert("You chose to describe a smoothie recipe.");
                    let chosenSmoothie = prompt("What is the index of the smoothie you are looking to describe?");
                    if (chosenSmoothie > -1 && chosenSmoothie < this.smoothies.length) {
                        this.describeSmoothie(chosenSmoothie);
                    } else {
                        alert("You chose an index that does not fall within the confines of the list of all smoothies.");
                        alert("No smoothie recipe will be described.");
                    }
                    break;
                case '7':
                    alert("You chose to delete a smoothie recipe.")
                    let removeSmoothie = prompt("what is the index of the smoothie you are looking to delete?");
                    if (removeSmoothie > -1 && removeSmoothie < this.smoothies.length) {
                        this.deleteSmoothie(removeSmoothie);
                    } else {
                        alert("You chose an index that does not fall within the confines of the list of all smoothies.");
                        alert("No smoothie recipes have been deleted.");
                    }
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

// Creates a new instance of the Menu, then runs it. There is only need for the menu to be instantiated once.
let menu = new Menu();
menu.runMenu();