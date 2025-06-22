const screen=document.querySelector(".screen")
const buttons=document.querySelectorAll("button")

let memory=0;
let current="";

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
     const value = button.innerText;
     if(value==="AC"){
        current="";
        screen.innerText="";
     }
     else if(value==="C"){
        current=current.slice(0,-1);
        screen.innerText=current;
     }
     else if (value==="="){
        try{
            current=current
              .replace(/×/g,"*")
              .replace(/÷/g, "/")
              .replace(/√/g, "Math.sqrt");
            
              const result=eval(current)
              screen.innerText=result;
              current = result.toString();
        }
        catch{
            screen.innerText="Error";
            current="";
        }
     }
     else if(value==="OFF"){
         current="";
         screen.innerText="OFF";
     }
     else if(value==="M+") {
        memory+=Number(screen.innerText ||0);
     }
     else if(value==="M-"){
        memory-=Number(screen.innerText ||0);
     }
     else if(value==="MRC"){
        screen.innerText=memory;
        current=memory.toString();
     }
     else{
        current+=value;
        screen.innerText=current;
     }

    }
);
});