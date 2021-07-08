var addButtonEle = document.getElementById("add-btn");
addButtonEle.setAttribute("onclick", "addToList()");


addButtonEle.style.width = "100%";

function addToList(){

    //grab user input strings
    var destinationValue = document.getElementById("destination-input").value;
    var locationValue = document.getElementById("location-input").value;
    var imgValue = document.getElementById("image-input").value;
    var descriptionValue = document.getElementById("description-input").value;    

    //create necessary elements for new card item
    var newCardEle = document.createElement("div");
    newCardEle.setAttribute("class","card");
    newCardEle.setAttribute("style", "width: 18rem;");

    var idString = destinationValue + locationValue + imgValue;
    newCardEle.setAttribute("id", idString );
  
    var newCardImg = document.createElement("img");
    newCardImg.setAttribute("class", "card-img-top");
    newCardImg.setAttribute("src", imgValue);
    newCardImg.setAttribute("alt", "Card image cap");
    

    var newDivCardEle = document.createElement("div");
    newDivCardEle.setAttribute("class", "card-body");

    var newH5Ele = document.createElement("h5");
    newH5Ele.setAttribute("class", "card-title");
    newH5Ele.innerHTML = destinationValue;
   
    var newParagraphEle = document.createElement("p");
    newParagraphEle.setAttribute("class", "card-text");
    newParagraphEle.innerHTML = locationValue;

    var newH6Ele = document.createElement("h6");
    newH6Ele.setAttribute("class", "card-title");
    newH6Ele.innerHTML = descriptionValue;


    //still creating card elements, but these buttons will require action listeners

    var deleteButtonEle = document.createElement("button");
    deleteButtonEle.setAttribute("class","btn btn-danger" );
    deleteButtonEle.innerHTML = "Remove";
    deleteButtonEle.addEventListener("click", function remove(){
        newCardEle.style.display = "none";
    });


    var editButtonEle = document.createElement("button");
    editButtonEle.setAttribute("class", " btn btn-warning");
    editButtonEle.style.marginRight = "80px";
    editButtonEle.innerHTML = "Edit";

    //edit function will change the values to the new fields on the card div that it is contained in.
  
    editButtonEle.addEventListener("click", function edit(){
        newH5Ele.innerHTML = prompt("Please enter a new name");
        newParagraphEle.innerHTML = prompt("Please enter a new Location");
        newCardImg.setAttribute("src", prompt("Please enter a new image URL"));
    })


    //append the new elements into a suitable card format
  
    document.getElementById("card-holder").appendChild(newCardEle);
    newCardEle.appendChild(newCardImg);
    newDivCardEle.appendChild(newH5Ele);
    newCardEle.appendChild(newDivCardEle);
    newDivCardEle.appendChild(newParagraphEle);
    newDivCardEle.appendChild(newH6Ele);
    newDivCardEle.appendChild(editButtonEle);
    newDivCardEle.appendChild(deleteButtonEle);

    //clear out old text from the form before the user can click again
  
    document.getElementById("destination-input").value = "";
    document.getElementById("location-input").value = "";
    document.getElementById("image-input").value = "";
    document.getElementById("description-input").value = "";    

}