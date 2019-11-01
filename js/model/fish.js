class fish {

    constructor(fishName, fishColour) {
        this._fishName = fishName
        this._fishColour = fishColour
        this._appliedColour = this._fishColour
        this._coinReady = 0
        this._growthStage = 0
        this._fishDirection = true
        this._hunger = 101
        this._fishX = Math.floor(Math.random() * 1200) + 50
        this._fishY = -40
        this._inTank = false
        this._movingX = false
        this._movingY = false
        this._destinationX = 0
        this._destinationY = 0
    }

    //Desenhando o Peixe
    drawFish() {
        var thumbImg = document.createElement('img');
        thumbImg.src = "./img/Fish1.png";
        if (this._fishDirection == true) {
            ctx.drawImage(thumbImg, this._fishX, this._fishY, 120, 60);


        } else {
            ctx.drawImage(thumbImg, this._fishX, this._fishY, 120, 60);


        }
    }
    //Adicionando peixe no tanque
    addToTank() {
        if (this._inTank == false) {
            if (this._fishY < 350) {
                this._fishY += 5
            } else {
                this._inTank = true
                
            }

        }
    }

    //Selecionando o Destino
    selectDestination() {
        if (this._inTank == true && foodArray.length == 0) {
            if (this._movingX == false && this._movingY == false) {
                this._destinationX = Math.floor(Math.random() * 1200) + 50
                this._destinationY = Math.floor(Math.random() * 600) + 50

                this._movingX = true
                this._movingY = true

            }
        }
    }

    //Movimentando o peixe
    movement() {
        if (this._fishX !== this._destinationX && this._inTank == true) {
            if (this._destinationX > this._fishX) {
                this._fishX += 0.5
                this._fishDirection = true
            } else {
                this._fishX -= 0.5
                this._fishDirection = false

            }
        } else {
            this._movingX = false

        }

        if (this._fishY !== this._destinationY && this._inTank == true) {

            if (this._destinationY > this._fishY) {
                this._fishY += 0.5
            } else {
                this._fishY -= 0.5
            }
        } else {
            this._movingY = false

        }
    }

    //Fome
    hunger() {
        if (this._hunger > 0) {
            this._hunger -= 0.01

        }
    }

    //Vida
    healthColour() {
        if (this._hunger < 10) {
            this._appliedColour = "#aaa69d"
        } else if (this._hunger < 25) {
            this._appliedColour = "#A1887F"

        }
    }
    removeDeath(index) {
        if (this._hunger <= 0) {
            fishArray.splice(index, 1);
        }


    }

    growth() {}

    //Alimantar
    feed() {
        if (this._hunger < 50 && foodArray.length > 0) {
            this._destinationX = foodArray[1]._foodX
            this._destinationY = foodArray[1]._foodY

            this._movingX = true
            this._movingY = true
        }
    }

    //Gerar Coin/Poop
    generateCoin() {
        this._coinReady = Math.floor(Math.random() * 5000)
    }


    //Dropando o Coin
    coinDrop() {
        if (this._coinReady == 1000) {
            let coinNum = coinArray.length
            let amoniaL = 0.01;
            let addedCoin = new coin(this._fishX + 90, this._fishY + 95, coinNum, amoniaL)
            amonia = parseFloat(amonia + amoniaL);
            coinArray.push(addedCoin);
            setAmonia(amonia);

        }

    }
}