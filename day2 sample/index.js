var header=document.createElement("header");

var img=document.createElement("img");
img.src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

var item=document.createElement("div");

var a1=document.createElement("a");
a1.innerText="About";
a1.href="#";

var a2=document.createElement("a");
a2.innerText="Contact";
a2.href="#";

var a3=document.createElement("a");
a3.innerText="Home";
a3.href="#";

item.append(a1,a2,a3);

header.append(img,item);

document.body.appendChild(header);