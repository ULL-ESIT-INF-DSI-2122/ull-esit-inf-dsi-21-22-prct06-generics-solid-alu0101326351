import { BasicStreamableCollection } from "./basicStreamable";
import { Documental } from "./types";

export class DocumentalsPlataform extends BasicStreamableCollection<Documental> {
    constructor(docs: Documental[]) {
        super(docs);
    }

    public getByTopic(name: string): string | undefined {
        let result: string = "";
        this.content.forEach((item: Documental) => {
            if (item.topic == name) {
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