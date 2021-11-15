function findMatching(drivers, string){
    const matching = drivers.filter(driver => string.toUpperCase() == driver.toUpperCase())
    return matching
}


function fuzzyMatch(drivers, string){
    const match = drivers.filter(driver => driver.indexOf(string) === 0)
    console.log(match)
    return match
}

function matchName(drivers, string){
    const name = drivers.filter(driver => driver.name === string)
    console.log(name)
    return name
}