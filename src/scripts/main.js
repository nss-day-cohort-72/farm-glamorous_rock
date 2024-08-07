console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js';
import { usePlants } from './field.js';


const yearlyPlan = createPlan();
console.log("Yearly Plan", yearlyPlan)

plantSeeds(yearlyPlan);

const plantsInField =usePlants();
console.log("Plants in Field", plantsInField)


