import {Component, Input, OnInit} from '@angular/core';
import {DictionaryService} from '../services/dictionary.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = '';

  constructor(private dictionaryService: DictionaryService) {
  }

  @Input()
  searchForWord(input: string) {
    this.searchTerm = input;
    if (this.searchTerm.length > 0) {
      console.log(this.searchTerm);
      this.dictionaryService.getEntryByWord(this.searchTerm);
      this.searchTerm = '';
    }
  }

  ngOnInit() {

  }

}
