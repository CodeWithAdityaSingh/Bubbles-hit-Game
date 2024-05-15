let box2 = document.querySelector(".box2")
let increasment = 0;
let a = 0
let b = 0 ;
let timer = 60;

let string = "";

let loop = ()=>{
    for(i=0  ; i<=208 ; i++){
        let a = Math.floor(Math.random()*10)
        
        string = string + ` <button class="buttons">${a}</button>`
        document.querySelector(".main").innerHTML = string
        
    }
}




let  interval = ()=>{
    setInterval(()=>{
        if(timer >= 0){

            timer--
            box2.textContent = timer
          
        }
        else{
            clearInterval(timer)
           document.querySelector(".main").textContent = "GameOver"
           document.querySelector(".main").style.color = "Blue"

           document.querySelector(".main").style.display = "flex"
           document.querySelector(".main").style.justifyContent = "center"
           document.querySelector(".main").style.alignItems = "center"

          
        }
    },1000)
}

let random = ()=>{
    a = Math.floor(Math.random()*10)
    b = document.querySelector(".box0").innerHTML = a
    
}




document.querySelector(".main").addEventListener("click",(details)=>{
    let i = Number(details.target.textContent)
   
    if(b === i){
        increasment = increasment+10
        document.querySelector(".box3").textContent = increasment
        
    }
    random()
    loop()
    
    
})

random()
interval()
loop()

