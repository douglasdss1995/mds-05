import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { EspecialidadeModel } from '../../models/especialidade';
import { EspecialidadeService } from '../services/especialidade.service';

const ELEMENT_DATA: EspecialidadeModel[] = [{ id: 1, nome: 'Clinica Geral' }];

@Component({
  selector: 'app-especialidades',
  imports: [
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.scss',
})
export class EspecialidadesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'action'];
  dataSource: Array<EspecialidadeModel> = ELEMENT_DATA;
  nome = '';

  public constructor(private especialidadeService: EspecialidadeService) {}

  public ngOnInit(): void {
    this.getEspecialidades();
  }

  public getEspecialidades() {
    this.especialidadeService.getEspecialidades().subscribe((response) => {
      this.dataSource = response;
    });
  }

  public save() {
    const especialidade: EspecialidadeModel = {
      nome: this.nome,
    };
    this.especialidadeService
      .createEspecialidade(especialidade)
      .subscribe(() => {
        this.getEspecialidades();
      });
  }
}
