import { Component, OnInit } from '@angular/core';
import {PersonneService} from '../../services/personne.service';
import {MatDialogRef} from '@angular/material/dialog';
import {Personne} from '../../modeles/personne';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createpersonne',
  templateUrl: './createpersonne.component.html',
  styleUrls: ['./createpersonne.component.sass']
})
export class CreatepersonneComponent implements OnInit {

  constructor(private personneService: PersonneService, public dialogRef: MatDialogRef<CreatepersonneComponent>) { }

  personne = new Personne();
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public postPersonne() {
    return this.personneService.postRequest(this.personne).subscribe( data =>
      this.onNoClick());
  }


}
