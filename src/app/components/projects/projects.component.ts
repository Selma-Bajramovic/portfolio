import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Flood Risk Prediction System',
      description: 'An AI and Machine Learning-based application for predicting flood risks in specific regions (Mostar, Jablanica, and Fojnica). It uses historical and real-time weather data to evaluate potential flood risks and provide insights.',
      link: 'https://github.com/Selma-Bajramovic/ai-agent-flood-prediction',
      technologies: [
        'assets/python.png',
        'assets/flask.png',
        'assets/sklearn.png',
        'assets/pandas.png',
        'assets/numpy.png'
      ]
    },
    {
      title: 'Berg Klinika',
      description: 'A comprehensive software solution designed to optimize the operations of small clinics. It enables efficient patient registration, doctor management, and tracking of patient admissions and medical records.',
      link: 'https://github.com/Selma-Bajramovic/berg-klinika',
      technologies: [
        'assets/csharp.png',
        'assets/dotnet.png',
        'assets/angular.png',
        'assets/sql.png',
        'assets/nodejs.png'
      ]
    },
    {
      title: 'Blog Management API',
      description: 'The backend of the Blog Management Application, developed using .NET (C#). It handles user authentication with JWT, manages posts, and ensures secure access control for users and admins.',
      link: 'https://github.com/Selma-Bajramovic/blog-app-api',
      technologies: [
        'assets/dotnet.png',
        'assets/csharp.png',
        'assets/sql.png',
        'assets/jwt.png'
      ]
    },
    {
      title: 'Blog Management Web',
      description: 'The frontend of the Blog Management Application, built with Angular. It provides an interface for users to interact with posts, register, log in, and perform actions based on their roles (user/admin).',
      link: 'https://github.com/Selma-Bajramovic/blog-app-web',
      technologies: [
        'assets/angular.png',
        'assets/html.png',
        'assets/css.png'
      ]
    },
    {
      title: 'Smart Alarm System',
      description: 'A comprehensive IoT-based smart alarm system integrating Arduino, ESP8266, Firebase, and a user interface built with HTML, CSS. The system features real-time updates, a buzzer, and an LCD display for alerts, while communicating seamlessly between physical and web components.',
      link: 'https://github.com/Selma-Bajramovic/iot-Project',
      technologies: [
        'assets/arduino.webp',
        'assets/esp8266.jpg',
        'assets/firebase.png',
        'assets/html.png',
        'assets/css.png'
      ]
    },
    {
      title: 'Student Management System (DLWMS)',
      description: 'A desktop application developed using ASP.NET Core, C#, and Object-Oriented Programming principles for managing student data. It includes functionalities like generating reports, writing certificates, and managing consultations. The system uses Entity Framework Core for database interaction with SQLite and features a WinForms-based interface.',
      link: 'https://github.com/Selma-Bajramovic/students-desktop-app',
      technologies: [
        'assets/csharp.png',
        'assets/dotnet.png',
        'assets/entityframework.png',
        'assets/sqlite.png',
        'assets/winforms.png'
      ]
    }  
  ];
}