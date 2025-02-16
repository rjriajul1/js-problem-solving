// problem
// Find the lowest number in the array below?

const heights = [167, 190, 120, 165, 137, 60];

let lowestNumber = heights[0];
for (const height of heights) {
    if (height < lowestNumber) {
        lowestNumber = height;
    }
}
console.log(lowestNumber);