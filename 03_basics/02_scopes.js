// var c = 300                      // var has  global scope that creates issue
let a = 300
if (true) {
    let a = 10
    const b = 20                                 // {   } block scope
    // console.log("INNER: ", a);

}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "aditya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "aditya"
    if (username === "aditya") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++ interesting ++++++++++++++++++++


console.log(addone(5));

function addone(num) {
    return num + 1
}

                                                              //addone is hoisted but addTwo is not so we can't use before initialization

addTwo(5)
const addTwo = function(num){
    return num + 2
}
