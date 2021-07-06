class Form{
    constructor(){
        this.title = createElement("h2")
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting= createElement("h3")

    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        
        this.title.html("Car Racing Game")
        this.title.position(150,10)

      

        this.input.position(150,200)
        this.button.position(200,300)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount +=1
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update()

            this.greeting.html("Hello "+ player.name)
            this.greeting.position(150,200)
        });
    }
}