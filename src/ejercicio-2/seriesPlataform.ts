import { BasicStreamableCollection } from "./basicStreamable";
import { Serie } from "./types";

export class SeriesPlatform extends BasicStreamableCollection<Serie> {
    constructor(series: Serie[]) {
        super(series);
    }

    public isFinished(name: string): boolean {
        let result: boolean
        this.content.forEach((item: Serie) => {
            if (item.name === name) {
                result = item.finish;
            }
        });
        return result;
    }
}