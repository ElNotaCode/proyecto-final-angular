import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/admin/services/s-skill/skill.service';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css'],
})
export class FormSkillComponent implements OnInit {
  constructor(private skillService: SkillService) {}

  ngOnInit(): void {}

  //esta variable se usa para indicar que se ha creado la skill
  isSkillAdded = false;

  //objeto de la skill
  skill = {
    skill_name: '',
  };

  //esta variable indicará que se tiene que introducir un nombre válido
  validarNombre: boolean = false;

  //declaramos esta función en void
  addSkill(): void {
    const data = {
      skill_name: this.skill.skill_name,
    };

    //control
    if (!data.skill_name) {
      //mostramos el mensaje de validación
      this.validarNombre = true;
      //importante poner el return para que pare la función
      return;
    } else {
      this.skillService.createSkill(data).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err.error.msg);
        },
      });
    }
  }

  //esta función es para el botón que se mostrará al crear una skill
  newSkill() {
    //resetea el objeto y la var si está añadida
    this.isSkillAdded = false;

    this.skill = {
      skill_name: '',
    };
  }
}
