import { NgModule } from '@angular/core';
import {
    NbAlertModule,
    NbButtonModule, NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbInputModule,
    NbMenuModule, NbRadioModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { RegisterStep1Component } from './register/register-step1/register-step1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterStep2Component } from './register/register-step2/register-step2.component';
import { RegisterStep3Component } from './register/register-step3/register-step3.component';
import { RegisterStep4Component } from './register/register-step4/register-step4.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AjouterVisiteComponent } from './ajouter-visite/ajouter-visite.component';
import { HomeDoctorComponent } from './home-doctor/home-doctor.component';
import { HistoriqueDocteurComponent } from './historique-docteur/historique-docteur.component';
import {TablesModule} from './tables/tables.module';
import { HomePatientComponent } from './home-patient/home-patient.component';
import { DossierMedicalComponent } from './dossier-medical/dossier-medical.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';




@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbCheckboxModule,
    NbButtonModule,
    NbDatepickerModule,
    NbRadioModule,
    ReactiveFormsModule,
    NbCardModule,
    TablesModule,
  ],
    declarations: [
        PagesComponent,
        RegisterStep1Component,
        RegisterStep2Component,
        RegisterStep3Component,
        RegisterStep4Component,
        AjouterVisiteComponent,
        HomeDoctorComponent,
        HistoriqueDocteurComponent,
        HomePatientComponent,
        DossierMedicalComponent,
        PrescriptionsComponent,

    ],
  exports: [
    RegisterStep1Component,
    RegisterStep2Component,
    RegisterStep3Component,
    RegisterStep4Component,
  ],
})
export class PagesModule {
}
