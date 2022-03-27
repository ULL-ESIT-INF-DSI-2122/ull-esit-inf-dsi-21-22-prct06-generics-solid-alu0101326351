import 'mocha';
import {expect} from 'chai';
import { Decoder } from '../../ejercicio-3/decoder';

describe('Cifrado Cesar', () => {

  let prueba = new Decoder(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                              'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);

  it('Permite cifrar', () => {
        expect(prueba.decode('KAMWJVFPAXXYBMWXPCW', 'CLAVE')).to.be.equal('HOLAESTOESUNAPRUEBA');
  });

});