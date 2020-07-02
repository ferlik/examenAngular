import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdinateurService } from 'src/app/services/ordinateur.service';
import { Ordinateur } from 'src/app/models/ordinateur';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-ordinateur',
  templateUrl: './detail-ordinateur.component.html',
  styleUrls: ['./detail-ordinateur.component.css']
})
export class DetailOrdinateurComponent implements OnInit {

  ordi:Ordinateur;
  ordidelete:Ordinateur[];

  constructor(private route : ActivatedRoute, private ordinateurService : OrdinateurService,private toast : ToastrService) { }

  isLoading:boolean;

  ngOnInit(): void {
    this.isLoading = true;
    this.ordinateurService.getOneOrdi(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe((data:
      Ordinateur) => {
      this.ordi = data;
      this.isLoading = false;
    });
   }
   suprimOrdi(id: number): void {
    this.isLoading = true;
    this.ordinateurService.suprimOrdi(id).subscribe(then => {
      this.ordinateurService.getOrdi().subscribe((data: Ordinateur[]) => {
        this.ordidelete = data;
        this.isLoading = false;
        this.toast.error("LePC à été supprimée !"); //on affiche la notification
      });
    })
  }
}

