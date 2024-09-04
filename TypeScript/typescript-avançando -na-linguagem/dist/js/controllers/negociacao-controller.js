import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MenssagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.menssagemView = new MenssagemView('#mensagemView');
        this.SABADO = 6;
        this.DOMINGO = 0;
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacaoTemp = new Negociacao(null, 0, 0);
        const negociacao = negociacaoTemp.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.menssagemView.update('Apenas negociações me dias úteis são visiveis!');
            return;
        }
        this.limparFormulario();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.atualizaView();
    }
    ehDiaUtil(dia) {
        return dia.getDay() > DiasDaSemana.DOMINGO && dia.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.menssagemView.update('Negociacao adicionada com sucesso!');
    }
}
