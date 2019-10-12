let valueCollector = 0;
let totalValue = 0;
let wins = 0;
let losses = 0;


// startGame();

function startGame() {
    let crystal1 = Math.floor(Math.random() * 11) + 1;
    let crystal2 = Math.floor(Math.random() * 11) + 1;
    let crystal3 = Math.floor(Math.random() * 11) + 1;
    let crystal4 = Math.floor(Math.random() * 11) + 1;
    let crystalTotalValue = Math.floor(Math.random() * 120) + 18;
    totalValue = crystalTotalValue;
    valueCollector = 0;
    $("#crystalsCollected").text(valueCollector);

    $("#crystal-1").attr("data-value", crystal1);
    $("#crystal-2").attr("data-value", crystal2);
    $("#crystal-3").attr("data-value", crystal3);
    $("#crystal-4").attr("data-value", crystal4);
    $("#totalValue").text(crystalTotalValue);

    console.log(crystal1, crystal2, crystal3, crystal4);

}

startGame();

function checkTotal() {
    $("#crystalsCollected").text(valueCollector);
    if (valueCollector === totalValue) {
        wins++;
        $("#wins").text(wins);
        startGame();
    } 

    else if (valueCollector > totalValue) {
        losses++;
        $("#losses").text(losses);
        startGame();
    } 
}

$("#crystal-1").on("click", function(){
    let value = $(this).attr("data-value");
    valueCollector += parseInt(value); 
    console.log(valueCollector);
checkTotal();
});

$("#crystal-2").on("click", function(){
    let value = $(this).attr("data-value");
    valueCollector += parseInt(value);
    console.log(valueCollector);
checkTotal();
});

$("#crystal-3").on("click", function(){
    let value = $(this).attr("data-value");
    valueCollector += parseInt(value);
    console.log(valueCollector);
checkTotal();
});

$("#crystal-4").on("click", function(){
    let value = $(this).attr("data-value");
    valueCollector += parseInt(value);
    console.log(valueCollector);
checkTotal();
});