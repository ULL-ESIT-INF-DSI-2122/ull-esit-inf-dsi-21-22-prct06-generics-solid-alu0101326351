/**
 * Clase para cifrar mensajes del cifrado indescifrable
 */
export class Decoder {
    /**
     * Recibe un array con las letras del alfabeto con el que se va a trabajar
     * @param letters 
     */
    constructor(private letters: string[]) {}

    /**
     * Recibe un mesaje cifrado y una clave y devuelve un string con el mensaje descifrado respecto al alfabeto
     * @param message 
     * @param key 
     * @returns 
     */
    public decode(message: string, key: string): string {
        let result: string = '';
        for (let i: number = 0; i < message.length; i++) {
            const iKey: string = key[i % key.length];
            let index: number = ((this.letters.indexOf(message[i])) - (this.letters.indexOf(iKey) + 1));

            if (index < 0) {
                index += this.letters.length;
            }

            result += this.letters[index];
        }
        return result;
    }
}