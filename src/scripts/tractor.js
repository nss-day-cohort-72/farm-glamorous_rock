import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"


//creates library that is a map types to their seed creation functions
const seedFactoryItems = {
    Asparagus: createAsparagus,
    Corn: createCorn,
    Soybean: createSoybean,
    Potato: createPotato,
    Sunflower: createSunflower,
    Wheat: createWheat
}

//creation of plantSeeds function that passes in plan as a parameter
export const plantSeeds = (plan) => {
    //iterates through each row in the plan
    for (const row of plan) {
        //iterates through each plant in the row
        for (const plant of row) {
            //get the seed creation function for the current plants type
            const createSeed = seedFactoryItems[plant]
            

            //qualifier to see if the plant is corn or not
            if (plant === "Corn") {
                //destructuring the array into two seed objects
                const [corn1, corn2] = createSeed()

                //added both seed objects to the field
                addPlant(corn1)
                addPlant(corn2)
            } else {
                //for everything else we are creating the seed object normally
                const seed = createSeed()
                addPlant(seed)
            }
        }
    }
}
