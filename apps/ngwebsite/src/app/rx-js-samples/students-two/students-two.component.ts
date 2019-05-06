import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { STUDENTS, Student, Program } from '../../shared/models/students.model';

interface FilterFormValue {
  sex: string;
  category: string;
  status: string;
}

@Component({
  selector: 'students-two',
  templateUrl: './students-two.component.html',
  styleUrls: ['./students-two.component.scss']
})
export class StudentsTwoComponent implements OnInit {

  students: Array<Student> = [];
  filteredStudents: Array<Student> = [];

  sexOptions: Array<string> = [];
  programCategoryOptions: Array<string> = [];
  programStatusOptions: Array<string> = [];

  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getStudents();
  }

  private getStudents() {
    // you would get students from an API in a real word scenario, now we just simply initialize it here
    // I put the data in a different file for convinience
    this.students = STUDENTS;
    // also setting filtered students to all of the students to display all of them at the start
    this.filteredStudents = this.students;
    // again, normally you would get these options from the backend but here we simply reduce our array of students
    this.getSexOptions();
    this.getProgramCategoryOptions();
    this.getProgramStatusOptions();
    // when we get all our data initialize the filter form
    this.initFilterForm();
  }

  private getSexOptions() {
    // get all unique values from array of students
    this.sexOptions = Array.from(new Set(this.students.map((student: Student) => student.sex)));
  }

  private getProgramCategoryOptions() {
    // this is a little bit trickier and normally you get these from the backend
    // but suffice it to say that at the end we get all unique values for program categories
    const categoryGroups = this.students.map((student: Student) => {
      return student.programs.map((program: Program) => program.programCategory);
    });
    this.programCategoryOptions = Array.from(new Set(categoryGroups.reduce((a, b) => a.concat(b))));
  }

  private getProgramStatusOptions() {
    // same as categories, we get all unique values for program statuses
    const statusGroups = this.students.map((student: Student) => {
      return student.programs.map((program: Program) => program.programStatus);
    });
    this.programStatusOptions = Array.from(new Set(statusGroups.reduce((a, b) => a.concat(b))));
  }

  private initFilterForm() {
    // initialize the form with empty strings, in html the 'All' option will be selected
    this.filterForm = this.formBuilder.group({
      sex: [''],
      category: [''],
      status: ['']
    });
    // init watch for any form changes
    this.watchFormChanges();
  }

  private watchFormChanges() {
    // this will fire on any filter changes and call the filtering method with the value of the form
    this.filterForm.valueChanges.subscribe((value: FilterFormValue) => this.filterStudents(value));
  }

  private filterStudents(value: FilterFormValue) {
    // again, this operation would be executed on the backend, but here you go
    // initialize a new array of all the students
    let filteredStudents: Array<Student> = this.students;
    if (value.sex) {
      // if filter for sex is set, simply filter for any student that has the same value for sex
      filteredStudents = filteredStudents.filter((student: Student) => student.sex === value.sex);
    }
    if (value.category && !value.status) {
      // when category is set but status is not, filter for any student that has the category in any of its programs 
      filteredStudents = filteredStudents.filter((student: Student) => {
        return student.programs
          .map((program: Program) => program.programCategory)
          .includes(value.category);
      });
    }
    if (!value.category && value.status) {
      // when status is set but category is not, filter for any student that has the status in any of its programs
      filteredStudents = filteredStudents.filter((student: Student) => {
        return student.programs
          .map((program: Program) => program.programStatus)
          .includes(value.status);
      });
    }
    if (value.category && value.status) {
      // when category and status is both set, filter for any student that has the status AND category in any of its programs
      filteredStudents = filteredStudents.filter((student: Student) => {
        return student.programs
          .filter((program: Program) => program.programCategory === value.category)
          .map((program: Program) => program.programStatus)
          .includes(value.status);
      });
    }
    // set the filtered students to display
    this.filteredStudents = filteredStudents;
  }

}
