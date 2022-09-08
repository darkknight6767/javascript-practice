let languages =["kotlin","java","ada","python","Ruby"];
let result=[];

let createListItem=(value)=>{
    let element="<li>"+value+"</li>";
    result.push(element);
};
//languages.forEach(createListItem);
createListItem("kotlin");
let html=result.join(" ");
document.getElementById("lang").innerHTML=html;

//caught error 
