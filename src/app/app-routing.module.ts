import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsideComponent } from './admin/aside/aside.component';
import { FormSkillComponent } from './admin/components/formularios/form-skill/form-skill.component';
import { TableCandidatePositionComponent } from './admin/components/listas/table-candidate-position/table-candidate-position.component';
import { TableCandidateComponent } from './admin/components/listas/table-candidate/table-candidate.component';

import { TableHrUserComponent } from './admin/components/listas/table-hr-user/table-hr-user.component';
import { TableSkillComponent } from './admin/components/listas/table-skill/table-skill.component';
import { CandidaturaComponent } from './public/candidatura/candidatura.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'candidatura',
    component: CandidaturaComponent,
  },
  {
    path: 'candidateposition',
    component: TableCandidatePositionComponent,
  },
  {
    path: 'skills',
    component: TableSkillComponent,
  },
  {
    path: 'createSkill',
    component: FormSkillComponent,
  },
  {
    path: 'hrUser',
    component: TableHrUserComponent,
  },
  {
    path: 'candidate',
    component: TableCandidateComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
