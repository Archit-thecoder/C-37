class Game{
    constructor(){}
    
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState= data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }
    }
    play(){
        form.hide();
        textSize(35);
        text("Game Start", 150,100);
        Player.getPlayerInfo();

        if(allPlayers!==undefined){
            var display_position=130;
            for (var plr in allPlayers){
                if(plr === "player"+ player.index){
                    fill("blue")
                }
                else{
                    fill("black")
                }
                display_position+=30
                textSize(15);
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,display_position)                
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!== null){
            player.distance+=100
            player.update();
        }
    }
}