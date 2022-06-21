import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/admin/services/s-skill/skill.service';
import { ActivatedRoute } from '@angular/router';

/**
 * @Author Eloi Martorell Martin
 */

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css'],
})
export class EditSkillComponent implements OnInit {
  //Importante declarar el service en el parametro del constructor
  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => console.log(params));
  }

  ngOnInit(): void {}

  //objeto de la tabla
  skill = {
    skill_name: '',
  };

  //esta variable indicará que se tiene que introducir un nombre válido
  validarNombre: boolean = false;

  //declaramos esta función en void
  editSkill(): void {}
}
