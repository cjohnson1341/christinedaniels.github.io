function addSentence() {
    var boxElement = document.getElementById("box");
    var separate = boxElement.value.split(" ");
    var together = separate.join(" 👏 ");
    document.getElementById("result").innerHTML = together + " 👏";
    boxElement.value = "";
}
