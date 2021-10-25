import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  userFormGroup!: FormGroup;
  title = 'angularPhase2';


  ngOnInit(): void {

  }
  // get check(): AbstractControl {
  //   return <AbstractControl>this.userFormGroup.get('_check');
  // }
  //
  // get todo(): AbstractControl {
  //   return <AbstractControl>this.userFormGroup.get('_todo');
  // }
  //
  // get at(): AbstractControl {
  //   return <AbstractControl>this.userFormGroup.get('_at');
  // }

  duplicateList(n: number): Array<number>{
    let array: Array<number> = [];
    for (let i = 0; i<n; i++){
      array.push(i);
    }
    return array;
  }

}
