import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumerosRomanosService {

  constructor() { }

  convertirARomano(numero: number): string {
    if (numero > 0 && numero <= 3) {
      return this.convertirRomano(numero, '');
    } else if (numero === 4) {
      return 'IV';
    } else if (numero > 4 && numero <= 8) {
      return this.convertirRomano(numero, 'V');
    } else if (numero === 9) {
      return 'IX';
    } else if (numero > 9 && numero <= 13) {
      return this.convertirRomano(numero, 'X');
    } else if (numero === 14) {
      return 'XIV';
    } else if (numero > 14 && numero <= 18) {
      return this.convertirRomano(numero, 'XV');
    } else if (numero === 19) {
      return 'XIX';
    }
  }

  convertirRomano(numero: number, initial: string): string {
    const romano = 'I';
    let numeroRomano = '';
    numero = numero % 5;
    for (let i = 1; i <= numero; i++) {
      numeroRomano += romano;
    }
    numeroRomano = initial + numeroRomano;
    return numeroRomano;
  }
}
