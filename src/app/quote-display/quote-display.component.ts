import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { DateCounterPipe } from '../date-counter.pipe';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

  quotes = [
    // tslint:disable-next-line:max-line-length
    new Quote(1, 'I love you more that i believe you had liked me for my own sake and for nothing else.', 'John Keats', 'Jabari', new Date(2017, 2, 15)),
    // tslint:disable-next-line:max-line-length
    new Quote(2, 'But man is not made for defeat.A man can be destroyed but not defeated', 'Ernest Hemmingway', 'Mandela ', new Date(2019, 1, 21)),
    // tslint:disable-next-line:max-line-length
    new Quote(3, 'Kindness and faithfulness keep a king safe, through kindness his throne is made secure.', 'Solomon', 'David Ewagata', new Date(0, 0, 0)),
    // tslint:disable-next-line:max-line-length
    new Quote(4, 'Faith is taking the first step even when you don’t see the whole staircase.”', 'Martin Luther', 'Tutu Manene', new Date(2019, 3, 23))
  ];

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.author = quote.author;
    quote.name = quote.name;
    quote.date = new Date(quote.date);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
