const canvas = document.getElementById('jogoCanvas')
const ctx = canvas.getContext('2d')
const personagem ={
    x:100,
    y:350,
    largura:50,
    altura:50
}
function desenharPersonagem(){
    ctx.fillStyle = 'black' //cor
    //posicao x e y
    // largura e altura
    ctx.fillRect(
        personagem.x, 
        personagem.y, 
        personagem.largura, 
        personagem.altura
    )
}
function atualizapersonagem(){
    personagem.y -=1
}

function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    desenharPersonagem()
    atualizapersonagem()
    requestAnimationFrame(loop)
}

loop()