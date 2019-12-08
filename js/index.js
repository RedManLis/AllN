

function addErrorClass(elementId) {
  var element = document.getElementById(elementId)
  element.className = "error-input";
  
}

function addErrorClassToAllInputs() {
  addErrorClass("first-name");
  addErrorClass("last-name");
  addErrorClass("adress");
}

//addErrorClassToAllInputs();

var sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", addErrorClassToAllInputs);