import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Kuririn';

  handleInputChange(event: any) {
    this.name = event;
  }

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
