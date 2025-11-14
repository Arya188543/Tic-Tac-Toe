console.log("welcome to tic tac toe")
let audioTurn = new Audio("ting.mp3")
let outro = new Audio("outro.mp3")

let turn = "X"
let gameOver = false

const changeTurn = ()=>{
    return turn==="X"? "0" : "X"
}

const checkWin = () =>{
    let boxtext = Array.from(document.getElementsByClassName('boxtext'));
    let wins =[
        [0,1,2,3,5,0],[3,4,5 ,5 ,15,0],[6,7,8 , 3 , 25 , 0],
        [0,3,6 , -7.5 ,15 ,90],[1,4,7 , 2.5 , 15 ,90],[2,5,8 , 12.5 ,15 ,90],
        [0,4,8 , 2.5 , 15 , 45],
        [2,4,6 ,2.5 ,15,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
        (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && 
        (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameOver = true
            document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "25vw"
            outro.play()
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '' && !gameOver){
            boxtext.innerText = turn;
            audioTurn.play()
            checkWin()
            if(!gameOver){
                turn = changeTurn()
                document.getElementsByClassName("info")[0].innerText="Turn for " + turn
            }
        }
    })
})

document.getElementById("reset").addEventListener("click" , () => {
    Array.from(document.getElementsByClassName("boxtext")).forEach(box => {
        box.innerText = ""
    })
    turn = "X"
    gameOver = false
    document.querySelector(".info").innerText = " Turn for " + turn
    document.querySelector(".line").style.width = "0vw"
})