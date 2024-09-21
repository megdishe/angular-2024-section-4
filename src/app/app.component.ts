import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResultsComponent} from "./investement-results/investment-results.component";
import {InvestmentResult} from "./investement-results/investment.result";
import {UserInput} from "./user-input/user-input.model";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ]
})
export class AppComponent {
  investmentResults: InvestmentResult[] = [];

  protected calculate(userInput: UserInput) {
    let investmentValue = userInput.initialInvestment;
    const investmentResults = [];
    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
      investmentResults.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userInput.initialInvestment + userInput.initialInvestment * year,
      });
    }
    this.investmentResults = investmentResults;
  }
}
