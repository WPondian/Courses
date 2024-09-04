import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MenssagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private menssagemView = new MenssagemView('#mensagemView');
    private readonly SABADO = 6;
    private readonly DOMINGO = 0;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    public adiciona(): void {
        const negociacaoTemp = new Negociacao(null, 0, 0);
        const negociacao = negociacaoTemp.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.ehDiaUtil(negociacao.data)) {
            this.menssagemView.update('Apenas negociações me dias úteis são visiveis!');
            return;
        }
        this.limparFormulario();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.atualizaView();
    }

    public ehDiaUtil(dia: Date): boolean {
        return dia.getDay() > DiasDaSemana.DOMINGO && dia.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.menssagemView.update('Negociacao adicionada com sucesso!');
    }
}