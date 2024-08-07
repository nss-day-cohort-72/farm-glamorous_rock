
export const harvestPlants = (plants) => {
    const seedObject = []
    for (const plant of plants) {
        let amount = plant.output 
        if (plant.type === "Corn") {
            amount = Math.floor (amount/2)
        }

        for (let i=0; i < amount; i++)
        {seedObject.push(plant)}
        
    }
    return seedObject
}
