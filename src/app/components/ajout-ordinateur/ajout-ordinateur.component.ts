import { Component, OnInit } from '@angular/core';
import { OrdinateurService } from 'src/app/services/ordinateur.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ordinateur } from 'src/app/models/ordinateur';

@Component({
  selector: 'app-ajout-ordinateur',
  templateUrl: './ajout-ordinateur.component.html',
  styleUrls: ['./ajout-ordinateur.component.css']
})
export class AjoutOrdinateurComponent implements OnInit {
  ordi: Ordinateur;


  constructor(private ordinateurService: OrdinateurService, private router: Router,private toastr : ToastrService) { }

  isLoading: boolean;
  marqueDispo = this.ordinateurService.marqueDispo;
  typeDispo = this.ordinateurService.typeDispo;
  categoriDispo = this.ordinateurService.categoDispo;

  ngOnInit(): void {
    this.ordi = new Ordinateur();
  }

  ngSubmit(): void {
    this.ordinateurService.ajoutOrdi(this.ordi).subscribe(then => {
      this.router.navigate(['/home']);
      this.toastr.success("L'ordinateur a bien été ajouté !");
    });
  }

}
