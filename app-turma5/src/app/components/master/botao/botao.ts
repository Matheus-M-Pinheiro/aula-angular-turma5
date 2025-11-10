import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.html',
  styleUrl: './botao.scss',
})
export class Botao {

  textoBotao: InputSignal<string> = input('DEFAULT')
  noClique: OutputEmitterRef<void> = output<void>()

  clicado(): void{
    this.noClique.emit()
  }

}
