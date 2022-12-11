//main array that holds object (Goals)
export let goalArray = [];

console.log(goalArray);

//array of verbage
let verbArray = ["to benefit the activity of", 
"to assist in independently", 
"to promote the activity of"];


//acitivity Arrays
let graspActivities = ["carrying a shopping bag"];

let keyPinchActivities = ["using a key"];

let tripodPinchActivities = ["writing", "manipulating utensils"];

let thumbAbAdActivities = ["using a smart phone"];
/*
let wristActivities = [];

let supProActivities = []; */

//generate a random verbage from verb array 
function randGen(array){
    let num = Math.floor(Math.random()*array.length);
    return array[num];
}


//variable to store pain info
const painInput = "with less than x/10 pain (VAS)";

//exercise card factory function
function createGoal(title, goal, category){
    return{
        title,
        goal,
        category,
        card: createElement("div", "card"),
    }
};

//function to create elements 
export function createElement(el, cls, inText){
    let element = document.createElement(el);
    if (cls != undefined){
        element.classList.add(cls);
    }
    if (inText != undefined){
        element.innerText = inText;
    }
    return element;
};

//push to array function
function add(name){
    goalArray.push(name);
};


// <---------------library of Goals------------------->

//ROM

let d1Flex = createGoal("D1 flexion", `Patient will increase ROM of D1 **joint** flexion by **degrees** ${painInput} ${randGen(verbArray)} ${randGen(tripodPinchActivities)}`, "ROM");
add(d1Flex);
console.log(d1Flex);

let d1Ext = createGoal("D1 Extension", `Patient will increase ROM of D1 **joint** extension by **degrees** ${painInput} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM");
add(d1Ext);

let d1AdAb = createGoal("D1 Adduction/Abduction", `Patient will increase ROM of D1 CMC **Adduction/Abduction** by **degrees** ${painInput} ${randGen(verbArray)} ${randGen(thumbAbAdActivities)}`, "ROM");
add(d1AdAb);

let d2Flex = createGoal("D2 flexion", `Patient will increase ROM of D2 **joint** flexion by **degrees** ${painInput} ${randGen(verbArray)} ${randGen(tripodPinchActivities)}`, "ROM");
add(d2Flex);

let d3Flex = createGoal("D3 flexion", `Patient will increase ROM of D3 **joint** flexion by **degrees** ${painInput} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM")
add(d3Flex);

let d4Flex = createGoal("D4 flexion", `Patient will increase ROM of D4 **joint** flexion by **degrees** ${painInput} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM")
add(d4Flex);

let d5Flex = createGoal("D5 flexion", `Patient will increase ROM of D5 **joint** flexion by **degrees** ${painInput} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM")
add(d5Flex);

let d2D5Ext = createGoal("D2,D3,D4,D5 Extension", `Patient will increase ROM of **digit** **joint** extension by **degrees** ${painInput} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM");
add(d2D5Ext);

let DPC = createGoal("Distal Palmar Crease (DPC)", `Patient will decrease distance from **D"X"** to the DPC to **degrees** ${painInput} to promote the use of a composite fist while ${randGen(graspActivities)}`)
add(DPC);

//Strength