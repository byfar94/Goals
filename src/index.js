import _ from 'lodash';
import './style.css';
import { createElement, goalArray } from './app';

//function to create header
function createHeader(){
    const header = createElement("header");

    //nav
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

    //search
    document.body.appendChild(header);
    const searchContain = createElement("div", "search-contain");
    header.appendChild(searchContain);
    const search = createElement("input", "search");
    search.type = "search";
    search.id = "search"
    search.placeholder = "Search Goals"
    searchContain.appendChild(search)

};

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
            item.headerContain.appendChild(item.titleHead);
            item.headerContain.appendChild(item.btnContain);
            if (item.goal.innerHTML.includes("left" || "right")){
                item.btnContain.appendChild(item.lRBtn);
                }
            if (item.goal.innerHTML.includes("x/10 pain")){
                item.btnContain.appendChild(item.painBtn);
                }
            item.btnContain.appendChild(item.copyBtn);
            item.goalContain.appendChild(item.goal);
            }
        })
}

//function to render exercise cards without clearing innerHTMl first
function displayGoalCardsNoClear(array, cat){
        array.forEach(function(item){
            if(item.category == cat){
            document.body.appendChild(goalSection);
            goalSection.appendChild(item.card);
            item.card.appendChild(item.headerContain);
            item.card.appendChild(item.goalContain);
            item.headerContain.appendChild(item.titleHead);
            item.headerContain.appendChild(item.btnContain);
            if (item.goal.innerHTML.includes("left" || "right")){
                item.btnContain.appendChild(item.lRBtn);
                }
            if (item.goal.innerHTML.includes("x/10 pain")){
                item.btnContain.appendChild(item.painBtn);
                }
            item.btnContain.appendChild(item.copyBtn);
            item.goalContain.appendChild(item.goal);
            }
        })
}

//function to copy goal to clipboard (also adds class that will change backround color)
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

//function to toggle pain information (will toggle pain info and pain button text decoration based on css class)
function hidePain(){
    for (let i = 0; i < goalArray.length; i++){
        let btn = goalArray[i].painBtn;
        btn.addEventListener("click", function(){
            document.querySelectorAll(".pain").forEach((item) =>{
            item.classList.toggle("hide");

            document.querySelectorAll(".pain-btn").forEach((item) =>{
            item.classList.toggle("crossed");
            })
        });
        //removes background color
        document.querySelectorAll(".card").forEach((item) =>{
            item.classList.remove("selected");
        })

        })
    }
}
hidePain();

//function to toggle left vs right in goals
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
                //removes background color
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


const searchBar = document.querySelector("#search");

searchBar.addEventListener("input", () => {
    let value = searchBar.value.toLowerCase();
    goalArray.forEach(function(item){
    const visable = item.title.toLowerCase().includes(value);
    if (value == "" || value == " "){
        item.card.classList.remove("hide");
    }
    else if(!visable && value !=""){
        item.card.classList.add("hide");
    }
    else if(visable && value !="")
        item.card.classList.remove("hide");
    })
}   

    )