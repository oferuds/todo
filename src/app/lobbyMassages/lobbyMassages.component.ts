import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './lobbyMassages.component.html',
  styleUrls: ['./lobbyMassages.component.css']
})
export class LobbyMassagesComponent implements OnInit {
  public catId: string;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.todoService.loadTodos('8M0OxnO1WeXiPS196Aiq').subscribe(val => {
      console.log(val);
      var str = JSON.stringify(val, null, 2);
      this.catId = str;
    });
    // this.catId = this.todoService.loadTodos('8M0OxnO1WeXiPS196Aiq').;
  }

  get playingValue() {
    return this.catId;
  }

  set playingValue(playing) {
    this.catId = playing;
  }
}



