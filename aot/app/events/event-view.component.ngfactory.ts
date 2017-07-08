/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './event-view.style.less.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../app/events/event-view.component';
import * as i3 from '@angular/common';
import * as i4 from '../../../app/shared/analytics.service';
import * as i5 from '@angular/http';
const styles_EventViewComponent:any[] = [i0.styles];
export const RenderType_EventViewComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_EventViewComponent,data:{}});
function View_EventViewComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted((null as any),['\n        The price is ','.\n      ']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.event.formatted_price;
        _ck(_v,0,0,currVal_0);
      });
}
export function View_EventViewComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),21,'a',[['target',
      '_blank']],[[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:i2.EventViewComponent = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.onClick()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),
      i1.ɵeld(0,(null as any),(null as any),3,'header',[['class','event-info']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
      ['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'img',[['class',
      'event-image']],[[8,'src',4]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),13,'section',[['class','event-more-info']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'span',[['class','event-title']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['',''])),(_l()(),
          i1.ɵted((null as any),['\n    at\n    '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),1,'span',[['class','event-location']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['',''])),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),4,'span',[['class','event-description'],['div','']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n      (',').\n      '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_EventViewComponent_1)),i1.ɵdid(16384,(null as any),
          0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i2.EventViewComponent = _v.component;
        const currVal_5:boolean = !_co.isFree;
        _ck(_v,18,0,currVal_5);
      },(_ck,_v) => {
        var _co:i2.EventViewComponent = _v.component;
        const currVal_0:any = i1.ɵinlineInterpolate(1,'',_co.event.ticket_url,'');
        _ck(_v,0,0,currVal_0);
        const currVal_1:any = i1.ɵinlineInterpolate(1,'',_co.imageUrl,'');
        _ck(_v,4,0,currVal_1);
        const currVal_2:any = _co.event.title;
        _ck(_v,10,0,currVal_2);
        const currVal_3:any = _co.event.location;
        _ck(_v,13,0,currVal_3);
        const currVal_4:any = _co.event.formatted_duration;
        _ck(_v,16,0,currVal_4);
      });
}
export function View_EventViewComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'event-view',[['class',
      'event-view']],(null as any),(null as any),(null as any),View_EventViewComponent_0,
      RenderType_EventViewComponent)),i1.ɵprd(512,(null as any),i4.AnalyticsService,
      i4.AnalyticsService,[i5.Http]),i1.ɵdid(49152,(null as any),0,i2.EventViewComponent,
      [i4.AnalyticsService],(null as any),(null as any))],(null as any),(null as any));
}
export const EventViewComponentNgFactory:i1.ComponentFactory<i2.EventViewComponent> = i1.ɵccf('event-view',
    i2.EventViewComponent,View_EventViewComponent_Host_0,{event:'event'},{afterClick:'afterClick'},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcnVkb2xmby9Db2RlL0FuZ3VsYXItY291cnNlL2FwcC9ldmVudHMvZXZlbnQtdmlldy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9ydWRvbGZvL0NvZGUvQW5ndWxhci1jb3Vyc2UvYXBwL2V2ZW50cy9ldmVudC12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vL2hvbWUvcnVkb2xmby9Db2RlL0FuZ3VsYXItY291cnNlL2FwcC9ldmVudHMvZXZlbnQtdmlldy50ZW1wbGF0ZS5odG1sIiwibmc6Ly8vaG9tZS9ydWRvbGZvL0NvZGUvQW5ndWxhci1jb3Vyc2UvYXBwL2V2ZW50cy9ldmVudC12aWV3LmNvbXBvbmVudC50cy5FdmVudFZpZXdDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8YSBocmVmPVwie3tldmVudC50aWNrZXRfdXJsfX1cIlxuICAgKGNsaWNrKT1cIm9uQ2xpY2soKVwiXG4gICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgPGhlYWRlciBjbGFzcz1cImV2ZW50LWluZm9cIj5cbiAgICA8aW1nIGNsYXNzPVwiZXZlbnQtaW1hZ2VcIiBzcmM9XCJ7e2ltYWdlVXJsfX1cIiAvPlxuICA8L2hlYWRlcj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJldmVudC1tb3JlLWluZm9cIj5cbiAgICA8c3BhbiBjbGFzcz1cImV2ZW50LXRpdGxlXCI+e3tldmVudC50aXRsZX19PC9zcGFuPlxuICAgIGF0XG4gICAgPHNwYW4gY2xhc3M9XCJldmVudC1sb2NhdGlvblwiPnt7ZXZlbnQubG9jYXRpb259fTwvc3Bhbj5cbiAgICA8c3BhbiBkaXYgY2xhc3M9XCJldmVudC1kZXNjcmlwdGlvblwiPlxuICAgICAgKHt7ZXZlbnQuZm9ybWF0dGVkX2R1cmF0aW9ufX0pLlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIiFpc0ZyZWVcIj5cbiAgICAgICAgVGhlIHByaWNlIGlzIHt7ZXZlbnQuZm9ybWF0dGVkX3ByaWNlfX0uXG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvc3Bhbj5cbiAgPC9zZWN0aW9uPlxuPC9hPlxuIiwiPGV2ZW50LXZpZXc+PC9ldmVudC12aWV3PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNZb0M7OztRQUFBO1FBQUE7Ozs7b0JBWnBDO01BQUE7SUFBQTtJQUFBO0lBQ0c7TUFBQTtNQUFBO0lBQUE7SUFESDtFQUFBLGdDQUVtQix5Q0FDakI7YUFBQTtVQUFBLDBEQUEyQjtNQUFBLGFBQ3pCO01BQUE7TUFBOEMseUNBQ3ZDO01BQ1Q7VUFBQTtNQUFpQywyQ0FDL0I7VUFBQTtVQUFBLDhCQUEwQix3Q0FBc0I7aUJBQUEsb0NBRWhEO1VBQUE7VUFBQSw0Q0FBNkI7VUFBQSxVQUF5QiwyQ0FDdEQ7VUFBQTtVQUFBLDBEQUFvQztVQUFBLDZCQUVsQztVQUFBLG1EQUFBO1VBQUE7TUFFYywyQ0FDVDtNQUNDLHVDQUNSOzs7UUFMZTtRQUFiLFlBQWEsU0FBYjs7O1FBWkg7UUFBSCxXQUFHLFNBQUg7UUFJNkI7UUFBekIsV0FBeUIsU0FBekI7UUFHMEI7UUFBQTtRQUVHO1FBQUE7UUFDTztRQUFBOzs7O29CQ1Z4QztNQUFBO21DQUFBOzBCQUFBLGtCQUFBO01BQUE7Ozs7In0=