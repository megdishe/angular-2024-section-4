import {Component, computed, effect, input, OnChanges, SimpleChanges} from '@angular/core';
import {InvestmentResult} from "./investment.result";
import {CurrencyPipe, DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    DecimalPipe,
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  protected isEmpty = true;
  investmentResults = input.required<InvestmentResult[]>();
  private effect = effect(() => {
    this.isEmpty = this.investmentResults().length == 0;
  })


}
