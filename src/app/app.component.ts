import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterBankComponent} from "./footer-bank/footer-bank.component";
import {MenuBankComponent} from "./menu-bank/menu-bank.component";
import {EschatBankComponent} from "./eschat-bank/eschat-bank.component";
import {CardsBankComponent} from "./cards-bank/cards-bank.component";
import {ServicesBankComponent} from "./services-bank/services-bank.component";
import {TarifsBankComponent} from "./tarifs-bank/tarifs-bank.component";
import {DocumentsArchivesBankComponent} from "./documents-archives-bank/documents-archives-bank.component";
import {YoutubeVideoBankComponent} from "./youtube-video-bank/youtube-video-bank.component";
import {FrequentlyTasksBankComponent} from "./frequently-tasks-bank/frequently-tasks-bank.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterBankComponent, MenuBankComponent, EschatBankComponent, CardsBankComponent, ServicesBankComponent, TarifsBankComponent, DocumentsArchivesBankComponent, YoutubeVideoBankComponent, FrequentlyTasksBankComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'EschatBank';
}
