import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './Todo';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, MovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todolist';

  // Appel de variable _todo qui instancie l'interface Toto.ts
  private todoliste: Todo[] = [
    { id: 1, content: 'Apprendre HTML', done: true, createdAt: new Date() },
    { id: 2, content: 'Apprendre CSS', done: true, createdAt: new Date() },
    {
      id: 3,
      content: 'Apprendre TYPESCRIPT',
      done: false,
      createdAt: new Date(),
    },
  ];

  // Appel de la fonction gette pour envoyer la liste des taches
  get todosListe() {
    return this.todoliste;
  }

  addTodo(event: SubmitEvent, content: string) {
    event.preventDefault(); //empeche la page de ce recharger
    //Cette fonction ajoute un nouvel  Objet au tableau todoliste avec
    this.todoliste.push({
      id: this.todoliste.length + 1,
      content: content,
      done: false,
      createdAt: new Date(),
    });
  }

  toogleDone(id: number) {
    const todo = this.todoliste.find((t) => t.id == id)!;
    todo.done = !todo.done;
  }

  deleteTodo(id: number) {
    this.todoliste = this.todoliste.filter((t) => t.id != id);
  }
}
