import { Component, Input } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
      <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
          <div [ngSwitch]="event?.time">
            Time: {{event.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
          </div>
          <div>Price: \${{event.price}}</div>
          <div *ngIf="event?.location">
          Location: <span>{{event.location?.address}}</span>, <span>{{event.location?.city}}</span>, <span>{{event.location?.country}}</span>
          </div>
          <div *ngIf="event?.url">Url: {{event.url}}</div>
      </div>
  `,
  styles: [`
    .thumbnail{
      height: 200px;
    }
    `]
})

export class EventThumbnailComponent {
  @Input() event: any;
}
