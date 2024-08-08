console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { usePlants } from './field.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalog.js'



const yearlyPlan = createPlan()
console.log("Yearly Plan:", yearlyPlan)

plantSeeds(yearlyPlan)

const plantsInField = usePlants()
console.log("Plants in Field:", plantsInField)

const harvestedFood = harvestPlants(plantsInField)
console.log("Harvested Food:", harvestedFood)



const container = document.querySelector(".container")
const harvestedFoodHTML = Catalog(harvestedFood)
container.innerHTML = harvestedFoodHTML
