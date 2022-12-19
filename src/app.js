import { create } from "lodash";

//main array that holds object (Goals)
export let goalArray = [];

console.log(goalArray);

//array of verbage
let verbArray = ["to benefit the activity of", 
"to assist in independently", 
"to promote the activity of"];


//acitivity Arrays
let graspActivities = ["carrying a shopping bag", "opening a drawer", "holding a steering wheel"];

let digitExtensionActivities = ["sliding their hand into pockets"]

let keyPinchActivities = ["using a key", "using a charging wire"];

let twoPointPinchActivities = ["using a zipper", "grasping a coin"];

let tripodPinchActivities = ["writing", "manipulating utensils", "opening a jar", "grasping a coin"];

let thumbAbAdActivities = ["using a smart phone"];

let wristActivities = ["writing", "typing"];

let supProActivities = ["turning a door knob", "turning pages of a book"];

let painActivities = ["upper body dressing"]

//generate a random verbage from verb array 
function randGen(array){
    let num = Math.floor(Math.random()*array.length);
    return array[num];
}


//variable to store pain info
let painInput = "with less than x/10 pain (VAS)";


//Goal card factory function
function createGoal(title, goal, category){
    return{
        title,
        goal,
        category,
        card: createElement("div", "card"),
        headerContain: createElement("div", "header-contain"),
        title: createElement("h2", "title", title),
        btnContain: createElement("div", "btn-contain"),
        painBtn: createElement("button", "pain-btn", "Pain (+/-)"),
        copyBtn: createElement("button", "copy-btn", "Copy"),
        goalContain: createElement("div", "goal-contain"),
        goal: createElement("p", "goal", goal)
    }
};

function painOut(){
    let painOut = createElement("span", "pain", "<span class=pain> with less than x/10 pain (VAS) </span>")
    return painOut.innerHTML;
};

//function to create elements 
export function createElement(el, cls, inText){
    let element = document.createElement(el);
    if (cls != undefined){
        element.classList.add(cls);
    }
    if (inText != undefined){
        element.innerHTML = inText;
    }
    return element;
};

//push to array function
function add(name){
    goalArray.push(name);
};

// <---------------library of Goals------------------->

//ROM

let d1Flex = createGoal("D1 flexion", `Progress ROM of D1 **joint** flexion by **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(tripodPinchActivities)}`, "ROM");
add(d1Flex);
console.log(d1Flex);

let d1Ext = createGoal("D1 Extension", `Progress ROM of D1 **joint** extension by **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM");
add(d1Ext);

let d1AdAb = createGoal("D1 Adduction/Abduction", `Progress ROM of D1 CMC **Adduction/Abduction** by **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(thumbAbAdActivities)}`, "ROM");
add(d1AdAb);

let d2Flex = createGoal("D2 flexion", `Progress ROM of D2 **joint** flexion by **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(tripodPinchActivities)}`, "ROM");
add(d2Flex);

let d3Flex = createGoal("D3 flexion", `Progress ROM of D3 **joint** flexion by **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM");
add(d3Flex);

let d4Flex = createGoal("D4 flexion", `Progress ROM of D4 **joint** flexion by **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM");
add(d4Flex);

let d5Flex = createGoal("D5 flexion", `Progress ROM of D5 **joint** flexion by **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM");
add(d5Flex);

let d2D5Ext = createGoal("D2,D3,D4,D5 Extension", `Progress ROM of **digit** **joint** extension by **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(digitExtensionActivities)}`, "ROM");
add(d2D5Ext);

let DPC = createGoal("Distal Palmar Crease (DPC)", `Patient will decrease distance from **D"X"** to the DPC to **degrees** ${painOut()} to promote the use of a composite fist while ${randGen(graspActivities)}`, "ROM")
add(DPC);

let opposition = createGoal("Opposition", `Patient will be able oppose the thumb **to specificied area** of the 5th digit ${painOut()} ${randGen(verbArray)} ${randGen(keyPinchActivities)}`, "ROM" );
add(opposition);

let wristFlexion = createGoal("Wrist Flexion", `Progress the ROM of wrist flexion to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(wristActivities)}`, "ROM");
add(wristFlexion);

let wristExtension = createGoal("Wrist Extension", `Progress ROM of wrist extension to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(wristActivities)}`, "ROM" );
add(wristExtension);

let supinationPronation = createGoal("Pronation / Supination", `Progress ROM of **supination/Pronation** to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(supProActivities)}`, "ROM");
add(supinationPronation);



//Strength

let gripStrength = createGoal("Grip Strength", `Progress grip strength to **lbs force** ${painOut()} ${randGen(verbArray)} ${randGen(graspActivities)}`, "Strength");
add(gripStrength);

let latPinchStrength = createGoal("Lateral Pinch Strength", `Progress lateral pinch strength to **lbs force** ${painOut()} ${randGen(verbArray)} ${randGen(keyPinchActivities)}`, "Strength");
add(latPinchStrength);

let twoPointPinchStrength = createGoal("Two Point Pinch Strength", `Progress two point pinch strength to **lbs force** ${painOut()} ${randGen(verbArray)} ${randGen(twoPointPinchActivities)}`, "Strength");
add(twoPointPinchStrength);

let shFlex = createGoal("Shoulder Flexion", `Patient will be able to perform AROM shoulder flexion against gravity to **degrees** to assist the activity of opening cabinets.`, "Strength");
add(shFlex);

//Pain
let GenPain = createGoal("Decrease Pain with Activity", `Decrease Pain to **x/10** (VAS) with ${painActivities}`, "Pain");
add(GenPain);

//Scar
let scarHealing = createGoal("Scar Healing General", " Improve scar healing to allow for better soft tissue extensibility", "Scar");
add(scarHealing);

//Edema


//compliance
let splintCompliance = createGoal("Compliance: Splint wearing", "Compliance with splint wearing as directed throughout the duration of the healing process", "Compliance");
add(splintCompliance);

let actResCompliance = createGoal("Compliance: Activity Restrictions & Ergonomics", "Compliance with activity restrictions and ergonomic practices throughout the duration of the healing process", "Compliance");
add(actResCompliance);

let jtProtectionCompliance = createGoal("Compliance: Joint Protection & Energy Conservation", `Compliance with joint protection and energy conservation techniques ${painOut()}`, "Compliance");
add(jtProtectionCompliance);

let aromHepPrehab = createGoal("Pre-Hab: AROM HEP", "Compliance with AROM HEP program to prevent ROM loss/ contracture", "Prehab");
add(aromHepPrehab);


