// Write a recursive function that prints the following organization chart. Your 
// output should be as shown below with proper indentation to show the hierarchy. 
// You may store the org chart in an object and send that as an input to your program.

let facebook = {
  "Zuckerberg": {
    "Schroepfer": {
      "Bosworth": {
        "Steve": {},
        "Kyle": {},
        "Andra": {}
      },
      "Zhao": {
        "Richie": {},
        "Sofia": {},
        "Jen": {}
      }
    },
    "Schrage": {
      "VanDyck": {
        "Sabrina": {},
        "Michelle": {},
        "Josh": {}
      },
      "Swain": {
        "Blanch": {},
        "Tom": {},
        "Joe": {}
      }
    },
    "Sandberg": {
      "Goler": {
        "Eddie": {},
        "Julie": {},
        "Annie": {}
      },
      "Hernandez": {
        "Rowi": {},
        "Inga": {},
        "Morgan": {}
      },
      "Moissinac": {
        "Amy": {},
        "Chuck": {},
        "Vinni": {}
      },
      "Kelley": {
        "Eric": {},
        "Ana": {},
        "Wes": {}
      }
    }
  }
}

let trav = function(org, lvl = 0){
  let tab = " ".repeat(lvl * 4)
  Object.keys(org).forEach(key => {
    console.log(tab + key);
    trav(org[key], lvl + 1)
  })
}

trav(facebook)