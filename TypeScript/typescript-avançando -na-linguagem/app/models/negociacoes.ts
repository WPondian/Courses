import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes();
negociacoes.lista()