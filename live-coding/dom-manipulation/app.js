var button = document.getElementById("add-paragraph");
button.addEventListener("click", function() {
    var phrases = ["Phrase 1", "Phrase 2", "Phrase 3"];
    var rand = Math.floor(Math.random() * 3);
    document.getElementById("new-paragraphs").innerHTML = "<p>" + phrases[rand] + "</p>"
});

document.getElementById("new").textContent = "<p class='text-right'>This is some text</p>"

//    // Create a new, empty element
//    var newPara = document.createElement("p");
//    
//    // Create a new text node
//    var text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque obcaecati explicabo non totam perferendis nam, in, vel sit cumque illo, pariatur aliquam earum quam. Nulla consectetur similique laboriosam, pariatur ratione.");
//    
//    // Append the text node to the new empty element
//    newPara.appendChild(text);
//    
//    // Appends the new element to the parent container
//    document.getElementById("new-paragraphs").appendChild(newPara);
//});


















//long broken down into bite sized peices (better)

//var addSubmit = document.getElementById("submit-add");
//
//addSubmit.addEventListener("click", function(){
//    var value1 = document.getElementById("add-input-1").value;
//    var value2 = document.getElementById("add-input-2").value;
//    
//    value1 = parseInt(value1);
//    value2 = parseInt(value2);
//    
//    var total = value1 + value2;
//    
//    var output = document.getElementById("add-output");
//    
//    output.textContent = total;
//})
//
//
////less lines. Annoying, but fun
//
//document.getElementById("submit-add").addEventListener("click", function(){
//    document.getElementById("add-output").textContent = parseInt(document.getElementById("add-input-1").value) + parseInt(document.getElementById("add-input-2").value);
//})