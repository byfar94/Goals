import _ from 'lodash';
import './style.css';
import { createElement, goalArray } from './app';


function createHeader(){
    const header = createElement("header");
    document.body.appendChild(header);
    const nav = createElement("ul", "nav");
    header.appendChild(nav);

    const tabAr = ["ROM", "Strength", "Scar/Edema"];
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
            else if(tab.innerText == "Scar/Edema"){
                goalSection.innerHTML = "";
            }
        })
    }
}

//Card container
let goalSection = createElement("section", "goal-section");

//function to render exercise cards
export function displayGoalCards(array, cat){
    goalSection.innerHTML = "";
        array.forEach(function(item){
            if(item.category == cat){
            document.body.appendChild(goalSection);
            goalSection.appendChild(item.card);
            item.card.appendChild(item.headerContain);
            item.card.appendChild(item.goalContain);
            item.headerContain.appendChild(item.title);
            item.headerContain.appendChild(item.btnContain);
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

        })
    }
    }
copy();

/* output */
createHeader();

