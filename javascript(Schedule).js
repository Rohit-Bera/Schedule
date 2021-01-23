//selectors
const input = document.querySelector("#input");
const button = document.querySelector("#subbutton");
const list = document.querySelector("#list");

//event-listner
button.addEventListener("click", enter);
list.addEventListener("click" , tickcross);


//functions
function enter(event)
{    
    //div
    const listdiv = document.createElement("div");
    listdiv.classList.add("list-div");
    //list
    const listitem = document.createElement("li");
    listitem.innerText=input.value;
    listitem.classList.add("list-item");
    listdiv.appendChild(listitem);

    // tick button
    const tick = document.createElement("button");
    tick.innerHTML='<i class="fas fa-check"></i>';
    tick.classList.add("list-tick");
    listdiv.appendChild(tick);

    // cross button
    const cross = document.createElement("button");
    cross.innerHTML='<i class="fas fa-times"></i>';
    cross.classList.add("list-cross");
    listdiv.appendChild(cross);

    list.appendChild(listdiv);
    
    input.value=""; //will always empty the input element.

}

function tickcross(e)
{
   const items = e.target;

   if(items.classList[0] === "list-cross"){
       const itemc = items.parentElement;
       itemc.classList.add("anime");
       itemc.addEventListener("transitionend",function(){
           itemc.remove();
       })
   }

   if(items.classList[0] === "list-tick"){
       const itemt = items.parentElement;

       itemt.classList.toggle("done");
   }

}


/*
<ul id="list"></ul> 
*/

