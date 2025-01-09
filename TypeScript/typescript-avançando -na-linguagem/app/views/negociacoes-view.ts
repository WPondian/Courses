import { Negociacoes } from "../models/negociacoes.js";
import { escapar } from "../src/decorators/escapar.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map((negociacao) => {
            return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `
        }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatar(data: Date) {
        new Intl.DateTimeFormat().format(data);
    }
}