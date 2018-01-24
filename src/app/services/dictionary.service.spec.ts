import { TestBed, inject } from '@angular/core/testing';

import { DictionaryService } from './dictionary.service';
import {DictionaryEntry} from '../model/dictionaryEntry';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


let service;
let inputString;
let mockEntry1;
let mockEntry2;

describe('DictionaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ DictionaryService]
    });
    service = TestBed.get(DictionaryService);
  });

  it('should be created', inject([DictionaryService], (service: DictionaryService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getEntryByWord', () => {
    beforeEach(() => {
      inputString = "spaghetti";
      mockEntry1 = new DictionaryEntry({entryWord: "spaghetti", partOfSpeech: "noun", definition: "pasta in the form of long strings"});
    });

    it('should return a DictionaryEntry object for the word passed in', () => {
      expect(service.getEntryByWord(inputString)).toEqual(mockEntry1);
    })
  });


});
