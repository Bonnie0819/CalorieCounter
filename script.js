function initialize() {
    //variables for appetizer
    aProtein = document.getElementById("proteinA");
    aCarbs = document.getElementById("carbsA");
    aFats = document.getElementById("fatsA");
    aCalories = document.getElementById("caloriesA");
    appetizerCarbs = 0;
    appetizerFats = 0;
    appetizerProtein = 0;
    appetizerCalories = 0;
    //variables for entree
    bProtein = document.getElementById("proteinB");
    bCarbs = document.getElementById("carbsB");
    bFats = document.getElementById("fatsB");
    bCalories = document.getElementById("caloriesB");
    entreeCarbs = 0;
    entreeFats = 0;
    entreeProtein = 0;
    entreeCalories = 0;
    //variables for dessert
    cProtein = document.getElementById("proteinC");
    cCarbs = document.getElementById("carbsC");
    cFats = document.getElementById("fatsC");
    cCalories = document.getElementById("caloriesC");
    dessertCarbs = 0;
    dessertFats = 0;
    dessertProtein = 0;
    dessertCalories = 0;

    //total calories of the meal
    t = document.getElementById("total");
    totalCalories = 0;

    display();
}

function addProtein(course) {
    if(course =="Appetizer") {
        appetizerProtein++;
    } else if(course =="Entree") {
        entreeProtein++;
    } else if(course =="Dessert") {
        dessertProtein++;
    }
    display();
}
function subtractProtein(course) {
    if(course =="Appetizer" && appetizerProtein > 0) {
        appetizerProtein--;
    } else if(course =="Entree" && entreeProtein > 0) {
        entreeProtein--;
    } else if(course =="Dessert" && dessertProtein > 0) {
        dessertProtein--;
    }
    display();
}
function addCarbs(course) {
    if(course =="Appetizer") {
        appetizerCarbs++;
    } else if(course =="Entree") {
        entreeCarbs++;
    } else if(course =="Dessert") {
        dessertCarbs++;
    }
    display();
}
function subtractCarbs(course) {
    if(course =="Appetizer" && appetizerCarbs > 0) {
        appetizerCarbs--;
    } else if(course =="Entree" && entreeCarbs > 0) {
        entreeCarbs--;
    } else if(course =="Dessert" && dessertCarbs > 0) {
        dessertCarbs--;
    }
    display();
}
function addFats(course) {
    if(course =="Appetizer") {
        appetizerFats++;
    } else if(course =="Entree") {
        entreeFats++;
    } else if(course =="Dessert") {
        dessertFats++;
    }
    display();
}
function subtractFats(course) {
    if(course =="Appetizer" && appetizerFats > 0) {
        appetizerFats--;
    } else if(course =="Entree" && EntreeFats > 0) {
        entreeFats--;
    } else if(course =="Dessert" && dessertFats > 0) {
        dessertFats--;
    }
    display();
}
//updates the calories of each course 
function updateCalories() {
    appetizerCalories = ((appetizerFats * 9) + (appetizerCarbs * 4) + (appetizerProtein * 4));
    entreeCalories = ((entreeFats * 9) + (entreeCarbs * 4) + (entreeProtein * 4));
    dessertCalories = ((dessertFats * 9) + (dessertCarbs * 4) + (dessertProtein * 4));
    totalCalories = appetizerCalories + entreeCalories + dessertCalories;
}
function reset() {
    appetizerCarbs = 0;
    appetizerFats = 0;
    appetizerProtein = 0;
    appetizerCalories = 0;
    entreeCarbs = 0;
    entreeFats = 0;
    entreeProtein = 0;
    entreeCalories = 0;
    dessertCarbs = 0;
    dessertFats = 0;
    dessertProtein = 0;
    dessertCalories = 0;
    display();
}

function display() {
    updateCalories();
    //Displays the information on the Appetizer
    aProtein.innerHTML = "Protein: " + appetizerProtein + "g";
    aCarbs.innerHTML = "Carbs: " + appetizerCarbs + "g";
    aFats.innerHTML = "Fats: " + appetizerFats + "g";
    aCalories.innerHTML = "Calories: " + appetizerCalories;
    //Displays the information on the Entree
    bProtein.innerHTML = "Protein: " + entreeProtein + "g";
    bCarbs.innerHTML = "Carbs: " + entreeCarbs + "g";
    bFats.innerHTML = "Fats: " + entreeFats + "g";
    bCalories.innerHTML = "Calories: " + entreeCalories;
    //Displays the information on the Entree
    cProtein.innerHTML = "Protein: " + dessertProtein + "g";
    cCarbs.innerHTML = "Carbs: " + dessertCarbs + "g";
    cFats.innerHTML = "Fats: " + dessertFats + "g";
    cCalories.innerHTML = "Calories: " + dessertCalories;
    //displays the total calories of the meal
    t.innerHTML = "Total Calories in this Meal: " + totalCalories;
}