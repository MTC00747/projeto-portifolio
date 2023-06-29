import { Component } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent {
//

  projetos = [
    {
    Imagem : "./assets/casaDosLivros.png",
    Titulo :"CasaDosLivros",
    Descricao : "Precisa de um E-commerce de livros?",
    Link : "https://github.com/MTC00747/CasaDosLivrosAngular"
    }
    ,{
      Imagem : "./assets/Blog-Angular.png",
    Titulo :"Blog-Angular",
    Descricao : "Precisa de um Blog?",
    Link : "https://mtc00747.github.io/Angular-Blog/Angular-Blog"
    },{
      Imagem : "./assets/buzzfeed.png",
    Titulo :"BuzzFeed clone",
    Descricao :"Um projeto para se divertir realizando testes de personalidade",
    Link : "https://mtc00747.github.io/projeto-BuzzFeed/Projeto-BuzzFeed"
    },
    {
      Imagem : "./assets/unusBank.png",
    Titulo :"Unus Bank",
    Descricao :"Precisa de um site para sua empresa?",
    Link : "https://unusbank.com.br/"
    }
  ]

}
