import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdinateurService } from 'src/app/services/ordinateur.service';
import { ToastrService } from 'ngx-toastr';
import { Ordinateur } from 'src/app/models/ordinateur';

@Component({
  selector: 'app-modif-ordinateur',
  templateUrl: './modif-ordinateur.component.html',
  styleUrls: ['./modif-ordinateur.component.css']
})
export class ModifOrdinateurComponent implements OnInit {

  ordi : Ordinateur;
  isLoading:boolean;
  marqueDispo = this.ordinateurService.marqueDispo;
  typeDispo = this.ordinateurService.typeDispo;
  categoriDispo = this.ordinateurService.categoDispo;

  constructor(private activatedRoute: ActivatedRoute, private ordinateurService: OrdinateurService, private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.ordinateurService.getOneOrdi(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe((data: Ordinateur) => {
      this.ordi = data;
      this.isLoading = false;
    });
  }

  modifOrdi(): void {
    this.isLoading = true;
    this.ordinateurService.modifOrdi(this.ordi).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/home']);
      this.toastr.success("Le PC à bien été modifié !");
    })
  }

}
