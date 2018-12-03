// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Test.assertDeepEquals(towerBuilder(1), ["*"]);
// Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
// Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);


function towerBuilder(nFloors) {
    let i = 0;
    while (i < nFloors) {
        console.log(` ` * (nFloors - i - 1) + `*` * (2 * i + 1));
        i++;
    }
}

towerBuilder(3);