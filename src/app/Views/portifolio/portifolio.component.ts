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
      Imagem : "./assets/casaDosLivros.png",
    Titulo :"Blog-Angular",
    Descricao : "Precisa de um Blog?",
    Link : "https://github.com/MTC00747/CasaDosLivrosAngular"
    }
  ]

}
