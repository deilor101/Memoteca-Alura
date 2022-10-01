import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamento = [
    {
      conteudo: 'I love Borutinhoooo',
      autoria: 'Matheus Henrique',
      modelo: 'modelo2'
    },
    {
      conteudo: 'She-Hulk é ruim',
      autoria: 'Matheus Henrique',
      modelo: 'modelo1'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
