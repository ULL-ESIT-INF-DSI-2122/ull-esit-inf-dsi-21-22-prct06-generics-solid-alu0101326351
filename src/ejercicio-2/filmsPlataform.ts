import { Film } from "./types";
import { BasicStreamableCollection } from "./basicStreamable";

export class FilmsPlatform extends BasicStreamableCollection<Film> {
    constructor(films: Film[]) {
        super(films);
    }

    public getPriceOf(name: string): string | undefined {
        let price: string = "";
        this.content.forEach((item: Film) => {
            if (item.name == name) {
                price += item.name + " -> " + item.rentPrice;
            }
        });

        if (price.length !== 0) {
            return price;
        } else {
            return undefined;
        }
    }

    public searchByActor(name: string): string | undefined {
        let result: string = "";
        this.content.forEach((item: Film) => {
            if (item.mainActor == name) {
                result += item.name + "\n";
            }
        });

        if (result.length !== 0) {
            return result;
        } else {
            return undefined;
        }
    }
}