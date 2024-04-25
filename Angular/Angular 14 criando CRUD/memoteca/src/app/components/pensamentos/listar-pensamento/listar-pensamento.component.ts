import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
  //   {
  //   conteudo: 'Olá bom dia!',
  //   autoria: 'willian',
  //   modelo: 'modelo2'
  // },{
  //   conteudo: 'Olá Fera!',
  //   autoria: 'willian',
  //   modelo: 'modelo2'
  // }
];

  constructor() { }

  ngOnInit(): void {
  }

}
