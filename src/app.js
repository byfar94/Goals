
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

let keyPinchActivities = ["using a key", "using a zipper"];

let twoPointPinchActivities = ["using a zipper", "grasping a coin"];

let tripodPinchActivities = ["writing", "manipulating utensils", "opening a jar", "grasping a coin"];

let thumbAbAdActivities = ["using a smart phone"];

let wristActivities = ["writing", "typing"];

let supProActivities = ["turning a door knob", "turning pages of a book"];

let elbowFlexActivities = ["eating", "brushing their teeth"];

let elbowExtActivities = ["reaching for items in cabinets"];

let painActivities = ["upper body dressing"];

let shFlexAbActivities = ["opening cabinets"];

let shInExActivities = ["showering", "brushing hair"];

//generate a random verbage from verb array 
function randGen(array){
    let num = Math.floor(Math.random()*array.length);
    return array[num];
}

//Goal card factory function
function createGoal(title, goal, category){
    return{
        title,
        goal,
        category,
        card: createElement("div", "card"),
        headerContain: createElement("div", "header-contain"),
        titleHead: createElement("h2", "title", title),
        btnContain: createElement("div", "btn-contain"),
        lRBtn: createElement("button", "lr-button", "Left"),
        painBtn: createElement("button", "pain-btn", "Pain"),
        copyBtn: createElement("button", "copy-btn", "Copy"),
        goalContain: createElement("div", "goal-contain"),
        goal: createElement("p", "goal", goal),
    }
};

function painOut(){
    let painOut = createElement("span", "pain", "<span class=pain> with less than **x**/10 pain (VAS) </span>")
    return painOut.innerHTML;
};


//creates left or right element
function sideOut(){
    let side = createElement("span", "side", "<span class=side> left </span>")
    return side.innerHTML;
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

let d1Flex = createGoal("D1 MCP/IP flexion", `Progress ROM of ${sideOut()} D1 **joint** flexion to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(tripodPinchActivities)}`, "ROM");
add(d1Flex);
console.log(d1Flex);

let d1Ext = createGoal("D1 MCP/IP Extension", `Progress ROM of ${sideOut()} D1 **joint** extension to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(digitExtensionActivities)}`, "ROM");
add(d1Ext);

let d1AdAb = createGoal("D1 CMC Adduction/Abduction", `Progress ROM of ${sideOut()} D1 CMC **Adduction/Abduction** to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(thumbAbAdActivities)}`, "ROM");
add(d1AdAb);

let d2Flex = createGoal("D2 MCP/IP flexion", `Progress ROM of ${sideOut()} D2 **joint** flexion to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(tripodPinchActivities)}`, "ROM");
add(d2Flex);

let d3Flex = createGoal("D3 MCP/IP flexion", `Progress ROM of ${sideOut()} D3 **joint** flexion to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM");
add(d3Flex);

let d4Flex = createGoal("D4 MCP/IP flexion", `Progress ROM of ${sideOut()} D4 **joint** flexion to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM");
add(d4Flex);

let d5Flex = createGoal("D5 MCP/IP flexion", `Progress ROM of ${sideOut()} D5 **joint** flexion to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(graspActivities)}`, "ROM");
add(d5Flex);

let d2D5Ext = createGoal("D2 - D5 MCP/IP Extension", `Progress ROM of ${sideOut()} **digit** **joint** extension to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(digitExtensionActivities)}`, "ROM");
add(d2D5Ext);

let DPC = createGoal("Distal Palmar Crease (DPC)", `Patient will decrease distance from ${sideOut()} **D"X"** to the DPC to **degrees** ${painOut()} to promote the use of a composite fist while ${randGen(graspActivities)}`, "ROM")
add(DPC);

let opposition = createGoal("Opposition", `Patient will be able oppose the ${sideOut()} thumb **to specificied area** of the 5th digit ${painOut()} ${randGen(verbArray)} ${randGen(keyPinchActivities)}`, "ROM" );
add(opposition);

let wristFlexion = createGoal("Wrist Flexion", `Progress the ROM of ${sideOut()} wrist flexion to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(wristActivities)}`, "ROM");
add(wristFlexion);

let wristExtension = createGoal("Wrist Extension", `Progress ROM of ${sideOut()} wrist extension to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(wristActivities)}`, "ROM" );
add(wristExtension);

let supinationPronation = createGoal("Pronation / Supination", `Progress ROM of ${sideOut()} wrist **supination/Pronation** to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(supProActivities)}`, "ROM");
add(supinationPronation);

let elbowFlex = createGoal("Elbow Flexion", `Progress ROM of ${sideOut()} elbow flexion to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(elbowFlexActivities)}`, "ROM" )
add(elbowFlex);

let elbowExt = createGoal("Elbow Extension", `Progress ROM of ${sideOut()} elbow Extension to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(elbowExtActivities)}`, "ROM" )
add(elbowFlex);
add(elbowExt);

let shFlexAb = createGoal("Shoulder Flexion/Abduction", `Progress ROM of ${sideOut()} shoulder **flexion/Abduction** to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(shFlexAbActivities)}`, "ROM");
add(shFlexAb);

let shInEx = createGoal("Shoulder Internal/External Rotation", `Progress ROM of ${sideOut()} shoulder **internal/external** rotation to **degrees** ${painOut()} ${randGen(verbArray)} ${randGen(shInExActivities)}`, "ROM");
add(shInEx);

//Strength

let gripStrength = createGoal("Grip Strength", `Progress ${sideOut()} grip strength to **lbs force** ${painOut()} ${randGen(verbArray)} ${randGen(graspActivities)}`, "Strength");
add(gripStrength);

let latPinchStrength = createGoal("Lateral Pinch Strength", `Progress ${sideOut()} lateral pinch strength to **lbs force** ${painOut()} ${randGen(verbArray)} ${randGen(keyPinchActivities)}`, "Strength");
add(latPinchStrength);

let twoPointPinchStrength = createGoal("Two Point Pinch Strength", `Progress ${sideOut()} two point pinch strength to **lbs force** ${painOut()} ${randGen(verbArray)} ${randGen(twoPointPinchActivities)}`, "Strength");
add(twoPointPinchStrength);

let threePointPinchStrength = createGoal("Three Point Pinch Strength", `Progress ${sideOut()} two point pinch strength to **lbs force** ${painOut()} ${randGen(verbArray)} ${randGen(twoPointPinchActivities)}`, "Strength");
add(threePointPinchStrength);

let wristFlexStr = createGoal("Wrist Flexion MMT", `Progress ${sideOut()} wrist flexors muscle strength to a grade of **0-5** ${painOut()} ${randGen(verbArray)} ${randGen(wristActivities)}`, "Strength");
add(wristFlexStr);

let wristExtStr = createGoal("Wrist Extension MMT", `Progress ${sideOut()} wrist extension muscle strength to a grade of **0-5** ${painOut()} ${randGen(verbArray)} ${randGen(wristActivities)}`, "Strength");
add(wristExtStr);

let elbowFlexStr = createGoal("Elbow Flexion MMT", `Progress ${sideOut()} elbow flexors muscle strength to a grade of **0-5** ${painOut()} ${randGen(verbArray)} ${randGen(elbowFlexActivities)}`, "Strength");
add(elbowFlexStr);

let elbowExtStr = createGoal("Elbow Flexion MMT", `Progress ${sideOut()} elbow extensors muscle strength to a grade of **0-5** ${painOut()} ${randGen(verbArray)} ${randGen(elbowExtActivities)}`, "Strength");
add(elbowExtStr);

let shFlexAbStr = createGoal("Shoulder Flexion/Abduction MMT", `Progress ${sideOut()} shoulder **flexors/abductors** muscle strength to a grade of **0-5** ${painOut()} ${randGen(verbArray)} ${randGen(shFlexAbActivities)}`, "Strength");
add(shFlexAbStr);


//Pain
let GenPain = createGoal("Decrease Pain with Activity", `Decrease Pain to **x/10** (VAS) with ${painActivities}`, "Pain");
add(GenPain);

//Scar
let scarHealing = createGoal("Scar Healing General", "Improve scar healing to allow for better soft tissue extensibility", "Scar");
add(scarHealing);

//Edema
let circumfernceEdemaPalm = createGoal("Edema: Circumfernce Hand", `Reduce edema of ${sideOut()} hand to **measurement** cm (circumferential measurment of palm)`, "Edema")
add(circumfernceEdemaPalm);

let circumfernceEdemaWrist = createGoal("Edema: Circumfernce Wrist", `Reduce edema of ${sideOut()} wrist to **measurement** cm (circumferential measurment of wrist)`, "Edema")
add(circumfernceEdemaWrist);

let figureEight = createGoal("Edema: Figure-of-Eight", `Reduce edema of ${sideOut()} hand to **measurement** cm figure-of-eight measurement `, "Edema");
add(figureEight);



//compliance
let splintCompliance = createGoal("Compliance: Splint wearing", "Compliance with splint wearing as directed throughout the duration of the healing process", "Compliance");
add(splintCompliance);

let actResCompliance = createGoal("Compliance: Activity Restrictions & Ergonomics", "Compliance with activity restrictions and ergonomic practices throughout the duration of the healing process", "Compliance");
add(actResCompliance);

let jtProtectionCompliance = createGoal("Compliance: Joint Protection & Energy Conservation", `Compliance with joint protection and energy conservation techniques ${painOut()}`, "Compliance");
add(jtProtectionCompliance);

let aromHepPrehab = createGoal("Pre-Hab: AROM HEP", "Compliance with AROM HEP program to prevent ROM loss/ contracture", "Prehab");
add(aromHepPrehab);

/*
console.log(d1Flex.goal)
console.log(d1Flex.goal.innerHTML)
console.log(d1Flex.goal.innerHTML.includes("x/10 pain"));*/