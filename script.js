$(document).ready(onReady);
function onReady(){
    $('#red-btn').on('click', addRedBlock)
    $('#blue-btn').on('click', addBlueBlock)
    $('#green-btn').on('click', addGreenBlock)
    $('#yellow-btn').on('click', addYellowBlock)
    $('body').on('click', '.block', getRidOfBlock)
}
function addRedBlock(){
    $('#blocks').append($("<div class='block red-fill'></div>"));
    let redCount = $('#red-count').text()
    redCount++;
    $('#red-count').text(redCount);
}
function addBlueBlock(){
    $('#blocks').append($("<div class='block blue-fill'></div>"));
    let blueCount = $('#blue-count').text()
    blueCount++;
    $('#blue-count').text(blueCount);
}
function addGreenBlock(){
    $('#blocks').append($("<div class='block green-fill'></div>"));
    let greenCount = $('#green-count').text()
    greenCount++;
    $('#green-count').text(greenCount);
}
function addYellowBlock(){
    $('#blocks').append($("<div class='block yellow-fill'></div>"));
    let yellowCount = $('#yellow-count').text()
    yellowCount++;
    $('#yellow-count').text(yellowCount);
}
function getRidOfBlock (){
    $(this).remove();
}