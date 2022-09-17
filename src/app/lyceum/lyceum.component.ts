import { Component, OnInit } from '@angular/core';
import question from '../../assets/question.json';
import { AnswersJson } from './model/answers-json.model';
import { Answers } from './model/answers.model';

@Component({
  selector: 'app-lyceum',
  templateUrl: './lyceum.component.html'
})
export class LyceumComponent implements OnInit {

  jsonValue: AnswersJson[] = question;

  searchValue: any;
  tab: Answers[] = [];
  filteredTab: Answers[] = [];

  constructor() { }

  ngOnInit(): void {
    this.jsonValue.forEach(value => {
      this.tab.push(new Answers(value.question, value.response));
    });
    this.filteredTab = this.tab;
  }

  changeSearchValue(): void {
    if (this.searchValue.length === 0) {
      this.filteredTab = this.tab;
    } else {
      this.filteredTab = [];
      const keywords = this.searchValue.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(' ').filter((val: string) => {
        return val.trim().length > 0;
      });
      this.filteredTab = this.tab.filter(e => {
        let counter = 0;
        keywords.forEach((keyword: string) => {
          if (e.questionNormalized?.includes(keyword)) {
            counter++;
          }
        });
        return counter == keywords.length;
      });
    }
  }

  clearInput(): void {
    this.searchValue = "";
    this.changeSearchValue();
  }
}

