import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']

})
export class TaskListComponent {

  tasks = ['Tâche 1', 'Tâche 2', 'Tâche 3', 'Tâche 4', 'Tâche 5'];
  newTask!: string;

// Pour créer ou ajouter une tâche
  addTask() {
    if (this.newTask && this.newTask.trim().length > 0) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

// Pour supprimer une tâche
  deleteTask(task: string) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

// Pour mettre à jour la tâche
  updateTask(oldTask: string, newTask: string) {
    const index = this.tasks.indexOf(oldTask);
    if (index !== -1) {
      this.tasks[index] = newTask;
    }
  }

}
