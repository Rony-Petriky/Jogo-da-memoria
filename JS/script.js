const FRENTE = "cart_frente";
const FUNDO = "cart_fundo";
const CARTA = "carta";
const ICONE = "icone";



	
	comecarJogo();


function comecarJogo() {
	
	mostrandocartas(game.cartdafamilia())
	
}
function mostrandocartas(cartas) {
	let tabuleiro = document.getElementById("tabuleiro");
	tabuleiro.innerHTML = "";

	game.cartas.forEach(carta =>{
		let cartElement = document.createElement("div");
		cartElement.id = carta.id;
		cartElement.classList.add(CARTA);
		cartElement.dataset.icone = carta.icone;
		cartElement.addEventListener("click", flipeCarta);
		criarCartContent(carta, cartElement);

		tabuleiro.appendChild(cartElement);

	});
	
}

function criarCartContent(carta, cartElement) {
	criarCartFace(FRENTE, carta, cartElement);
	criarCartFace(FUNDO, carta, cartElement);

}

function criarCartFace(face, carta, elemento) {
	let cartElementFace = document.createElement("div");
	cartElementFace.classList.add(face);
	if(face === FRENTE){
		let iconeElement = document.createElement("img");
		iconeElement.classList.add(ICONE);
		iconeElement.src = "imagens/" + carta.icone + ".jpg";
		cartElementFace.appendChild(iconeElement);


	}else{
		cartElementFace.innerHTML= "&lt/&gt";


	}
	elemento.appendChild(cartElementFace);
}

function flipeCarta() {

	if(game.setCart(this.id)){

		this.classList.add("flip");

		if(game.segundaCart){

			if(game.iguaisCart()){
				game.liberarCarts();
					if(game.checarGameOver()){
						let gameOverTela = document.getElementById("gameOver");
						gameOverTela.style.display = "flex"; 

					}
				}else {
					setTimeout(()=>{
					let firstCartView = document.getElementById(game.firstCart.id);
					let segundaCartView = document.getElementById(game.segundaCart.id);

					firstCartView.classList.remove("flip");
					segundaCartView.classList.remove("flip");
					game.umflipCarts();
				},1000)

			}
		}
	}
}
function restart(){
	game.liberarCarts();
	comecarJogo();
	let gameOverTela = document.getElementById("gameOver");
	gameOverTela.style.display = "none"; 


}