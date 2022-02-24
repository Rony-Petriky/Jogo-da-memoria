let game = {

	lockMode : false,
	firstCart : null,
	segundaCart : null,

	setCart : function (id) {
		let carta = this.cartas.filter(carta => carta.id===id)[0];
		console.log(carta);
		if(carta.flipped || this.lockMode){
			return false;
		}
		if(!this.firstCart){
			this.firstCart = carta;
			this.firstCart.flipped = true;
			return true;
		}else{
			this.segundaCart = carta;
			this.segundaCart.flipped = true;
			this.lockMode = true;
			return true;
		}
	},

	iguaisCart : function(){

		if (!this.firstCart || !this.segundaCart ) {
			return false;
		}
		return this.firstCart.icone === this.segundaCart.icone;


	},

	liberarCarts : function(){
		this.firstCart = null;
		this.segundaCart = null;
		this.lockMode = false;

	},

	umflipCarts : function(){
		this.firstCart.flipped = false;
		this.segundaCart.flipped = false;
		this.liberarCarts();

	},
	checarGameOver : function(){
		return this.cartas.filter(carta => !carta.flipped).length==0;

	},

	
	fotos : [
		"cart01",
		"cart02",
		"cart03",
		"cart04",
		"cart05",
		"cart06",
		"cart07",
		"cart08",
		"cart09",
			"cart10"],
	cartas: null,
	
	cartdafamilia : function () {
		this.cartas = [];

		//Agumento (of) faz com oque o for percorra todo o array 

		this.fotos.forEach((foto)=>{

		//O método push ()  adiciona um ou mais elementos ao final 
		//de uma matriz e retorna o novo comprimento desse array.
			
			this.cartas.push(this.criarpardascartfam(foto))
		})
		//flastMap desmembra todo objeto
		this.cartas = (this.cartas.flatMap(par => par));
		this.embaralharCartas();
		return this.cartas;
		
	},

	criarpardascartfam : function(foto) {
		return [{
				id: this.criarIddasFoto(foto),
				icone: foto,
				flipped: false,
		},
			{
				id: this.criarIddasFoto(foto),
				icone: foto,
				flipped: false,
		}];
	},

	criarIddasFoto : function(foto) {
			return foto + parseInt(Math.random()*1000);
		},
	
	embaralharCartas : function (cartas) {
		let atualIndex = this.cartas.length;
		let randomIndex = 0;


		while (atualIndex !== 0){
			randomIndex = Math.floor(Math.random()*atualIndex);
			atualIndex--;
			[this.cartas[randomIndex], this.cartas[atualIndex]] = [this.cartas[atualIndex], this.cartas[randomIndex]];

		}
	}

}