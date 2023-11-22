import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlataformaService } from 'src/app/plataforma.service';
import { Plataforma } from 'src/app/Plataforma';

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private plataformaService : PlataformaService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Plataforma';
    this.formulario = new FormGroup({
      idPlataforma: new FormControl(null),
      nomePlataforma: new FormControl(null),
      jogos: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const plataforma : Plataforma = this.formulario.value;
    this.plataformaService.cadastrar(plataforma).subscribe(result => {
      alert('plataforma inserido com sucesso.');
    })
  } 
}
