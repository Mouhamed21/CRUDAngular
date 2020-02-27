import {Component, Inject, OnInit} from '@angular/core';
import {PersonneService} from '../../services/personne.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Personne} from '../../modeles/personne';

@Component({
  selector: 'app-editpersonne',
  templateUrl: './editpersonne.component.html',
  styleUrls: ['./editpersonne.component.sass']
})
export class EditpersonneComponent implements OnInit {
 personne = new Personne();
  constructor(private personneService: PersonneService, public dialogRef: MatDialogRef<EditpersonneComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.personne = this.data.personne;
    console.log(this.data);
    console.log(this.data.personne.id);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public editPersonne() {
    return this.personneService.editRequest(this.data.personne.id, this.personne).subscribe(data =>
    this.onNoClick());
  }

}
