import { Component, OnInit } from '@angular/core';
import { CandidatePositionService } from 'src/app/admin/services/s-candidate-position/candidate-position.service';
import { PositionService } from 'src/app/admin/services/s-position/position.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

/**
 * @Author Marc Lopez Marco
 */

@Component({
  selector: 'app-candidatura',
  templateUrl: './candidatura.component.html',
  styleUrls: ['./candidatura.component.css'],
})
export class CandidaturaComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    validarPassword: null,
  };

  tempData: any = {
    username: null,
    password: null,
  };

  estasLogeado = false;
  esAdmin = false;

  signinTest() {
    //mockup mpv
    if (
      this.form.username != '' &&
      this.form.password != '' &&
      this.form.validarPassword == this.form.password
    ) {
      this.tempData.username = this.form.username;
      this.tempData.password = this.form.password;
      alert('Usuario creado correctamente.');
      this.form.username = '';
      this.form.password = '';
      this.form.validarPassword = '';
    } else {
      alert('Las contraseñas no coinciden!');
    }
  }

  loginTest() {
    //mockup mpv
    if (
      (this.form.username == this.tempData.username &&
        this.form.password == this.tempData.password) ||
      (this.form.username == 'emartorell' && this.form.password == 'password')
    ) {
      //mandamos an nav la info
      this.estasLogeado = true;
      if (
        this.form.username == 'emartorell' &&
        this.form.password == 'password'
      ) {
        this.esAdmin = true;
      }
    } else {
      alert('Introduce un usuario y contraseña correctos.');
    }
  }

  candidatePositions: any;
  positions: any;
  candidate: any;
  position: any;
  idInscritos: any = [];
  i = 0;
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: any = null;

  constructor(
    public router: Router,
    private candidatePositionService: CandidatePositionService,
    private positionService: PositionService
  ) {}

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
    this.listCandidatePosition();
    this.listPosition();
  }
  isCandidatePositionAdded = false;

  //get all
  listCandidatePosition() {
    //Llamas al service de listar y pasa la lista a la variable
    this.candidatePositionService
      .listCandidatePosition()
      .subscribe((candidatePositions: any) => {
        this.candidatePositions = candidatePositions;

        console.log(this.candidatePositions);

        for (let index = 0; index < candidatePositions.length; index++) {
          this.idInscritos[index] = this.candidatePositions[index].position.id;
        }
      });
  }

  //get all
  listPosition() {
    //Llamas al service de listar y pasa la lista a la variable
    this.positionService.listPosition().subscribe((positions: any) => {
      this.positions = positions;
      console.log(this.positions);
    });
  }

  logeo = false;
  idposition: any = 0;
  createCandidatePosition(id_position: any, name: any, apellido: any) {
    this.logeo = true;
    this.idposition = id_position;
    console.log('inscrito');
    console.log('id' + this.idposition);

    this.position = {
      id: id_position,
      title: name,
      description: apellido,
    };
    //inscribirse
    this.candidate = {
      id: id_position,
      candidate_name: 'Marc',
      candidate_surname: 'Lopez',
    };

    //TODO: Avisos estas seguro? si no
    let data = {
      registryDate: '2022-06-28T00:00:00.000+00:00',
      testDate: '2022-06-28T00:00:00.000+00:00',
      completionDate: '',
      result: '0',
      position: {
        id: id_position,
        title: name,
        description: apellido,
      },
      candidate: {
        id: 1,
        candidate_name: 'marc',
        candidate_surname: 'lopez',
      },
    };
    console.log(data);

    //control
    if (!data) {
      //mostramos el mensaje de validación
      console.log('validacion');
      //importante poner el return para que pare la función
      return;
    } else {
      this.candidatePositionService.createCandidatePosition(data).subscribe({
        next: (response) => {
          //console log para mirar si se ha mandado bien
          console.log(response);
          this.isCandidatePositionAdded = true;
          location.reload();
        },
        error: (err) => {
          console.log(err.error.msg);
        },
      });
    }
  }
}
