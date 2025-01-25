import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'C#', image: 'assets/csharp.png' },
    { name: '.NET', image: 'assets/dotnet.png' },
    { name: 'Angular', image: 'assets/angular.png' },
    { name: 'C++', image: 'assets/cpp.png' },
    { name: 'Python', image: 'assets/python.png' },
    { name: 'JavaScript', image: 'assets/js.png' },
    { name: 'HTML', image: 'assets/html.png' },
    { name: 'CSS', image: 'assets/css.png' },
  ];
  
}