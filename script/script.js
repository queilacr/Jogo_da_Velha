document.addEventListener('DOMContentLoaded',()=>{
    let squares = document.querySelectorAll('.square');
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })

})

function handleClick(event) {
 
    let square = event.target
    let position = square.id
    
    if (handleMove(position)){
        if(playerTime == 0){
            setTimeout(() => {
                alert(`O jogo Acabou. O vencedor foi o jogador Batata frita. PARABÉNS`)
            }, 10) 
        } else{
            setTimeout(() => {
                alert(`O jogo Acabou. O vencedor foi o jogador Hamburguer. PARABÉNS`)
            }, 10)
        }
       
        
    }


    updateSquare(position) 
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}


function updateSquares() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
    
}

function novojogo() {
    window.location.reload()
}
