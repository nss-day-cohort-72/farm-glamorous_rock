import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createPotato } from "./seeds/potato.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";


const seedFactoryItems = {
    Asparagus: createAsparagus,
    Corn: createCorn,
    Soybean: createSoybean,
    Potato: createPotato,
    Sunflower: createSunflower,
    Wheat: createWheat
}


export const plantSeeds = (plan) => {
 for (const row of plan) {
    for (const plant of row) {

        const createSeed = seedFactoryItems[plant]
        const seed = createSeed()

        addPlant(seed)
    }  
 }
}