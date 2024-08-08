export const Catalog = (harvestedFood) => {
    let harvestedFoodHTML = ""

    //iterates through the harvestedFood with for...of loop
    for (const food of harvestedFood) {
        harvestedFoodHTML += `<section class="plant col">${food.type}</section>`
    }

    //returns the html string
    return harvestedFoodHTML
}
