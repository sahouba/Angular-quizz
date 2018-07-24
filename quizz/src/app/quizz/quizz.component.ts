import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  constructor(private dataService: DataService) { }
  categories:object;
   students:object;
   difficulties:object;
        ngOnInit()
         {
            //console.log('ok');
         //
         //  this.dataService.test().subscribe((res)=>{
         //      this.students=res;
         // });
          //console.log(this.students);
          this.dataService.getCategories().subscribe((res)=>{
            this.categories=res;
              });
          this.dataService.getDifficulies().subscribe((res)=>{
            this.difficulties=res;
          });
         }
  submit()
    {
    //console.log(this.nbQuestions);
      console.log(this.category);
  // console.log(this.difficulty);
    }

}
