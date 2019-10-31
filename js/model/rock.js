class rock {
    constructor(rockX, rockY, rockNum, type) {
        this._rockX = rockX
        this._rockY = rockY
        this._rockNum = rockNum
        this._type = type
    }
    drawRock() {
        var thumbImg = document.createElement('img');
        if(this._type == 1){
            thumbImg.src = "./img/rock1.png";
        }else{
            thumbImg.src = "./img/rock2.png";
        }

      
        if (this._fishDirection == true) {
            ctx.drawImage(thumbImg, this._rockX, this._rockY, 120, 60);


        } else {
            ctx.drawImage(thumbImg, this._rockX, this._rockY, 120, 60);


        }

        if(this._rockY < 650){
           this._rockY += 2
        }
        else{
            this._rockY += 0.00
        }


    }

    removeRock(foodIndex) {
        if (this._foodY > canvas.height) {
            foodArray.splice(foodIndex, 1)
            console.log("Gone")
        }
    }
}