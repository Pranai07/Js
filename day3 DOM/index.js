// Create a list of items(ul) using createElement and appendChild
var h3=document.createElement("h3");
h3.innerText="Task 1";

document.body.appendChild(h3);

var list=document.createElement("ul");

var item1=document.createElement("li");
item1.innerText="About";

var item2=document.createElement("li");
item2.innerText="Contact";

var item3=document.createElement("li");
item3.innerText="Home";

var item4=document.createElement("li");
item4.innerText="FAQs";

var item5=document.createElement("li");
item5.innerText="Blog";

list.append(item1,item2,item3,item4,item5);

document.body.appendChild(list);

var hr=document.createElement("hr");
document.body.appendChild(hr);

//Create a paragraph inside a div and append it to the body

var h3=document.createElement("h3");
h3.innerText="Task 2";

document.body.appendChild(h3);

var div=document.createElement("div");

var para=document.createElement("p");
para.innerText="lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";

div.appendChild(para);

document.body.appendChild(div);

var hr=document.createElement("hr");
document.body.appendChild(hr);

//Build a nested structure and append to the body

var h3=document.createElement("h3");
h3.innerText="Task 3";

document.body.appendChild(h3);

var div=document.createElement("div");

var h1=document.createElement("h1");
h1.innerText="Building a nested structure";

var p=document.createElement("p");
p.innerText="lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";

div.append(h1,p);

document.body.appendChild(div);

var hr=document.createElement("hr");
document.body.appendChild(hr);

//Genearte a table row and append to body

var h3=document.createElement("h3");
h3.innerText="Task 4";

document.body.appendChild(h3);

var table=document.createElement("table");

var tr=document.createElement("tr");

var td1=document.createElement("td");
td1.innerText="Cell 1";

var td2=document.createElement("td");
td2.innerText="Cell 2";

var td3=document.createElement("td");
td3.innerText="Cell 3";

tr.append(td1,td2,td3);

table.appendChild(tr);

document.body.appendChild(table);

var hr=document.createElement("hr");
document.body.appendChild(hr);

//Add multiple buttons and append to body

var h3=document.createElement("h3");
h3.innerText="Task 5";

document.body.appendChild(h3);

var div=document.createElement("div");


var button1=document.createElement("button");
button1.innerText="Button 1";
button1.onclick=function(){
    alert("Button 1 clicked");
}
button1.style.background="red";
button1.style.color="white";
button1.style.padding="5px";
button1.style.margin="5px";

var button2=document.createElement("button");
button2.innerText="Button 2";
button2.onclick=function(){
    alert("Button 2 clicked");
}   
button2.style.background="blue";
button2.style.color="white";
button2.style.padding="5px";
button2.style.margin="5px";

var button3=document.createElement("button");
button3.innerText="Button 3";
button3.onclick=function(){
    alert("Button 3 clicked");
}
button3.style.background="green";
button3.style.color="white";
button3.style.padding="5px";
button3.style.margin="5px";

div.append(button1,button2,button3);
div.style.display="flex";

document.body.appendChild(div);

