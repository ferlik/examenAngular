import { Component, OnInit } from '@angular/core';
import { OrdinateurService } from 'src/app/services/ordinateur.service';
import { ToastrService } from 'ngx-toastr';
import { Ordinateur } from 'src/app/models/ordinateur';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ordi: Ordinateur[];

  constructor(private ordiService:OrdinateurService,private toastr: ToastrService) { }

  isLoading: boolean;

  ngOnInit(): void {
    this.isLoading = true;
    this.ordiService.getOrdi().subscribe((data: Ordinateur[]) => {
      this.ordi = data;
      this.isLoading= false;
  });

  }
  suprimOrdi(id: number): void {
    this.isLoading = true;
    this.ordiService.suprimOrdi(id).subscribe(then => {
      this.ordiService.getOrdi().subscribe((data: Ordinateur[]) => {
        this.ordi = data;
        this.isLoading = false;
        this.toastr.error("LePC à été supprimée !"); //on affiche la notification
      });
    })
  }

}
