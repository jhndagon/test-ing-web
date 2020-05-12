import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumerosRomanosService {

  constructor() { }

  convertirARomano(numero: number): string {
    return this.numeroModulo1000(numero) +
            this.numeroModulo500(numero) +
            this.numeroModulo100(numero) +
            this.numeroModulo50(numero) +
            this.numeroModulo10(numero) +
            this.numeroModulo5(numero);
  }

  numeroModulo5(numero: number) {
    const num = numero % 5;
    if (num === 1) {
      return 'I';
    } else if (num === 2) {
      return 'II';
    } else if (num === 3) {
      return 'III';
    }
    return '';
  }

  numeroModulo10(numero: number) {
    const num = numero % 10;
    if (num === 4) {
      return 'IV';
    } else if (num === 9) {
      return 'IX';
    } else if (num >= 5) {
      return 'V';
    }
    return '';
  }

  numeroModulo50(numero: number) {

    const num = numero % 50;
    if (num >= 40) {
      return 'XL';
    } else if (num >= 30) {
      return 'XXX';
    } else if (num >= 20) {
      return 'XX';
    } else if (num >= 10) {
      return 'X';
    }
    return '';
  }
  numeroModulo100(numero: number) {
    const num = numero % 100;
    if (num >= 50) {
      return 'L';
    }
    return '';
  }

  numeroModulo500(numero: number) {
    const num = numero % 500;
    if (num >= 400) {
      return 'CD';
    } else if (num >= 300) {
      return 'CCC';
    } else if (num >= 200) {
      return 'CC';
    } else if (num >= 100) {
      return 'C';
    }
    return '';
  }
  numeroModulo1000(numero: number) {
    if (numero >= 1000) {
      return 'M';
    }
    return '';
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
