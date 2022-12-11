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
    }

}

//function to create and render exercise cards
function displayGoalCards(array){


        array.forEach(function(item){
            //card item creation
            let goalSection = createElement("section", "goal-section");
            let headerContain = createElement("div", "header-contain");
            let title = createElement("h2", "title", item.title);
            let btnContain = createElement("div", "btn-contain");
            let painBtn = createElement("button", "pain-btn", "Pain (+/-)");
            let copyBtn = createElement("button", "copy-btn", "Copy");
            let goalContain = createElement("div", "goal-contain");
            let goal = createElement("p", "goal", item.goal);
          

            //appending items to card
            document.body.appendChild(goalSection);
            goalSection.appendChild(item.card);
            item.card.appendChild(headerContain);
            item.card.appendChild(goalContain);
            headerContain.appendChild(title);
            headerContain.appendChild(btnContain);
            btnContain.appendChild(painBtn);
            btnContain.appendChild(copyBtn);
            goalContain.appendChild(goal);


            
            
        })

}




/* output */
createHeader();
displayGoalCards(goalArray);

