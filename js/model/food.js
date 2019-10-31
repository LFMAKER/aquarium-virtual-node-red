class food {
    constructor(foodX, foodY, foodNum) {
        this._foodX = foodX
        this._foodY = foodY
        this._foodNum = foodNum
    }
    drawFood() {
        ctx.beginPath()
        ctx.fillStyle = "green"
        ctx.fillRect(this._foodX, this._foodY, 15, 10)
        ctx.closePath()
        this._foodY += 1


    }

    removeFood(foodIndex) {
        if (this._foodY > canvas.height) {
            foodArray.splice(foodIndex, 1)
            console.log("Gone")
        }
    }
}