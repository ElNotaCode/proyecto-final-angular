import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './admin/aside/aside.component';
import { TableSkillComponent } from './admin/components/listas/table-skill/table-skill.component';

const routes: Routes = [
  {
    path: 'admin/dashboard',
    component: AsideComponent,
  },
  {
    path: 'skills',
    component: TableSkillComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
