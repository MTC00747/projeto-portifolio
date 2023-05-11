import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.css']
})
export class CardSkillsComponent {

  @Input()
  Habilidades = [{
    Stack: "Front-End",

    image1:"https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-64.png",
    habilidade1: "HTML",
    imageCss :'https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-64.png',
    HabilidadeCss:'CSS',
    image2: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-64.png",
    habilidade2: "JAVASCRIPT",
    image3: "https://cdn2.iconfinder.com/data/icons/file-formats-flat-2/780/40_-_TS-64.png",
    habilidade3: "TYPESCRIPT", 
    image4: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/angular-64.png",
    habilidade4: "ANGULAR"
  },{
  Stack: "Back-End",

    image1:"https://cdn0.iconfinder.com/data/icons/programming-1-1/32/Programming_C-4-64.png",
    habilidade1: "C#",
    imageCss :'https://cdn3.iconfinder.com/data/icons/files-35/512/Kreslici_platno_9_kopie_4-64.png',
    HabilidadeCss:'.NET',
    image2: "https://cdn3.iconfinder.com/data/icons/file-extension-11/512/sql-file-extension-format-digital-64.png",
    habilidade2: "SQL SERVER",
    image3: "https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/Java.png",
    habilidade3: "TESTES COM JAVA", 
    image4: "https://cdn0.iconfinder.com/data/icons/programming-1-1/32/Programming_C-4-64.png",
    habilidade4: "Entity Framework"
  }
  ]
}
