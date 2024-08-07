export const Catalog = (harvestedFood) => {
// const container = document.querySelector(".container")

    for (const food of harvestedFood) {
        let harvestedFoodHTML = `<section class="plant">${food.type}</section>`
        return harvestedFoodHTML
    }
 }