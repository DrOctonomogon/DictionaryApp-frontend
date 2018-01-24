import {Component, OnInit} from '@angular/core';
import {DictionaryEntry} from '../model/dictionaryEntry';
import {DictionaryService} from '../services/dictionary.service';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-display-entry',
  templateUrl: './display-entry.component.html',
  styleUrls: ['./display-entry.component.css']
})
export class DisplayEntryComponent implements OnInit {

  dictionaryEntry: DictionaryEntry;

  constructor(private dictionaryService: DictionaryService) {
    this.dictionaryEntry = this.dictionaryService.lastEntry;
  }

  ngOnInit(): void {
    TimerObservable.create(0, 500).subscribe(entry => {this.dictionaryEntry = this.dictionaryService.lastEntry})
  }

}
