import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
@Input()
titulo : string = ""
menuAberto : boolean = false

abrirMenu(){
  if(!this.menuAberto){
    this.menuAberto = true
    
  }else{
    this.menuAberto = false
  }
}
}
