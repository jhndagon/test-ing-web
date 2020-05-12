import { TestBed } from '@angular/core/testing';

import { NumerosRomanosService } from './numeros-romanos.service';

describe('NumerosRomanosService', () => {
  let service: NumerosRomanosService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = new NumerosRomanosService();
  });

  it('should be convert 1 to I', () => {
    const numeroRomano = service.convertirARomano(1);
    expect(numeroRomano).toEqual('I');
  });

  it('should be convert 2 to II', () => {
    const numeroRomano = service.convertirARomano(2);
    expect(numeroRomano).toEqual('II');
  });

  it('should be convert 3 to III', () => {
    const numeroRomano = service.convertirARomano(3);
    expect(numeroRomano).toEqual('III');
  });
  it('should be convert 4 to IV', () => {
    const numeroRomano = service.convertirARomano(4);
    expect(numeroRomano).toEqual('IV');
  });
  it('should be convert 5 to V', () => {
    const numeroRomano = service.convertirARomano(5);
    expect(numeroRomano).toEqual('V');
  });
  it('should be convert 6 to VI', () => {
    const numeroRomano = service.convertirARomano(6);
    expect(numeroRomano).toEqual('VI');
  });
  it('should be convert 7 to VII', () => {
    const numeroRomano = service.convertirARomano(7);
    expect(numeroRomano).toEqual('VII');
  });
  it('should be convert 8 to VIII', () => {
    const numeroRomano = service.convertirARomano(8);
    expect(numeroRomano).toEqual('VIII');
  });
  it('should be convert 9 to IX', () => {
    const numeroRomano = service.convertirARomano(9);
    expect(numeroRomano).toEqual('IX');
  });
  it('should be convert 10 to X', () => {
    const numeroRomano = service.convertirARomano(10);
    expect(numeroRomano).toEqual('X');
  });
  it('should be convert 11 to XI', () => {
    const numeroRomano = service.convertirARomano(11);
    expect(numeroRomano).toEqual('XI');
  });
  it('should be convert 12 to XII', () => {
    const numeroRomano = service.convertirARomano(12);
    expect(numeroRomano).toEqual('XII');
  });
  it('should be convert 13 to XIII', () => {
    const numeroRomano = service.convertirARomano(13);
    expect(numeroRomano).toEqual('XIII');
  });
  it('should be convert 14 to XIV', () => {
    const numeroRomano = service.convertirARomano(14);
    expect(numeroRomano).toEqual('XIV');
  });
  it('should be convert 15 to XV', () => {
    const numeroRomano = service.convertirARomano(15);
    expect(numeroRomano).toEqual('XV');
  });
  it('should be convert 16 to XVI', () => {
    const numeroRomano = service.convertirARomano(16);
    expect(numeroRomano).toEqual('XVI');
  });
  it('should be convert 17 to XVII', () => {
    const numeroRomano = service.convertirARomano(17);
    expect(numeroRomano).toEqual('XVII');
  });
  it('should be convert 18 to XVIII', () => {
    const numeroRomano = service.convertirARomano(18);
    expect(numeroRomano).toEqual('XVIII');
  });
  it('should be convert 19 to XIX', () => {
    const numeroRomano = service.convertirARomano(19);
    expect(numeroRomano).toEqual('XIX');
  });
  it('should be convert 20 to XX', () => {
    const numeroRomano = service.convertirARomano(20);
    expect(numeroRomano).toEqual('XX');
  });
  it('should be convert 24 to XXIV', () => {
    const numeroRomano = service.convertirARomano(24);
    expect(numeroRomano).toEqual('XXIV');
  });
  it('should be convert 40 to XL', () => {
    const numeroRomano = service.convertirARomano(40);
    expect(numeroRomano).toEqual('XL');
  });
  it('should be convert 50 to L', () => {
    const numeroRomano = service.convertirARomano(50);
    expect(numeroRomano).toEqual('L');
  });
  it('should be convert 60 to LX', () => {
    const numeroRomano = service.convertirARomano(60);
    expect(numeroRomano).toEqual('LX');
  });
  it('should be convert 84 to LXXXIV', () => {
    const numeroRomano = service.convertirARomano(84);
    expect(numeroRomano).toEqual('LXXXIV');
  });
  it('should be convert 100 to C', () => {
    const numeroRomano = service.convertirARomano(100);
    expect(numeroRomano).toEqual('C');
  });
  it('should be convert 150 to CL', () => {
    const numeroRomano = service.convertirARomano(150);
    expect(numeroRomano).toEqual('CL');
  });
  it('should be convert 200 to CC', () => {
    const numeroRomano = service.convertirARomano(200);
    expect(numeroRomano).toEqual('CC');
  });
  it('should be convert 284 to CCLXXXIV', () => {
    const numeroRomano = service.convertirARomano(284);
    expect(numeroRomano).toEqual('CCLXXXIV');
  });
  it('should be convert 1000 to M', () => {
    const numeroRomano = service.convertirARomano(1000);
    expect(numeroRomano).toEqual('M');
  });
});
