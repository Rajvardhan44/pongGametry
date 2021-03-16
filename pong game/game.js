class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
            playerPaddle1 = createSprite(380,200,10,60);
            playerPaddle1.shapeColor="white"
        
           playerPaddle2 = createSprite(20,200,10,60);
           playerPaddle2.shapeColor="white"
           players=[playerPaddle1,playerPaddle2];

                    
          
        }
    
    play(){
   //                     background("green")

           /*     form.hide();
        playerPaddle1 = createSprite(380,200,10,60);
        playerPaddle1.shapeColor="white"
    
       playerPaddle2 = createSprite(20,200,10,60);
       playerPaddle2.shapeColor="white"

                
       
    
                Player.getPlayerInfo();
                
                
                 var index = 0
                 
             //    players[index].x = 380;
               //  players[index].y = mouseY;
               //  players[index + 1].x = 20;
              //  players[index + 1].y = mouseY;
            if(keyDown("UP_ARROW")){
            players[index].velocityY -= 1
            console.log(index)
            }
            if(keyDown("DOWN_ARROW")){
            players[index].velocityY += 1
            }

            if(keyDown("W")){
            players[index+1].velocityY -= 1
            }
            if(keyDown("S")){
            players[index+1].velocityY += 1
            }
         */   
            form.hide();

            Player.getPlayerInfo();
     //        image(back_img, 0, 0, 1000, 800);
             var x =100;
             var y=200;
            
             drawSprites();
             for(var plr in allPlayers){
                var index =0;
                 index = index+1;
                 x = 500-allPlayers[plr].distance;
                 y=500;

                
                 
                 players[index -1].x =mouseX;
                 players[index - 1].y = y;
                   players[index].visible=false;

             }
            

    }

    end(){
       console.log("Game Ended");
    }
}
