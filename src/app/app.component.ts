import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = "Kuririn";
  animal = { name: 'Kuririn' };

  // isGreen: boolean = true;

  // mudarParaVerde() {
  //   this.isGreen = true;
  // }

  // mudarParaLaranha() {
  //   this.isGreen = false;
  // }

  // fontSize: number = 15;
  // textColor: 'green' | 'orange' = 'orange';
  // buttonText: 'Verde' | 'Laranja' = 'Laranja';
  // stylesString: string = 'font-size: 15px; color: green';
  // stylesObj = {
  //   'font-size': this.fontSize + 'px',
  //   'color': this.textColor
  // };

  // aumentarTamanhoFonte() {
  //   this.fontSize += 1;

  //   this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;
  //   this.stylesObj['font-size'] = this.fontSize + 'px';
  //   this.  stylesObj = {
  //   'font-size': this.fontSize + 'px',
  //   'color': this.textColor
  // };
  // }

  // alternarFontColor() {
  //   if(this.textColor === 'green') {
  //     this.textColor = 'orange';
  //     this.buttonText = 'Verde';
  //   } else {
  //     this.textColor = 'green';
  //     this.buttonText = 'Laranja';
  //   }

  //   this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;
  //   this.stylesObj = {
  //   'font-size': this.fontSize + 'px',
  //   'color': this.textColor
  //   };
  // }

  // indexPessoaSelecionada: number | undefined;
  // listPessoas = [
  //   { nome: 'Kuririn da Silva', idade: 1 },
  //   { nome: 'Fulano sa Silva', idade: 34 },
  //   { nome: 'Jorginho Carvalho', idade: 55 },
  //   { nome: 'Joãozinho da Silva', idade: 18 }
  // ];

  // pessoaSelecionada(index: number) {
  //   this.indexPessoaSelecionada = index;
  // }

  // selectPerson(index: number) {
  //   this.personSelectedIndex = index;
  // }

  // minhaProp = false;
  // pessoa: any = {
  //   status: "false",
  //   name: ""
  // }

  // toggleProp() {
  //   this.minhaProp = !this.minhaProp;
  // }

  // isTruthy() {
  //   // return {};
  //   // // return true;
  //   // // return 1;
  //   // // return "teste";
  //   // // return "0";
  //   // // return "false";
  //   return this.pessoa.status;
  // }

  // isFalsy() {
  //   // return false;
  //   // return 0;
  //   // return "";
  //   // return '';
  //   // return null;
  //   // return undefined;
  //   // return -0;
  //   // return NaN;
  //   // return this.pessoa.name;
  //   return this.pessoa.endereco?.rua;
  // }

  // name: string = 'Kuririn';

  // handleInputChange(event: any) {
  //   console.log(event);
  // }

  // inputText = "Texto inicial alterado";
  // inputType = "text";
  // isDisabled = false;

  // buttonTitle = "Texto do botãosss";
  // buttonDisabled = false;

  // widthButton1 = "110px";
  // widthButton2 = 130;
  // backgropundCollorButton1 = "red"
  // stylesObj = { width: '160px', backgroundColor: 'gray', color: 'white' }

  // isRedButton = true;
  // isGreenButton = true;


  // habilitarInput() {
  //   this.isDisabled = false;
  // }

  // desabilitarInput() {
  //   this.isDisabled = true;
  // }

  // setPasswordTypeInput() {
  //   this.inputType = "password";
  // }

  // setTextTypeInput() {
  //   this.inputType = "text";
  // }

  // logInputText() {
  //   console.log(this.inputText);
  // }

  // handleInputKeyup(event: KeyboardEvent) {
  //   const currentText = (event.target as HTMLInputElement).value
  //   console.log(currentText);
  // }

  // handleInputEvent(event: Event) {
  //   const currentText = (event.target as HTMLInputElement).value;
  //   console.log(currentText);
  // }

  // onButtonClick() {
  //   this.buttonTitle = "Título alteradooo"
  //   this.buttonDisabled = !this.buttonDisabled;
  // }

  // atualizarStyleObj() {
  //   this.stylesObj.width = '170px';
  //   this.stylesObj.backgroundColor = 'green';
  // }

  // atualizarStyleObjCorreto() {
  //   this.stylesObj = { width: '170px', backgroundColor: 'green', color: 'white' }
  // }

  // atualizarWidth() {
  //   this.widthButton2 = 200;
  // }
}
