"use strict";
//Julia Tsuei

//You will create array of objects named inventory
//each product is an object with item and price 
//{item: "itemname": price: 10}

const inventory = [
//add objects here
{item: "Violin", price: 400}, //0
{item: "Guitar", price: 600}, //1
{item: "Viola", price: 700}, //2
{item: "Cello", price: 800}, //3
{item: "Piano", price: 1200} //4
];

//declare any global variables
let grandTotal = 0;


//display the inventory in a table on the webpage
let tableHTML = "<table>" +
"<tr>" +
"<th>Instrument</th>" +
"<th>Price</th>" +
"</tr>";

for(let i = 0; i < inventory.length; i++){
    tableHTML += "<tr><td>" + inventory[i].item +
    "</td><td>" + inventory[i].price + "</td></tr>";
}

tableHTML = tableHTML + "</table>";
    //OR tableHTML += "</table>";

document.getElementById("table").innerHTML = tableHTML;


//function to run when add is clicked
function addItem(){

    //get the item name from the textbox
    let itemInput = document.getElementById("itemInput").value;
    let qty = parseInt(document.getElementById("qty").value);

    //Call the findPrice function
    let itemPrice = findPrice(itemInput);

    //if textbox is empty, alert missing input
    if(itemInput == "" || qty == ""){
        alert("Missing Input");
    }

    //If the itemprice returned is -1 do a window.alert with the message "item not found"
    else if(itemPrice == -1){
        alert("Item not found");
    }

    //otherwise continue to process the order by getting the quantity from the textbox
    else{
        //Display the grandtotal on the page
        let itemTotal = qty * itemPrice;
        grandTotal += itemTotal;
        let due = document.getElementById("due").innerHTML = "$" + grandTotal;

        //Add to receipt in textarea
        
        if(qty == 1){
        document.getElementById("invoice").value += qty + " " + itemInput + " at " + itemPrice + " each = " + itemTotal + "\n";
        }
        else{
        document.getElementById("invoice").value += qty + " " + itemInput + "s at " + itemPrice + " each = " + itemTotal + "\n";
        }


        //Clear the textboxes
        document.getElementById("itemInput").value = "";
        document.getElementById("qty").value = "";
        
    }

}


//function to run when clear is clicked
function newOrder(){
    //clear the page
    document.getElementById("due").innerHTML = "$";
    document.getElementById("invoice").value = "";  
    document.getElementById("itemInput").value = ""; 
    document.getElementById("qty").value = ""; 
    //reset grand total
    grandTotal = 0;   
}


//this function searches for useritem in the inventory array
//it returns the price if found
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (let i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}
