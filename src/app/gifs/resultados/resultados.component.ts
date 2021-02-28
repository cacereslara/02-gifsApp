import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
    `.card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 15px rgba(0,0,0,.06);
    }`
  ]
})
export class ResultadosComponent implements OnInit {

  get resultados() {
    return this.gifsService.resultados;
  }
  
  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

}
