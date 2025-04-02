// Code your solution here
// Function to find matching drivers (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find drivers whose names start with the given letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to match driver objects by name
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Example usage:
const drivers = ["Alice", "Bob", "Charlie", "Alfred"];
console.log(findMatching(drivers, "alice")); // ["Alice"]
console.log(fuzzyMatch(drivers, "Al")); // ["Alice", "Alfred"]

const driverObjects = [{ name: "Alice", hometown: "NYC" }, { name: "Bob", hometown: "LA" }];
console.log(matchName(driverObjects, "Alice")); // [{ name: "Alice", hometown: "NYC" }]
