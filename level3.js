function begin(){
    document.getElementById("game").style.color = "red"
    document.getElementById("poke1").style.opacity = "1"
    document.getElementById("poke2").style.opacity = "1"
    document.getElementById("poke3").style.opacity = "1"
    document.getElementById("poke4").style.opacity = "1"
    document.getElementById("poke5").style.opacity = "1"
    document.getElementById("poke6").style.opacity = "1"
}

let move = 0
let fly = 0
let poke1 = 0
let poke2 = 0
let poke3 = 0
let poke4 = 0
let poke5 = 0
let poke6 = 0
let towin1 = 0
let towin2 = 0
let victor3 = 0
function left(){
    move -= 20
    document.getElementById("hero").style.marginLeft = move + "px"
    console.log(move)
    return move
}
function right(){
    move += 20
    document.getElementById("hero").style.marginLeft = move + "px"
    console.log(move)
    return move
}
function up(){
    fly -= 20
    document.getElementById("hero").style.marginTop = fly + "px"
    console.log(fly)
    return fly
}
function down(){
    fly += 20
    document.getElementById("hero").style.marginTop = fly + "px"
    console.log(fly)
    return fly
}
function tangkap(){
    //tangkap psyduck
    if(move == 400 && fly == -100){
        document.getElementById("poke4").style.opacity = 0
        document.getElementById("hero").style.backgroundSize = "20px"
        document.getElementById("first").style.backgroundImage = "url('psyduck.png')"
        document.getElementById("first").style.backgroundSize = "40px"
        poke4 = 1

        setTimeout(() => {
            document.getElementById("hero").style.backgroundSize = "100px"
        }, 1500);
    }
    //tangkap totodile
    if(move == 0 && fly == -200){
        document.getElementById("poke5").style.opacity = 0
        document.getElementById("hero").style.backgroundSize = "20px"
        document.getElementById("second").style.backgroundImage = "url('totodile.webp')"
        document.getElementById("second").style.backgroundSize = "40px"
        poke5 = 1

        setTimeout(() => {
            document.getElementById("hero").style.backgroundSize = "100px"
        }, 1500);
    }
    //tangkap turtwig
    if(move == 900 && fly == -200){
        document.getElementById("poke3").style.opacity = 0
        document.getElementById("hero").style.backgroundSize = "20px"
        document.getElementById("third").style.backgroundImage = "url('turtwig.png')"
        document.getElementById("third").style.backgroundSize = "40px"
        poke3 = 1

        setTimeout(() => {
            document.getElementById("hero").style.backgroundSize = "100px"
        }, 1500);
    }
    //tangkap sandshrew
    if(move == 1200 && fly == -100){
        document.getElementById("poke6").style.opacity = 0
        document.getElementById("hero").style.backgroundSize = "20px"
        document.getElementById("fourth").style.backgroundImage = "url('sandshrew.png')"
        document.getElementById("fourth").style.backgroundSize = "40px"
        poke6 = 1

        setTimeout(() => {
            document.getElementById("hero").style.backgroundSize = "100px"
        }, 1500);
    }

    //tangkap pokemon beedrill
    towin1 = poke3 + + poke4 + poke5 + poke6
    if(towin1 == 4){
        
        if(move == 200 && fly == -300){
            document.getElementById("poke2").style.opacity = 0
            document.getElementById("hero").style.backgroundSize = "20px"
            document.getElementById("fifth").style.backgroundImage = "url('beedrill.png')"
            document.getElementById("fifth").style.backgroundSize = "60px"
            poke2 = 1
            setTimeout(() => {
                document.getElementById("hero").style.backgroundSize = "100px"
            }, 1500);
        }
    }

    //tangkap butterfree
    towin2 = poke2 + poke3 + poke4 + poke5 + poke6
    if(towin2 == 5){               
        if(move == 0 && fly == -400){
            document.getElementById("poke1").style.opacity = 0
            document.getElementById("hero").style.backgroundSize = "20px"
            document.getElementById("sixth").style.backgroundImage = "url('butterfree.png')"
            document.getElementById("sixth").style.backgroundSize = "80px"
            poke1 = 1

            setTimeout(() => {
                document.getElementById("hero").style.backgroundSize = "100px"
            }, 1500);
        }
    }

    return poke1 
    return poke2 
    return poke3 
    return poke4 
    return poke5 
    return poke6 
}

function result() {
    winning = poke1 + poke2 + poke3 + poke4 + poke5 + poke6
    if(winning == 6) {
            document.getElementById("sky").style.backgroundImage = "url('winn.jpg')"
            document.getElementById("sky").style.backgroundSize = "450px"
            document.getElementById("sky").style.backgroundPositionY = "0px"
            victor3 = 1
            console.log("point for level 3 is " + victor3)
        }
    return victor3
}   

localStorage.setItem("point3",victor3)