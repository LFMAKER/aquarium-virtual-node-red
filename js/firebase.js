const firebaseConfig = {
    apiKey: "AIzaSyB7k-OmAP__X1oJzLVHMDfvYK5XPlxjxb4",
    authDomain: "aquariumlive-899d8.firebaseapp.com",
    databaseURL: "https://aquariumlive-899d8.firebaseio.com",
    projectId: "aquariumlive-899d8",
    storageBucket: "aquariumlive-899d8.appspot.com",
    messagingSenderId: "306496623791",
    appId: "1:306496623791:web:9f08b514f877d0a813705a",
    measurementId: "G-56MD3CLZ49"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



const dbIluminacao = firebase.database().ref('aquarium/iluminacao');


//Iluminação
var aquariumIluminacaoUI = $('#luz');
var fundo = $('#fundo');

dbIluminacao.on("value", snap => {
    if (snap.val() == 0) {
        console.log("ILUMINACAO OFF");

        aquariumIluminacaoUI.removeClass("iluminacao");
        aquariumIluminacaoUI.addClass("iluminacaoOff");

        fundo.removeClass('tankBackground');
        fundo.addClass('tankBackgroundOff');


    } else {
        console.log("ILUMINACAO ON");
        aquariumIluminacaoUI.removeClass("iluminacaoOff");
        aquariumIluminacaoUI.addClass("iluminacao");

        fundo.removeClass('tankBackgroundOff');
        fundo.addClass('tankBackground');
    }
});



const dbMoney = firebase.database().ref('aquarium/money');

//Money on - Monitora alterações
dbMoney.on("value", snap => {
    balance = snap.val()['money'];
    balanceText.textContent = "$ " + balance
});


//Money set - Seta novo valor
function setMoney(balance) {
    var postData = {
        money: balance,
    };
    dbMoney.update(postData);
};


const dbPeixes = firebase.database().ref('aquarium/peixes');

//Peixes set - seta o numero de peixes no aquario
function setNumPeixes(peixes) {
    var postData = {
        peixes: peixes
    };
    dbPeixes.update(postData);
}

//Peixes on - Monitora alterações
dbPeixes.on("value", snap => {
    peixesNum = snap.val()['peixes'];
    peixes = peixesNum;
    addFishFirebase(peixes);
});


const dbPedras = firebase.database().ref('aquarium/pedras');

//Pedras set - seta o numero de pedras no aquario
function setNumPedras(pedras) {
    var postData = {
        pedras: pedras
    };
    dbPedras.update(postData);
}

//Peixes on - Monitora alterações
dbPedras.on("value", snap => {
    pedrasNum = snap.val()['pedras'];
    pedras = pedrasNum;
    addPedraFirebase(pedras);
});


const dbBuffer = firebase.database().ref('aquarium/buffer');

//Buffer set - seta o buffer no aquario
function setBuffer(buffer) {
    var postData = {
        buffer: buffer
    };
    dbBuffer.update(postData);
}

//Buffer on - Monitora alterações
dbBuffer.on("value", snap => {
    bufferNum = snap.val()['buffer'];
    console.log("BUFFER: " + bufferNum)
    if (bufferNum > 0) {
        tamponarPhNeutro(bufferNum);    
    }

    var n = 0;
    setBuffer(n);

});








const dbTpa = firebase.database().ref('aquarium/tpa');


//TPA set - realizar tpa
function setTpa(tpaNum) {
    var postData = {
        tpa: tpaNum
    };
    dbTpa.update(postData);
}

//TPA on - Monitora alterações
dbTpa.on("value", snap => {
    tpaNum = snap.val()['tpa'];
    tpa = tpaNum;
    realizarTpa(tpa);

});


const dbPh = firebase.database().ref('aquarium/ph');

//PH set - setar PH
function setPh(phNum) {
    var postData = {
        ph: phNum
    };
    dbPh.update(postData);
}


//PH on - Monitora alterações
dbPh.on("value", snap => {
    phNum = snap.val()['ph'];
    pH = phNum;
});



const dbAmonia = firebase.database().ref('aquarium/amonia');

//PH set - setar PH
function setAmonia(amoniaNum) {
    amoniaNumF = parseFloat(amoniaNum).toFixed(2);
    console.log(amoniaNumF);
    var postData = {
        amonia: amoniaNumF
    };
    dbAmonia.update(postData);
}

dbAmonia.on("value", snap => {
    amoniaNum = snap.val()['amonia'];
    amonia = amoniaNum;
});