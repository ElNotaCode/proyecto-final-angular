import { Component, OnInit } from '@angular/core';
//importamos el servicio relacionado con el componente
import { SkillService } from 'src/app/admin/services/s-skill/skill.service';

/**
 * @Author Eloi Martorell Martín
 */

@Component({
  selector: 'app-table-skill',
  templateUrl: './table-skill.component.html',
  styleUrls: ['./table-skill.component.css'],
})
export class TableSkillComponent implements OnInit {
  //Declaramos las variables que vamos a necesitar.

  skills: any;
  currentIndex = -1;
  searchName = '';

  //declaramos en el parametro el service
  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    //después de declararla abajo, la llamamos en el init
    this.listSkills();
  }

  //get all
  listSkills() {
    //Llamas al sevice de listar y pasa la lista a la variable
    this.skillService.listSkills().subscribe((skills: any) => {
      this.skills = skills;
    });
  }

  //Delete
  deleteSkill(id: any) {
    //TODO: Avisos estas seguro? si no
    this.skillService.deleteSkill(id).subscribe((response) => {
      console.log(response);
    });
  }

  //TODO: Read
}
