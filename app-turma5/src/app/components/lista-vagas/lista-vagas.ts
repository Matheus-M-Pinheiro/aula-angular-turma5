import { Component, signal, WritableSignal } from '@angular/core';
import { VagasService } from '../../services/vagas-service';
import { PedidoVaga } from '../../models/pedido-vaga';

@Component({
  selector: 'app-lista-vagas',
  imports: [],
  templateUrl: './lista-vagas.html',
  styleUrl: './lista-vagas.scss',
})
export class ListaVagas {

  contador: WritableSignal<number> = signal(0);

  nomes: string[] = []

  pedidoVagas: WritableSignal<PedidoVaga[]> = signal([])

  constructor(private vagasService: VagasService){}

  add():void {
    this.contador.update( valorAntigo => valorAntigo + 1)
  }

  carregarPedidos(): void{
    this.vagasService.getPedidosVagas().subscribe({
      next: data => {
        console.log(data)
        this.pedidoVagas.set(data)
      }, error: error => {
        console.log(error)
      }
    })
  }

}