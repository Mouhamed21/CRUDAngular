import {Component, Injectable, OnInit} from '@angular/core';
import {PersonneService} from '../../services/personne.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CreatepersonneComponent} from '../createpersonne/createpersonne.component';
import {EditpersonneComponent} from '../editpersonne/editpersonne.component';
import {Personne} from '../../modeles/personne';
import {DeletepersonneComponent} from '../deletepersonne/deletepersonne.component';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  personnes = [];
  p = 1;
  term: string;
  constructor(private personneService: PersonneService , public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getPersonnes();
  }

  public getPersonnes() {
    return this.personneService.getRequest().subscribe((data: any[]) => {
      console.log(data);
      this.personnes = data;
    });
  }
  addPersonne(): void {
    const dialogRef = this.dialog.open(CreatepersonneComponent , {
      width: '500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getPersonnes();
    });
  }
  editPersonne(personne: Personne): void {
    const dialogRef = this.dialog.open(EditpersonneComponent , {
      width: '500px',
      height: '500px',
      data: {personne}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getPersonnes();
    });
  }
  deletPersonne(id: number): void {
    const dialogRef = this.dialog.open(DeletepersonneComponent , {
      width: '500px',
      height: '500px',
      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getPersonnes();
    });
  }
}



