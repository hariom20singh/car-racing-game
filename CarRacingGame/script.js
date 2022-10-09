window.onload = ()=>{
    var z=document.getElementById("a");
    function song(){
    z.play();
        
    }
    function endSong(){
        z.pause();
    }
    
        const score=document.querySelector(".score");
        const startScreen=document.querySelector(".startScreen");
        const gameArea=document.querySelector(".gameArea");
        let btn_a = 
    document.querySelector('.buttonArea');
    let li = document.querySelectorAll('.buttonArea .ul li');
    
        // console.log(gameArea);
    
         startScreen.addEventListener("click",start);
       startScreen.addEventListener("click",song);  
    
        let player={ speed: 6, score:0};
    
    
         let keys = { ArrowUp:false , ArrowDown:false , ArrowLeft:false,ArrowRight:false}
         
    
        
        function isCollide(a,b)
        {
            aRect = a.getBoundingClientRect();
            bRect = b.getBoundingClientRect();
    
            return !((aRect.bottom < bRect.top) || (aRect.top > bRect.bottom ) || (aRect.right < bRect.left) || (aRect.left > bRect.right))
        }
    
        function moveLines(){
            let lines = document.querySelectorAll(".lines");
            lines.forEach(function(item){
                if(item.y >= 750){
                    item.y = -50; 
                }
                item.y += player.speed;
                item.style.top= item.y + "px";
            })
        }
        
        function endGame(){
            player.start=false;
            startScreen.classList.remove("hide");
        }
    
        function moveEnemy(car){
            let enemy = document.querySelectorAll(".enemy");
            enemy.forEach(function(item){
    
                if(isCollide(car,item)){
                    //console.log("boom hit");
                    endGame();
                    endSong();
      startScreen.innerHTML="Game over Your score is :-" + player.score+"<br>" + " click here to restart the game " +"<a href='https://youtu.be/vGF5B7yNA7Q'> my youtube channel</a>";
                }
    
                if(item.y >= 700){
                    item.y = -300; 
        item.style.left=Math.floor(Math.random()*250) + "px";
                }
                item.y += player.speed;
                item.style.top= item.y + "px";
            })
        }
    
        function gamePlay(){
            //console.log("hey i am clicked");
            let car = document.querySelector(".car");
            let road=gameArea.getBoundingClientRect();
            //console.log(road);
    
            if(player.start)
             {
                 moveLines();
                 moveEnemy(car);
    
                 if(keys.ArrowUp && player.y > road.top+70){ player.y -= player.speed}
                 if(keys.ArrowDown && player.y < (road.bottom-70)){ player.y += player.speed}
                 if(keys.ArrowLeft && player.x > 0 ){ player.x -= player.speed}
                 if(keys.ArrowRight && player.x < (road.width-50)){ player.x += player.speed}
    
            car.style.top=player.y +"px";
            car.style.left=player.x +"px";
    
                window.requestAnimationFrame(gamePlay);
                //console.log(player.score++);
                score.innerText=" score:   " + player.score;
                player.score++;
                
            }
    
            
        }
    
        function start(){
    
            //gameArea.classList.remove('hide');
            startScreen.classList.add('hide');
    
            gameArea.innerHTML="";
    
            player.start=true;
            player.score=0;
    
            window.requestAnimationFrame(gamePlay);
    
            for(x=0;x<5;x++)
            {
    
            let roadLine=document.createElement("div");
            roadLine.setAttribute("class","lines");
            roadLine.y=(x*150);
            roadLine.style.top=roadLine.y + "px" ;
            gameArea.appendChild(roadLine);
            }
    
            let car= document.createElement("div");
            car.setAttribute("class","car");
            //car.innerText= "hay i am your car";/
            gameArea.appendChild(car);
    
            player.x=car.offsetLeft;
            player.y=car.offsetTop;
            
    
            //console.log("top position" +car.offsetTop);
            //console.log("left position" +car.offsetLeft)
    
            for(x=0;x<3;x++)
            {
    
            let enemyCar=document.createElement("div");
            enemyCar.setAttribute("class","enemy");
            enemyCar.y=((x+1)*350) * -1;
            enemyCar.style.top=enemyCar.y + "px" ;
            enemyCar.style.backgroundColor=randomColor();
            
          function randomColor()
    {
              function c(){
                  let hex= Math.floor(Math.random()*256).toString(16);
         return ("0" + String(hex)).substr(-2);  
              }
            return "#" + c() +c() +c();
          }
    
            enemyCar.style.left=Math.floor(Math.random()*250) + "px";
            gameArea.appendChild(enemyCar);
            }
    
        }
        
     up.addEventListener('touchstart',()=>{
        keys.ArrowUp = true;
    })
    up.addEventListener('touchend',()=>{
        keys.ArrowUp = false;
    })
    down.addEventListener('touchstart',()=>{
        keys.ArrowDown = true;
    })
    down.addEventListener('touchend',()=>{
        keys.ArrowDown = false;
    })
    left.addEventListener('touchstart',()=>{
        keys.ArrowLeft = true;
    })
    left.addEventListener('touchend',()=>{
        keys.ArrowLeft = false;
    })
    right.addEventListener('touchstart',()=>{
        keys.ArrowRight = true;
    })
    right.addEventListener('touchend',()=>{
        keys.ArrowRight = false;
    })
    
    
    }