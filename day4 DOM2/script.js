// Task-1

var task1=document.createElement('h1');
task1.innerText='Task-1';
document.body.appendChild(task1);

function show(){
    var paragraph=document.getElementById('para');

    paragraph.style.display='block';
}
//Task-2
function remove(){
    var paragraph=document.getElementById('paragraph');
    paragraph.remove();
}
//Task-4
function change(){
    var button=document.getElementById('change');
    button.innerText="changed me";
}
//Task-5
function addItem() {
    const input = document.getElementById('itemInput'); // Get the input field
    const ul = document.getElementById('unorderedList');

    if (input.value.trim() === "") {
      alert("Please enter some text for the item!");
      return;
    }

    const li = document.createElement('li');
    li.innerText = input.value; //Set the text from the user input
    ul.appendChild(li);

    input.value = ""; // Clear the input field
  }

  function removeItem() {
    const ul = document.getElementById('unorderedList');
    if (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    } else {
      alert("No items left to remove!");
    }
  }