/**
    We have a number of bunnies and each bunny has two big floppy ears.
    We want to compute the total number of ears across all the bunnies recursively
 */

    function bunnyEars(bunnies) {
        if (bunnies === 0) {
            return 0;
        } else {
            return 2 + bunnyEars(bunnies - 1);
        }
    }

    console.log(bunnyEars(0)); // 0
    console.log(bunnyEars(1)); // 2
    console.log(bunnyEars(10)); // 20
    
