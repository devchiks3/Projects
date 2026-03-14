const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
    "Elon Musk",
    "Larry Page",
    "Sergey Brin",
    "Jeff Bezos",
    "Mark Zuckerberg",
    "Larry Ellison",
    "Jensen Huang",
    "Bernard Arnault",
    "Rob Walton",
    "Warren Buffett"
];

const listItems = [];
let dragStartIndex;

createList();

function createList(){

    const randomList = [...richestPeople]
        .sort(() => Math.random() - 0.5);

    randomList.forEach((person,index)=>{

        const listItem = document.createElement("li");
        listItem.setAttribute("data-index", index);

        listItem.innerHTML = `
        <div class="draggable" draggable="true">
            <span class="number">${index+1}</span>
            <p class="person-name">${person}</p>
            <i class="fa-solid fa-grip-lines"></i>
        </div>
        `;

        listItems.push(listItem);
        draggable_list.appendChild(listItem);
    });

    addEventListener();
}

function dragStart(){
    dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragEnter(){
    this.classList.add("over");
}

function dragLeave(){
    this.classList.remove("over");
}

function dragOver(e){
    e.preventDefault();
}

function dragDrop(){
    const dragEndIndex = +this.getAttribute("data-index");

    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove("over");
}

function swapItems(fromIndex,toIndex){

    const firstItem = listItems[fromIndex].querySelector(".draggable");
    const secondItem = listItems[toIndex].querySelector(".draggable");

    listItems[fromIndex].append(secondItem);
    listItems[toIndex].append(firstItem);
}

function checkOrder(){

    listItems.forEach((listItem,index)=>{

        const personName = listItem.querySelector(".person-name").innerText;

        if(personName !== richestPeople[index]){
            listItem.classList.add("wrong");
        }else{
            listItem.classList.remove("wrong");
            listItem.classList.add("right");
        }

    });

}

function addEventListener(){

    const draggables = document.querySelectorAll(".draggable");
    const dragListItems = document.querySelectorAll(".draggable-list li");

    for(let draggable of draggables){
        draggable.addEventListener("dragstart", dragStart);
    }

    dragListItems.forEach(item=>{
        item.addEventListener("dragover", dragOver);
        item.addEventListener("drop", dragDrop);
        item.addEventListener("dragenter", dragEnter);
        item.addEventListener("dragleave", dragLeave);
    });
}

check.addEventListener("click", checkOrder);