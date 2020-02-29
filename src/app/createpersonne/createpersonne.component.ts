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
  sexe: string;
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public postPersonne() {
    console.log(this.sexe);
    this.personne.sexe = this.sexe;
    console.log(this.personne);
    return this.personneService.postRequest(this.personne).subscribe( data =>
      this.onNoClick());
  }


}
