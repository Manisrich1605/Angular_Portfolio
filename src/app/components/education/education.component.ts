import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  qualifications: any[] = [];
  constructor() { }
  ngOnInit(): void {
    this.fetchQualifications();
  }
  fetchQualifications(): void {
    // Hardcoded data for demonstration
    this.qualifications = [
      {
        degree: 'SSC.',
        duration: '2016-17',
        institution: 'Ravi High School, Nirmal',
        result: 'cpga:9.3'
      },
      {
        degree: 'Intermediate',
        duration: '2017-19',
        institution: 'Narayana Junior College',
        result: 'percentage:98.1'
      },
      {
        degree: 'B.Tech',
        duration: '2019-2023',
        institution: 'Sreenidhi institute of science and technology',
        result: 'cgpa:8.6'
      }
    ];
  }
 }
 
 




