import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsideComponent } from './admin/aside/aside.component';
import { TableCandidatePositionComponent } from './admin/components/listas/table-candidate-position/table-candidate-position.component';
import { TableCandidateSkillComponent } from './admin/components/listas/table-candidate-skill/table-candidate-skill.component';
import { TableCandidateComponent } from './admin/components/listas/table-candidate/table-candidate.component';
import { TableHrPositionComponent } from './admin/components/listas/table-hr-position/table-hr-position.component';

import { TableHrUserComponent } from './admin/components/listas/table-hr-user/table-hr-user.component';
import { TablePositionTableComponent } from './admin/components/listas/table-position-table/table-position-table.component';
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
    path: 'hrUser',
    component: TableHrUserComponent,
  },
  {
    path: 'candidate',
    component: TableCandidateComponent,
  },
  {
    path: 'admin/dashboard',
    component: AsideComponent,
  },
  {
    path: 'admin',
    component: AsideComponent,

    children:[

      {
        path: 'hrusers',
        component: TableHrUserComponent
      },
      {
        path: 'positions',
        component: TablePositionTableComponent
      },
      {
        path: 'hrpositions',
        component: TableHrPositionComponent
      },
      {
        path: 'candidates',
        component: TableCandidateComponent
      },
      {
        path: 'candidatepositions',
        component: TableCandidatePositionComponent
      },
      {
        path: 'skills',
        component: TableSkillComponent
      },
      {
        path: 'candidateskills',
        component: TableCandidateSkillComponent
      },
           //esto no va hay que mirarlo..
      {
        path: '**',
        component: AsideComponent,
      }

    ]

  },
  {

    path: 'admin/skills',
    component: TableSkillComponent,
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
