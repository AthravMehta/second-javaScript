const parent = document.querySelector(".parent");

const addChild = document.getElementById("add-child");
const removeChild = document.getElementById("remove-child");


addChild.addEventListener("click", () => {
    if(parent.childNodes.length > 1){
        return;
    }
    const child = document.createElement("div"); // created child element.
    child.classList.add("child"); // added child className in child element.
    child.textContent = "child"; // add text in child element.
    parent.appendChild(child);
})


removeChild.addEventListener("click", () => {
    const child = document.querySelector(".child");
    const child1 = document.getElementsByClassName("child");
    const child2 = document.getElementById("add-child");
    console.log(child)
    console.log(child1)
    console.log(child2)
    parent.removeChild(child);
})

const para = document.getElementsByTagName("p")[0];


function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    let k = 1;
    // creating all cells
    for (let i = 0; i < 3; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 4; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`${k++}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }
  