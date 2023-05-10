import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-titulo',
  templateUrl: './card-titulo.component.html',
  styleUrls: ['./card-titulo.component.css']
})
export class CardTituloComponent implements OnInit {


  interval: number = 40
  tituloPrincipal: string =  (`<Olá, eu sou Matheus Cavalcanti,
  Desenvolvedor Fullstack! />`)
  tituloVazio: string = ""
  tituloSeparado = this.tituloPrincipal.split('')
  ngOnInit(): void {


    this.apresentarTitulo()
  }

  apresentarTitulo() {
    let i = 0
    let IntervaloDotitulo = setInterval(() => {
      if (i < this.tituloSeparado.length) {
    this.tituloVazio += this.tituloSeparado[i] 
    i++
      } else {
        clearInterval(IntervaloDotitulo)
      }
    }, 40)
  }
}
