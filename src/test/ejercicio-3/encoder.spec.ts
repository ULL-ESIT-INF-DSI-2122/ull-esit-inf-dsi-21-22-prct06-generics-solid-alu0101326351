import 'mocha';
import {expect} from 'chai';
import { Encoder } from '../../ejercicio-3/encoder';

describe('Cifrado Cesar', () => {

  let prueba = new Encoder(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                              'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);

  it('Permite cifrar', () => {
        expect(prueba.encode('HOLAESTOESUNAPRUEBA', 'CLAVE')).to.be.equal('KAMWJVFPAXXYBMWXPCW');
  });

});