//@ts-check


//getting the div
let maindiv = document.getElementById('maindiv');    

//creating buttons
let create = document.createElement("button");
create.innerHTML = "New Grid";  
document.body.appendChild(create);   

   
create.classList.add("button"); 




//Create function that will create a bunch of divs   
  function createGrid () {  
    let input = prompt("How many squares would you like per side");
    let x = parseInt(input); 
    //For loop that iterates through the amount of divs the user asks for. 
    for(let i = 0; i < x*x; i++) {   
       //creating new divs and appending them to the document and adding a class  
       let newdiv = document.createElement('div');  
       maindiv.appendChild(newdiv);  
       newdiv.classList.add('box');    
       let height = 700/x;  
       let stringheight = height.toString();
       
       newdiv.style.height = stringheight + "px";  
       newdiv.style.width = stringheight + "px"; 
       // Creating an event listener that turns the background color of the div black when it is hovered over
       newdiv.addEventListener("mouseover", function( event ) {
        
         newdiv.style.backgroundColor = "black";
        }, );
    }    
}     
   //Reset Function that removes all of the of child elements.     
   function resetGrid() {   
       let boxes = document.getElementsByClassName('box');
       for(let i = 0; i < maindiv.childElementCount; i++) { 
           if(boxes[i].tagName == "DIV") { 
               boxes[i].hidden = 'true';
           }
       }
   }   

   createGrid(); 
   //Event Listener that responds the the create button. 
    create.addEventListener("click", function( event ) {
        resetGrid(); 
        createGrid();
          

     
   }, );
   



    




