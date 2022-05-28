$( document ).ready(function() {
    $("#pizzacat").hide();
});

function randomItem(){
    var myArray = [
        "Szakszuka!",
        "Penne Arrabbiata!",
        "Spaghetti Bolognese!",
        "Kasza pęczak z indykiem!",
        "Tilapia zapiekana z parmezanem!",
        "Gnocchi z kurczakiem w sosie pieczarkowym!",
        "Burrito z czarną fasolą!",
        "Zupka chińska!",
        "Smażony ryż po tajsku!",
        "Smażony makaron z kalafiorem i czosnkiem!",
        "Katsu curry!",
        "Wołowina z brokułami i sezamem!",
        "Smażone krewetki!",
        "Zapiekanka pasterska!",
        "Wolno pieczone udka z sosem barbecue!",
        "Pizza!",
      ];
      
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

    document.getElementById("output").innerHTML = randomItem;

    if (randomItem == "Pizza!"){
        $("#pizzacat").show()
    }
    else{
        $("#pizzacat").hide()
    }
}
