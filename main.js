//@ts-check
//Set up shit 

//getting the div
let maindiv = document.getElementById('maindiv');  





//Create function that will create a bunch of divs   

    for(let i = 0; i < 8*8; i++) { 
       let newdiv = document.createElement('div');  
       maindiv.appendChild(newdiv);  
       newdiv.classList.add('box');
    }  

//Create function that will change the color to black when hovered upon 
    
    




