import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  Title:string = "To Do List Application";
  imageLink:string = "https://th.bing.com/th/id/OIP.bf_Um5shxy9Snj8HbRR0ZAHaHa?rs=1&pid=ImgDetMain ";
  
  tasks : string[] =[];
  newTask : string="";
  isAvalible : boolean = false;

  addTask()
  {
    if(this.newTask.trim() !=="")
      {
        this.tasks.push(this.newTask);
        this.newTask="";
        this.isAvalible = true;
      }
      console.log(this.tasks);
  }
  RemoveTask(index : number)
  {
    this.tasks.splice(index, 1)
    this.isAvalible = this.tasks.length > 0;
  }
  /* EditTask(index : number)
  {
    let updateTask = prompt("Edit Task",this.tasks[index]);
    if(updateTask !==null)
      {
        this.tasks[index] = updateTask.trim();
      }
  } */
  EditTask(index : number, newTaskEdit : string) : string | void 
  {
    if(newTaskEdit.trim() !== "")
      {
        this.tasks[index] = newTaskEdit;
      }
      else
      {
        newTaskEdit = this.tasks[index];
        return this.newTask = newTaskEdit;
      }
      this.newTask= "";

  }
}
