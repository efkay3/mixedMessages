let travelDest = [ 'Athens','Paris', 'Tokyo', 'Lima', 'New York', 'Havana', 'London', 'Helsinki']
let colour = ['green', 'periwinkle', 'blue', 'lilac', 'yellow', 'beige']
let month = ['February', 'March', 'September', 'October']

let message = () => {
    console.log(`You should visit ${travelDest[Math.floor(Math.random()*travelDest.length)]} in ${month[Math.floor(Math.random()*month.length)]} in a ${colour[Math.floor(Math.random()*colour.length)]} jacket`)
}

message();