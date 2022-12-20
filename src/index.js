import _ from 'lodash';
import './style.css';
import { createElement, goalArray } from './app';


function createHeader(){
    const header = createElement("header");
    document.body.appendChild(header);
    const nav = createElement("ul", "nav");
    header.appendChild(nav);

    const tabAr = ["ROM", "Strength", "Scar/Edema/Pain", "Pre-Hab/Compliance"];
    for(let i=0; i < tabAr.length; i++){
        let tabLi = createElement("li");
        let tab = createElement("a", "tab", `${tabAr[i]}`);
        nav.appendChild(tabLi);
        tabLi.appendChild(tab);

        tab.addEventListener("click", function(){
            if(tab.innerText == "ROM") {
                displayGoalCards(goalArray, "ROM"); 
            }
            else if(tab.innerText == "Strength") {
                displayGoalCards(goalArray, "Strength");
            }
            else if(tab.innerText == "Scar/Edema/Pain"){
                displayGoalCards(goalArray, "Scar")
                displayGoalCardsNoClear(goalArray, "Edema")
                displayGoalCardsNoClear(goalArray, "Pain");

            }
            else if(tab.innerText == "Pre-Hab/Compliance"){
                displayGoalCards(goalArray, "Prehab");
                displayGoalCardsNoClear(goalArray, "Compliance");
            }
        })
    }
}

//Card container
let goalSection = createElement("section", "goal-section");

//function to render exercise cards
function displayGoalCards(array, cat){
    goalSection.innerHTML = "";
        array.forEach(function(item){
            if(item.category == cat){
            document.body.appendChild(goalSection);
            goalSection.appendChild(item.card);
            item.card.appendChild(item.headerContain);
            item.card.appendChild(item.goalContain);
            item.headerContain.appendChild(item.title);
            item.headerContain.appendChild(item.btnContain);
            item.btnContain.appendChild(item.lRBtn);
            item.btnContain.appendChild(item.painBtn);
            item.btnContain.appendChild(item.copyBtn);
            item.goalContain.appendChild(item.goal);
            }
        })
}

//function to render exercise cards without clearing innerHTMl
function displayGoalCardsNoClear(array, cat){
        array.forEach(function(item){
            if(item.category == cat){
            document.body.appendChild(goalSection);
            goalSection.appendChild(item.card);
            item.card.appendChild(item.headerContain);
            item.card.appendChild(item.goalContain);
            item.headerContain.appendChild(item.title);
            item.headerContain.appendChild(item.btnContain);
            item.btnContain.appendChild(item.lRBtn);
            item.btnContain.appendChild(item.painBtn);
            item.btnContain.appendChild(item.copyBtn);
            item.goalContain.appendChild(item.goal);
            }
        })
}

function copy (){
    for (let i = 0; i < goalArray.length; i++){
        let btn = goalArray[i].copyBtn;
        btn.addEventListener("click", function(){
            let input = goalArray[i].goal.innerText;
            navigator.clipboard.writeText(input);
            document.querySelectorAll(".card").forEach((item) =>{
                item.classList.remove("selected");
            })
            goalArray[i].card.classList.add("selected");
        })
    }
    }
copy();

console.log(document.querySelectorAll(".card"))

function hidePain(){
    for (let i = 0; i < goalArray.length; i++){
        let btn = goalArray[i].painBtn;
        btn.addEventListener("click", function(){
            document.querySelectorAll(".pain").forEach((item) =>{
            item.classList.toggle("hide")
        });
        document.querySelectorAll(".card").forEach((item) =>{
            item.classList.remove("selected");
        })

        })
    }
}
hidePain();

function leftVsRight(){
    let num = 0;
for (let i = 0; i < goalArray.length; i++){
    let btn = goalArray[i].lRBtn;
    btn.addEventListener("click", function(){
        if(num == 0){
            num = num + 1;
            document.querySelectorAll(".lr-button").forEach((item) =>{
                item.innerHTML = "Right";
                document.querySelectorAll(".side").forEach((item) => {
                    item.innerHTML = "right";
                })
                document.querySelectorAll(".card").forEach((item) =>{
                    item.classList.remove("selected");
                })
        })
        }
        else if (num == 1){
           num = num - 1;
           document.querySelectorAll(".lr-button").forEach((item) =>{
            item.innerHTML = "Left";
            document.querySelectorAll(".side").forEach((item) => {
                item.innerHTML = "left";
            })
            document.querySelectorAll(".card").forEach((item) =>{
                item.classList.remove("selected");
            })
        })
        }
        
        
    });
    }

}

leftVsRight();

/* output */
createHeader();

