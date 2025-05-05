import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'app-services',
  imports: [NgFor, CardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  cards = [
    {
      icon: 'fas fa-database',
      title: 'Zentrale Datenverwaltung',
      description:
        'Wir richten für Sie ein modernes, zentrales Datenspeichersystem ein, mit dem Sie alle Ihre Dateien und Dokumente an einem Ort speichern und verwalten können. Dies macht die Organisation Ihrer Daten effizient und sorgt dafür, dass Sie und Ihr Team stets Zugriff auf die aktuellsten Informationen haben.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Zugriff von überall',
      description:
        'Mit unserer Lösung können Sie und Ihre Mitarbeiter von jedem Ort aus sicher auf Ihre Daten zugreifen – ob im Büro, von unterwegs oder im Homeoffice.'
    },
    {
      icon: 'fas fa-user-shield',
      title: 'Nutzer- und Rechteverwaltung',
      description:
        'Nicht jeder Mitarbeiter benötigt Zugriff auf alle Daten. Wir erstellen ein maßgeschneidertes Nutzer- und Rechteverwaltungssystem, das sicherstellt, dass jeder genau die Daten sehen und bearbeiten kann, die für seine Arbeit relevant sind. Dies sorgt für zusätzliche Sicherheit und klar strukturierte Arbeitsabläufe.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Sicherheit auf dem neuesten Stand',
      description:
        'Wir legen besonderen Wert auf die Sicherheit Ihrer IT-Infrastruktur. Mit aktuellen Sicherheitsstandards schützen wir Ihre sensiblen Daten vor unbefugtem Zugriff und sorgen dafür, dass Ihr System stets auf dem neuesten Stand bleibt.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Individuelle Beratung',
      description:
        'Jedes Unternehmen ist einzigartig – und genauso sollte Ihre IT-Lösung sein. Wir analysieren Ihre bestehenden Strukturen, beraten Sie ausführlich und richten ein System ein, das perfekt auf Ihre Bedürfnisse zugeschnitten ist.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Wartung und Support',
      description:
        'Wir unterstützen Sie auch nach der Einrichtung – mit regelmäßiger Wartung und zuverlässigem Support.'
    }
  ];
  
  flippedCards: boolean[] = Array(this.cards.length).fill(false);
  
  toggleFlip(index: number): void {
    this.flippedCards[index] = !this.flippedCards[index];
  }
  
}
