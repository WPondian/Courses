import { logarTempoDeExecucao } from "../src/decorators/logar-tempo-de-execucao.js";
import { inspect } from "../src/decorators/inspect.js"

export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {

        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Selector ${seletor} não existe no DOM. Verefique.`);
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}