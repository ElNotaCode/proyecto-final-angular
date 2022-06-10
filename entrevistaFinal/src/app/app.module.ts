import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './admin/aside/aside.component';
import { FormSkillComponent } from './admin/components/formularios/form-skill/form-skill.component';
import { FormCandidateSkillComponent } from './admin/components/formularios/form-candidate-skill/form-candidate-skill.component';
import { FormCandidateComponent } from './admin/components/formularios/form-candidate/form-candidate.component';
import { FormCandidatePositionComponent } from './admin/components/formularios/form-candidate-position/form-candidate-position.component';
import { FormPositionTableComponent } from './admin/components/formularios/form-position-table/form-position-table.component';
import { FormHrPositionComponent } from './admin/components/formularios/form-hr-position/form-hr-position.component';
import { FormHrUserComponent } from './admin/components/formularios/form-hr-user/form-hr-user.component';
import { TableSkillComponent } from './admin/components/listas/table-skill/table-skill.component';
import { TableCandidateSkillComponent } from './admin/components/listas/table-candidate-skill/table-candidate-skill.component';
import { TableCandidateComponent } from './admin/components/listas/table-candidate/table-candidate.component';
import { TableCandidatePositionComponent } from './admin/components/listas/table-candidate-position/table-candidate-position.component';
import { TablePositionTableComponent } from './admin/components/listas/table-position-table/table-position-table.component';
import { TableHrPositionComponent } from './admin/components/listas/table-hr-position/table-hr-position.component';
import { TableHrUserComponent } from './admin/components/listas/table-hr-user/table-hr-user.component';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { CandidaturaComponent } from './public/candidatura/candidatura.component';
import { FooterComponent } from './public/footer/footer.component';
import { NavComponent } from './public/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    FormSkillComponent,
    FormCandidateSkillComponent,
    FormCandidateComponent,
    FormCandidatePositionComponent,
    FormPositionTableComponent,
    FormHrPositionComponent,
    FormHrUserComponent,
    TableSkillComponent,
    TableCandidateSkillComponent,
    TableCandidateComponent,
    TableCandidatePositionComponent,
    TablePositionTableComponent,
    TableHrPositionComponent,
    TableHrUserComponent,
    HomeComponent,
    AboutComponent,
    CandidaturaComponent,
    FooterComponent,
<<<<<<< HEAD
    AsideComponent
=======
    NavComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
