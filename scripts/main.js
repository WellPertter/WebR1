
// Mudar imagem;
let imagem = document.querySelector('img');

imagem.onclick = function(){
   if (imagem.getAttribute('src')=='date/firefox.png'){
      imagem.setAttribute('src', 'date/firefox2.png');
   }else{
      imagem.setAttribute('src', 'date/firefox.png');
   }
}

// Mensagem de bem vindo + mudança de user;
let meuButton = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario(){
   let meuNome = prompt('Por favor, digite seu nome.');
   if (!meuNome){
      defineNomeUsuario();
   }else{
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Mozila é legal, ' + meuNome;
   }
}

if (!localStorage.getItem('nome')){
   defineNomeUsuario();
}else{
   let meuNome = localStorage.getItem('nome');
   meuCabecalho.innerHTML = 'Mozila é legal, ' + meuNome;
}
meuButton.onclick = function(){
   defineNomeUsuario();
}