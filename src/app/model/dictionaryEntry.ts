export class DictionaryEntry {

  private _entryTitle: string;
  private _partOfSpeech: string;
  private _definition: string;
  private _etymology: string;

  constructor(entryWord, partOfSpeech, definition, etymology) {
    this._entryTitle = entryWord;
    this._partOfSpeech = partOfSpeech;
    this._definition = definition;
    this._etymology = etymology;
  }

  get entryTitle(): string {
    return this._entryTitle;
  }

  set entryTitle(value: string) {
    this._entryTitle = value;
  }

  get partOfSpeech(): string {
    return this._partOfSpeech;
  }

  set partOfSpeech(value: string) {
    this._partOfSpeech = value;
  }

  get definition(): string {
    return this._definition;
  }

  set definition(value: string) {
    this._definition = value;
  }

  get etymology(): string {
    return this._etymology;
  }

  set etymology(value: string) {
    this._etymology = value;
  }
}
