import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputText = "Texto inicial alterado";
  inputType = "text";
  isDisabled = false;

  buttonTitle = "Texto do botãosss";
  buttonDisabled = false;

  habilitarInput() {
    this.isDisabled = false;
  }

  desabilitarInput() {
    this.isDisabled = true;
  }

  setPasswordTypeInput() {
    this.inputType = "password";
  }

  setTextTypeInput() {
    this.inputType = "text";
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value
    console.log(currentText);
  }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  onButtonClick() {
    this.buttonTitle = "Título alteradooo"
    this.buttonDisabled = !this.buttonDisabled;
  }
}
