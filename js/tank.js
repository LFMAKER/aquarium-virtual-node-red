balanceText.textContent = "$ " + balance


//Adicionando um novo peixe no tanque
document.getElementById("addFish").addEventListener("click", function (e) {
    if (balance >= 100) {
        balance -= 100
        setMoney(balance);
        let addedFish = new fish("name", "Orange")
        fishArray.push(addedFish)
        peixes = fishArray.length;
        setNumPeixes(peixes);
    }
})

function addFishFirebase(qtFish) {
    if (fishArray.length == 0) {
        for (var i = 0; i < qtFish; i++) {
            let addedFish = new fish()
            fishArray.push(addedFish)
        }
    } else {
        if (qtFish >= fishArray.length) {
            var compare = qtFish - fishArray.length;
            for (var i = 0; i < compare; i++) {
                let addedFish = new fish()
                fishArray.push(addedFish)
                balance -= 200
                setMoney(balance);
            }
        } else {
            var compraelse = fishArray.length - qtFish;
            var remove = ((qtFish - fishArray.length) * (-1));
            removeFish(remove);

        }
    }
}


function addPedraFirebase(qtPedra) {
    if (rockArray.length == 0) {
        for (var i = 0; i < qtPedra; i++) {
            var random = Math.floor(Math.random() * 1600)
            var randomType = Math.floor(Math.random() * 2)
            let addedRocha = new rock(random, 600, (rockArray.length + 1), randomType)
            rockArray.push(addedRocha);

        }
    } else {
        if (qtPedra >= rockArray.length) {
            var compare = qtPedra - rockArray.length;
            for (var i = 0; i < compare; i++) {
                var random = Math.floor(Math.random() * 1600)
                var randomType = Math.floor(Math.random() * 2)
                let addedRocha = new rock(random, 600, (rockArray.length + 1), randomType)
                rockArray.push(addedRocha);
                pH += 0.5;
                setPh(pH);
                balance -= 100
                setMoney(balance);
            }
        } else {
            var compraelse = rockArray.length - qtPedra;
            var remove = ((qtPedra - rockArray.length) * (-1));
            
            removePedra(remove);

        }
    }
}


function removeFish(removeQt) {
    for (var i = removeQt; i > 0; i--) {

        fishArray.pop();
        balance += 75
        setMoney(balance);
    }

}


function removePedra(removeQt) {
    for (var i = removeQt; i > 0; i--) {

        rockArray.pop();
        pH -= 0.5;
        setPh(pH);
        balance += 45
        setMoney(balance);
    }

  
}



//Adicionando uma nova rocha
document.getElementById("rocha").addEventListener("click", function (e) {
    if (balance >= 300) {
        balance -= 300
        setMoney(balance);
        var random = Math.floor(Math.random() * 2000)
        var randomType = Math.floor(Math.random() * 2)
        let addedRocha = new rock(random, 600, (rockArray.length + 1), randomType)
        rockArray.push(addedRocha);
        pH += 0.05;
        setPh(pH);
        setNumPedras(rockArray.length);
    }
})




function tamponarPhNeutro(buffer) {
    pH = buffer;
    setPh(pH);
    balance -= 400;
    setMoney(balance);
}


//Limpando os poop e coletando o dinheiro do jogo
document.getElementById("colect").addEventListener("click", function (e) {
    realizarTpa(tpa);
})

function realizarTpa(tpaNum) {

    var qtCoin = coinArray.length;
    if (coinArray.length > 0) {
        tpa = 0;
        for (var i = qtCoin; i > 0; i--) {

            coinArray.pop();

        }
        balance += (qtCoin * 10);
        amonia = parseFloat(0);
        setMoney(balance);
        setTpa(tpa);
        setAmonia(amonia);


        console.log("Foram coletados " + qtCoin + " coins");

    } else {
        tpa = 0;
        setTpa(tpa);
    }
}



document.getElementById("myCanvas").addEventListener("click", function (e) {
    console.log("clicked")

    var rect = canvas.getBoundingClientRect();
    let x = e.clientX - (rect.left + 20)
    let y = e.clientY - (rect.top + 20)
    let coinCollect = false



    for (s = 0; s < coinArray.length; s++) {

        //Pegando o Coin e Limpando o Aquarium
        console.log("X: " + x + " - XCOIN: " + coinArray[s]._coinX);
        console.log("Y: " + y + " - YCOIN: " + coinArray[s]._coinY);
        if ((x < coinArray[s]._coinX + 18 && x > coinArray[s]._coinX - 18) && (y < coinArray[s]._coinY + 18 && y > coinArray[s]._coinY - 18)) {
            coinCollect = true
            console.log("coin clicked")
            balance += 1000
            setMoney(balance);
            coinArray.splice(s, 1);


        }


    }
})


const drawTank = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < fishArray.length; i++) {

        fishArray[i].drawFish();
        fishArray[i].addToTank();
        fishArray[i].selectDestination();
        fishArray[i].movement();
        // fishArray[i].hunger();
        // fishArray[i].healthColour();
        fishArray[i].coinDrop();
        fishArray[i].generateCoin();

        // fishArray[i].removeDeath(i);
        // fishArray[i].feed();

    }

    for (f = 0; f < foodArray.length; f++) {
        foodArray[f].drawFood();
        foodArray[f].removeFood(f);

    }

    for (c = 0; c < coinArray.length; c++) {
        coinArray[c].drawCoin();
        coinArray[c].removeCoin(c);
    }

    for (c = 0; c < rockArray.length; c++) {
        rockArray[c].drawRock();
        rockArray[c].removeRock(c);
    }





}

setInterval(drawTank, 10)