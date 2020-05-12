import { Component, OnInit } from '@angular/core';
import { NumerosRomanosService } from '../numeros-romanos.service';

@Component({
  selector: 'app-numeros-romanos',
  templateUrl: './numeros-romanos.component.html',
  styleUrls: ['./numeros-romanos.component.css']
})
export class NumerosRomanosComponent implements OnInit {

  numero = "";

  constructor(private numeroRomano: NumerosRomanosService) { }

  ngOnInit() {
  }

}
