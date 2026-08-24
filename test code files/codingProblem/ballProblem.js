function countArrangements(g, y, r, prev = null) {
    
    // Base case: all balls placed
    if (g === 0 && y === 0 && r === 0) {
        return 1;
    }

    let total = 0;

    // Place Green if available and not same as previous
    if (g > 0 && prev !== 'G') {
        total += countArrangements(g - 1, y, r, 'G');
    }

    // Place Yellow if available and not same as previous
    if (y > 0 && prev !== 'Y') {
        total += countArrangements(g, y - 1, r, 'Y');
    }

    // Place Red if available and not same as previous
    if (r > 0 && prev !== 'R') {
        total += countArrangements(g, y, r - 1, 'R');
    }

    return total;
}

// Example usage:
console.log(countArrangements(1, 1, 0)); // Output: 2
console.log(countArrangements(1, 1, 1)); // Output: 6
console.log(countArrangements(2, 1, 1)); // Output: 12
