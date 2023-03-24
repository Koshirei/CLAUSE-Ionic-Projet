import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit(): void {

    // quand on est sur homepage, on donne une image de fond au body;
    // sans la répéter, qui prend tout l'espace de l'écran, et qui sera toujours centrée
    // comme ça l'image est utilisable peut importe la taille de l'écran et sera bien positionnée
    // let body = document.querySelector("body")!;
    // body.style.backgroundImage = "url('assets/index_bg.jpg')";
    // body.style.backgroundSize = "cover";
    // body.style.backgroundRepeat = "no-repeat";
    // body.style.backgroundAttachment = "fixed";
    // body.style.backgroundPosition = "center"
  }

  ngOnDestroy(): void {
    let body = document.querySelector("body")!;
    body.style.backgroundImage = "url('')";
  }

}
