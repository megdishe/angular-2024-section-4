import {Component, output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserInput} from "./user-input.model";
import {InvestmentResult} from "../investement-results/investment.result";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  userInput = output<UserInput>();

  onSubmit(userInput: UserInput) {
    console.log(userInput);
    this.userInput.emit(userInput);
  }

}
