

console.log(totalArrangement(1, 0, 1))

function totalArrangement(red, green, yellow, last = null) { 
    
    let totalCount = 0; 
  
    if (red == 0 && green == 0 && yellow == 0) {
        return 1;
    }
    if (red > 0 && last != 'r') {
        totalCount += totalArrangement(red - 1, green, yellow, 'r')
    }
    if (green > 0 && last != 'g') {
        totalCount += totalArrangement(red, green - 1, yellow, 'g')
    }
    if (yellow > 0 && last != 'y') {
        totalCount += totalArrangement(red, green, yellow - 1, 'y') 
    }

    return totalCount;

}