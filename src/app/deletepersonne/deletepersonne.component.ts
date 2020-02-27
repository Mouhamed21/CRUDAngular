import {Component, Inject, OnInit} from '@angular/core';
import {PersonneService} from '../../services/personne.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-deletepersonne',
  templateUrl: './deletepersonne.component.html',
  styleUrls: ['./deletepersonne.component.sass']
})
export class DeletepersonneComponent implements OnInit {

  constructor(private personneService: PersonneService, public dialogRef: MatDialogRef<DeletepersonneComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data.id);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public deletPersonne() {
    return this.personneService.deleteRequest(this.data.id).subscribe(data =>
      this.onNoClick());
  }

}
