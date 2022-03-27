/**
 * Clase para cifrar mensajes del cifrado indescifrable
 */
export class Encoder {

    /**
     * Recibe un array con las letras del alfabeto con el que se va a trabajar
     * @param letters 
     */
    constructor(private letters: string[]) {}

    /**
     * Recibe un mesaje y una clave y devuelve un string con el mensaje cifrado respecto al alfabeto
     * @param message 
     * @param key 
     * @returns 
     */
    public encode(message: string, key: string): string {
        let cifrado: string = '';
        for (let i: number = 0; i < message.length; i++) {
            const char: string = key[i % key.length];
            cifrado += this.letters[((this.letters.indexOf(message[i])) + (this.letters.indexOf(char) +1)) % this.letters.length];
        }
        return cifrado;
    }
}

