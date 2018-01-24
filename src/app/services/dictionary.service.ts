import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DictionaryEntry } from '../model/dictionaryEntry';
import {Observable} from 'rxjs/Observable';
import {DisplayEntryComponent} from '../display-entry/display-entry.component';

@Injectable()
export class DictionaryService {

  serverUrl = 'http://localhost:8080/entries/';

  lastEntry: DictionaryEntry;
  // lastEntry: DictionaryEntry[];

  constructor(private http: HttpClient) {
    this.lastEntry = new DictionaryEntry("", "", "", "");
  }

  public getEntryByWord(word: string) {
    this.http.get<DictionaryEntry>(this.serverUrl + word)
      .subscribe(entry => {
          this.lastEntry = new DictionaryEntry(entry.entryTitle, entry.partOfSpeech, entry.definition, entry.etymology);

      // console.log(entry.etymology);
    });
  }
}
