let button=document.getElementById("button");
var numberInshape=1;
var oldValue=0;
button.onclick=()=>{
    let n=document.getElementById("number").value ;
    let c=document.getElementById("col").value ;
    const circle=document.getElementById("circle");
    const rectangle=document.getElementById("rect");
    const square=document.getElementById("square");
    const box=document.getElementById("box") ;
    n=Number(n)+Number(oldValue);

    for(let j=numberInshape;j<=n;j++){
        let shape=document.createElement("div");
        shape.innerHTML+=numberInshape;
        if(circle.checked) shape.classList.add("circle");
        else if(square.checked) shape.classList.add("square");
        else if(rectangle.checked) shape.classList.add("rectangle");
        else document.write("invalid input");

            numberInshape++;
            box.appendChild(shape);
            oldValue=document.getElementById("box").lastElementChild.innerHTML;

    }
};