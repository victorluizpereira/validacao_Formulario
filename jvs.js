var erro = false;
var email, password;
var padraonome = /^[a-zA-Z]/;
var padraorg = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[A-Za-z0-9]/;
var padraocpf = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\.[0-9]{2}/;
var senha = /^[0-9a-zA-Z]/;

function validnum(text){
	return padraonome.test(text);
}
function validrg(rg){
	return padraorg.test(rg);
}
function validcpf(cpf){
	return padraocpf.test(cpf);
}

function htmlval(input, tipo){
	if(tipo == 1){
		if(input.value == "" || !validnum(input.value)){
			return "<label>Nome inválido</label>";
		}
	}else if(tipo == 2){
		if(input.value == "" || input.value < 12 || input.value > 100){
			return "<label>Idade inválida</label>";
		}
		return null;
	}
}

function limtval(input, estado){
	if(estado == 3){
		if(input.value == "" || (input.validity.rangeOverflow || input.validity.rangeUnderflow || !validrg(input.value))){
			return "<label>RG inválido </label>";
		}
	}else if(estado == 4){
		if(input.value == "" || (input.validity.rangeOverflow || input.validity.rangeUnderflow || !validcpf(input.value))){
			return "<label>CPF inválido </label>";
		}
	}
	return null;
} 

function validemail(input, x){
	if(x == 5){
		email = input.value;
		if(input.value == "" || input.value.indexOf("@") == -1){
			return "<label>E-mail inválido </label>";
		}
		return null;
	}else{
	    if(input.value != email){
			return "<label>E-mail inválido </label>";
		}
		return null;
	}
}

function validsenha(input, x){
	if(x == 7){
		password = input.value;
		if(input.value == "" || input.value.length < 8){
			return "<label>Senha inválida </label>";
		}
		return null;
	}else{
		if(input.value != password){
			return "<label>Senha inválida </label>";
		}
		return null;
	}
}

function invalido(input, s){
	var x = s;
	var htmlvalido = document.querySelector("#valid"+x);
	var textovalidacao = null;

	if(s == 1 || s == 2){
		textovalidacao = htmlval(input, s);
	}else if(s == 3 || s == 4){
		textovalidacao = limtval(input, s);
	}else if(s == 5 || s == 6){
		textovalidacao = validemail(input, s);
	}else if(s == 7 || s == 8){
		textovalidacao = validsenha(input, s);
	}
			
	if(textovalidacao != null){
		htmlvalido.innerHTML = textovalidacao;
		htmlvalido.style.color = "red";
		erro=true;
	}else{
		htmlvalido.style.color = "black";
		htmlvalido.innerHTML = "<label>*</label>";
		erro=false;
	}
}
		
function limpar(){
	for(let i = 1; i <= 8; i++){
		document.querySelector("#bloc"+i).value = "";
	}
}

function proximo(){
	var branco = false;
	for(let i=1; i <= 8; i++){
		if(document.querySelector("#bloc"+i).value == ""){
			branco = true;
			break;
		}
	}
	if(erro == false && branco == false){
		//achar um jeito de fazer o js jogar para outra página
		//document.formulario.botoes.valid.link.href = "./cadastrado.html";
	}else{
		alert("Um campo não foi preenchido corretamente !!!");
	}
}