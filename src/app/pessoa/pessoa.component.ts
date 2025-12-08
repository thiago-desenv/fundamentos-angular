import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent {
  @Input({ required: true }) personSelectedIndex: number | undefined;
  @Input({ required: true }) listPessoas: any;


  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
