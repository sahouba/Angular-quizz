import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  constructor(private dataService: DataService) { }
  message:string="coucou";
  fruits:string[]=['Fraise','Vanille','Abricot'];
        ngOnInit() {
        //console.log('ok');
        this.dataService.test();

  }

}
