import { Component, OnInit, Input } from '@angular/core';
import { CandidateService } from 'src/app/admin/services/s-candidate/candidate.service';

/**
 * @Author Eloi Martorell Martin
 */

@Component({
  selector: 'app-form-candidate',
  templateUrl: './form-candidate.component.html',
  styleUrls: ['./form-candidate.component.css'],
})
export class FormCandidateComponent implements OnInit {
  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {}

  //variable que indica si previamente se ha creado
  isCandidateAdded = false;

  //esta variable es para el edit
  @Input() isEdit = false;
  @Input() id = "";

  //objeto que representa la tabla
  @Input() candidate = {
    candidate_name: '',
    candidate_surname: '',
  };

  validarNombre: boolean = false;
  validarApellidos: boolean = false;

  updateCandidate(): void {
    let data = {
      candidate_name: this.candidate.candidate_name,
      candidate_surname: this.candidate.candidate_surname,
    };

    if (!data.candidate_name || !data.candidate_surname) {
      if (!data.candidate_name) {
        this.validarNombre = true;
      }
      if (!data.candidate_surname) {
        this.validarApellidos = true;
      }
      return;
    } else {
      this.candidateService.updateCandidate(this.id,data).subscribe({
        next: (response) => {
          console.log(response);
          location.reload();
        },
        error: (err) => {
          console.log(err.error.msg);
        },
      });
    }
  }

  cancelar(){
    location.reload();
  }

  addCandidate(): void {
    let data = {
      candidate_name: this.candidate.candidate_name,
      candidate_surname: this.candidate.candidate_surname,
    };

    if (!data.candidate_name || !data.candidate_surname) {
      if (!data.candidate_name) {
        this.validarNombre = true;
      }
      if (!data.candidate_surname) {
        this.validarApellidos = true;
      }
      return;
    } else {
      this.candidateService.createCandidate(data).subscribe({
        next: (response) => {
          console.log(response);
          this.isCandidateAdded = true;
        },
        error: (err) => {
          console.log(err.error.msg);
        },
      });
    }
  }

  //esta función resetea el objeto y pasa a true el added
  newCandidate() {
    this.isCandidateAdded = false;

    this.candidate = {
      candidate_name: '',
      candidate_surname: '',
    };
  }
}
