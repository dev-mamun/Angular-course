/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './home.style.less.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/forms';
import * as i3 from './ads/ad-view.component.ngfactory';
import * as i4 from '../../app/shared/analytics.service';
import * as i5 from '@angular/http';
import * as i6 from '../../app/ads/ad-view.component';
import * as i7 from '@angular/common';
import * as i8 from './events/event-view.component.ngfactory';
import * as i9 from '../../app/events/event-view.component';
import * as i10 from '../../app/home.component';
import * as i11 from '../../app/shared/universe.service';
const styles_HomeComponent:any[] = [i0.styles];
export const RenderType_HomeComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:2,
    styles:styles_HomeComponent,data:{}});
function View_HomeComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),3,'option',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),i1.ɵdid(147456,
      (null as any),0,i2.NgSelectOption,[i1.ElementRef,i1.Renderer,[2,i2.SelectControlValueAccessor]],
      {value:[0,'value']},(null as any)),i1.ɵdid(147456,(null as any),0,i2.ɵq,[i1.ElementRef,
      i1.Renderer,[8,(null as any)]],{value:[0,'value']},(null as any)),(_l()(),i1.ɵted((null as any),
      ['','']))],(_ck,_v) => {
    const currVal_0:any = _v.context.$implicit;
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = _v.context.$implicit;
    _ck(_v,2,0,currVal_1);
  },(_ck,_v) => {
    const currVal_2:any = _v.context.$implicit;
    _ck(_v,3,0,currVal_2);
  });
}
function View_HomeComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'sponsored-event',
      ([] as any[]),(null as any),(null as any),(null as any),i3.View_AdViewComponent_0,
      i3.RenderType_AdViewComponent)),i1.ɵprd(512,(null as any),i4.AnalyticsService,
      i4.AnalyticsService,[i5.Http]),i1.ɵdid(49152,(null as any),0,i6.AdViewComponent,
      [i4.AnalyticsService],{ad:[0,'ad']},(null as any))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.getAdAtIndex((<any>_v.parent).context.index);
    _ck(_v,2,0,currVal_0);
  },(null as any));
}
function View_HomeComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_HomeComponent_3)),i1.ɵdid(16384,
      (null as any),0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any)),(_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,
      (null as any),(null as any),2,'event-view',[['class','event-view']],(null as any),
      [[(null as any),'afterClick']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('afterClick' === en)) {
          const pd_0:any = ((<any>_co.eventClicked($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i8.View_EventViewComponent_0,i8.RenderType_EventViewComponent)),i1.ɵprd(512,
      (null as any),i4.AnalyticsService,i4.AnalyticsService,[i5.Http]),i1.ɵdid(49152,
      (null as any),0,i9.EventViewComponent,[i4.AnalyticsService],{event:[0,'event']},
      {afterClick:'afterClick'}),(_l()(),i1.ɵted((null as any),['\n    ']))],(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.hasAdAtIndex(_v.context.index);
    _ck(_v,2,0,currVal_0);
    const currVal_1:any = _v.context.$implicit;
    _ck(_v,6,0,currVal_1);
  },(null as any));
}
function View_HomeComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'section',[['class',
      'load-more']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'button',[['class','load-more-button']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.loadMoreButtonClick()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n      Load More Events\n    '])),
      (_l()(),i1.ɵted((null as any),['\n  ']))],(null as any),(null as any));
}
function View_HomeComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,
      (null as any),(null as any),2,'event-view',[['class','event-view']],(null as any),
      (null as any),(null as any),i8.View_EventViewComponent_0,i8.RenderType_EventViewComponent)),
      i1.ɵprd(512,(null as any),i4.AnalyticsService,i4.AnalyticsService,[i5.Http]),
      i1.ɵdid(49152,(null as any),0,i9.EventViewComponent,[i4.AnalyticsService],{event:[0,
          'event']},(null as any)),(_l()(),i1.ɵted((null as any),['\n    ']))],(_ck,
      _v) => {
    const currVal_0:any = _v.context.$implicit;
    _ck(_v,3,0,currVal_0);
  },(null as any));
}
export function View_HomeComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),12,'h2',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['Check out cool\n  '])),(_l()(),i1.ɵeld(0,(null as any),
      (null as any),9,'select',[['class','category-select']],[[2,'ng-untouched',(null as any)],
          [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
              (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
          [2,'ng-pending',(null as any)]],[[(null as any),'ngModelChange'],[(null as any),
          'change'],[(null as any),'blur']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i10.HomeComponent = _v.component;
        if (('change' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,3).onChange($event.target.value)) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,3).onTouched()) !== false);
          ad = (pd_1 && ad);
        }
        if (('ngModelChange' === en)) {
          const pd_2:any = ((<any>_co.setCategory($event)) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.SelectControlValueAccessor,
      [i1.Renderer,i1.ElementRef],(null as any),(null as any)),i1.ɵprd(1024,(null as any),
      i2.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i2.SelectControlValueAccessor]),i1.ɵdid(671744,(null as any),0,i2.NgModel,
      [[8,(null as any)],[8,(null as any)],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
      {model:[0,'model']},{update:'ngModelChange'}),i1.ɵprd(2048,(null as any),i2.NgControl,
      (null as any),[i2.NgModel]),i1.ɵdid(16384,(null as any),0,i2.NgControlStatus,
      [i2.NgControl],(null as any),(null as any)),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_HomeComponent_1)),
      i1.ɵdid(802816,(null as any),0,i7.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n  '])),(_l()(),i1.ɵted((null as any),['\n  in Toronto, Canada!\n'])),
      (_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          17,'section',[['class','today']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),1,'h3',[['class','date']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['',''])),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),8,'section',[['class','events-container']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'sponsored-event',
          ([] as any[]),(null as any),(null as any),(null as any),i3.View_AdViewComponent_0,
          i3.RenderType_AdViewComponent)),i1.ɵprd(512,(null as any),i4.AnalyticsService,
          i4.AnalyticsService,[i5.Http]),i1.ɵdid(49152,(null as any),0,i6.AdViewComponent,
          [i4.AnalyticsService],{ad:[0,'ad']},(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
          View_HomeComponent_2)),i1.ɵdid(802816,(null as any),0,i7.NgForOf,[i1.ViewContainerRef,
          i1.TemplateRef,i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_HomeComponent_4)),
      i1.ɵdid(16384,(null as any),0,i7.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),
          ['\n\n'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),10,'section',[['class',
          'more-events']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['More Events'])),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),4,'section',[['class','events-container']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
          View_HomeComponent_5)),i1.ɵdid(802816,(null as any),0,i7.NgForOf,[i1.ViewContainerRef,
          i1.TemplateRef,i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),['\n'])),
      (_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i10.HomeComponent = _v.component;
    const currVal_7:any = _co.selectedCategory;
    _ck(_v,5,0,currVal_7);
    const currVal_8:any = _co.categories;
    _ck(_v,10,0,currVal_8);
    const currVal_10:any = _co.getAdAtIndex(0);
    _ck(_v,23,0,currVal_10);
    const currVal_11:any = _co.getFilteredEvents(_co.events);
    _ck(_v,26,0,currVal_11);
    const currVal_12:boolean = !_co.loadMoreButtonAlreadyClicked;
    _ck(_v,30,0,currVal_12);
    const currVal_13:any = _co.getFilteredEvents(_co.moreEvents);
    _ck(_v,41,0,currVal_13);
  },(_ck,_v) => {
    var _co:i10.HomeComponent = _v.component;
    const currVal_0:any = i1.ɵnov(_v,7).ngClassUntouched;
    const currVal_1:any = i1.ɵnov(_v,7).ngClassTouched;
    const currVal_2:any = i1.ɵnov(_v,7).ngClassPristine;
    const currVal_3:any = i1.ɵnov(_v,7).ngClassDirty;
    const currVal_4:any = i1.ɵnov(_v,7).ngClassValid;
    const currVal_5:any = i1.ɵnov(_v,7).ngClassInvalid;
    const currVal_6:any = i1.ɵnov(_v,7).ngClassPending;
    _ck(_v,2,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_9:any = _co.today;
    _ck(_v,17,0,currVal_9);
  });
}
export function View_HomeComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),3,'ng-component',
      ([] as any[]),(null as any),(null as any),(null as any),View_HomeComponent_0,
      RenderType_HomeComponent)),i1.ɵprd(512,(null as any),i11.UniverseService,i11.UniverseService,
      [i5.Http]),i1.ɵprd(512,(null as any),i4.AnalyticsService,i4.AnalyticsService,
      [i5.Http]),i1.ɵdid(114688,(null as any),0,i10.HomeComponent,[i11.UniverseService,
      i4.AnalyticsService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,3,0);
  },(null as any));
}
export const HomeComponentNgFactory:i1.ComponentFactory<i10.HomeComponent> = i1.ɵccf('ng-component',
    i10.HomeComponent,View_HomeComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcnVkb2xmby9Db2RlL0FuZ3VsYXItY291cnNlL2FwcC9ob21lLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL3J1ZG9sZm8vQ29kZS9Bbmd1bGFyLWNvdXJzZS9hcHAvaG9tZS5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL3J1ZG9sZm8vQ29kZS9Bbmd1bGFyLWNvdXJzZS9hcHAvaG9tZS50ZW1wbGF0ZS5odG1sIiwibmc6Ly8vaG9tZS9ydWRvbGZvL0NvZGUvQW5ndWxhci1jb3Vyc2UvYXBwL2hvbWUuY29tcG9uZW50LnRzLkhvbWVDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aDI+Q2hlY2sgb3V0IGNvb2xcbiAgPHNlbGVjdCBjbGFzcz1cImNhdGVnb3J5LXNlbGVjdFwiIFtuZ01vZGVsXT1cInNlbGVjdGVkQ2F0ZWdvcnlcIiAobmdNb2RlbENoYW5nZSk9XCJzZXRDYXRlZ29yeSgkZXZlbnQpXCI+XG4gICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiIFt2YWx1ZV09XCJjYXRlZ29yeVwiPnt7Y2F0ZWdvcnl9fTwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbiAgaW4gVG9yb250bywgQ2FuYWRhIVxuPC9oMj5cbjxzZWN0aW9uIGNsYXNzPVwidG9kYXlcIj5cbiAgPGgzIGNsYXNzPVwiZGF0ZVwiPnt7dG9kYXl9fTwvaDM+XG4gIDxzZWN0aW9uIGNsYXNzPVwiZXZlbnRzLWNvbnRhaW5lclwiPlxuICAgIDxzcG9uc29yZWQtZXZlbnQgW2FkXT1cImdldEFkQXRJbmRleCgwKVwiPjwvc3BvbnNvcmVkLWV2ZW50PlxuICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtZXZlbnQgW25nRm9yT2ZdPVwiZ2V0RmlsdGVyZWRFdmVudHMoZXZlbnRzKVwiIGxldC1pPVwiaW5kZXhcIj5cbiAgICAgIDxzcG9uc29yZWQtZXZlbnQgKm5nSWY9XCJoYXNBZEF0SW5kZXgoaSlcIiBbYWRdPVwiZ2V0QWRBdEluZGV4KGkpXCI+PC9zcG9uc29yZWQtZXZlbnQ+XG4gICAgICA8ZXZlbnQtdmlldyBbZXZlbnRdPVwiZXZlbnRcIiAoYWZ0ZXJDbGljayk9XCJldmVudENsaWNrZWQoJGV2ZW50KVwiPjwvZXZlbnQtdmlldz5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L3NlY3Rpb24+XG4gIDxzZWN0aW9uIGNsYXNzPVwibG9hZC1tb3JlXCIgKm5nSWY9XCIhbG9hZE1vcmVCdXR0b25BbHJlYWR5Q2xpY2tlZFwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJsb2FkLW1vcmUtYnV0dG9uXCIgKGNsaWNrKT1cImxvYWRNb3JlQnV0dG9uQ2xpY2soKVwiID5cbiAgICAgIExvYWQgTW9yZSBFdmVudHNcbiAgICA8L2J1dHRvbj5cbiAgPC9zZWN0aW9uPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cIm1vcmUtZXZlbnRzXCI+XG4gIDxoMz5Nb3JlIEV2ZW50czwvaDM+XG4gIDxzZWN0aW9uIGNsYXNzPVwiZXZlbnRzLWNvbnRhaW5lclwiPlxuICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtZXZlbnQgW25nRm9yT2ZdPVwiZ2V0RmlsdGVyZWRFdmVudHMobW9yZUV2ZW50cylcIj5cbiAgICAgIDxldmVudC12aWV3IFtldmVudF09XCJldmVudFwiPjwvZXZlbnQtdmlldz5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L3NlY3Rpb24+XG48L3NlY3Rpb24+XG4iLCI8bmctY29tcG9uZW50PjwvbmctY29tcG9uZW50PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNFSTtNQUFBLCtFQUFBO01BQUE7TUFBQSwwQ0FBQTtrQkFBQSxzREFBK0Q7TUFBQTtJQUFuQjtJQUE1QyxXQUE0QyxTQUE1QztJQUE0QztJQUE1QyxXQUE0QyxTQUE1Qzs7SUFBK0Q7SUFBQTs7OztvQkFTN0Q7TUFBQTttQ0FBQTswQkFBQSxrQkFBQTtNQUFBOztJQUF5QztJQUF6QyxXQUF5QyxTQUF6Qzs7OztvQkFEK0UsNkNBQy9FO01BQUEsMEVBQUE7TUFBQTtNQUFBLGVBQWtGLDZDQUNsRjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQTRCO1VBQUE7VUFBQTtRQUFBO1FBQTVCO01BQUE7TUFBQSx3RUFBQTtNQUFBO01BQUEsMkJBQTZFOzs7SUFENUQ7SUFBakIsV0FBaUIsU0FBakI7SUFDWTtJQUFaLFdBQVksU0FBWjs7OztvQkFHSjtNQUFBO01BQWlFLDJDQUMvRDtVQUFBO2NBQUE7WUFBQTtZQUFBO1lBQWlDO2NBQUE7Y0FBQTtZQUFBO1lBQWpDO1VBQUEsZ0NBQWtFO01BRXpEOzs7b0JBTzhELDZDQUNyRTtNQUFBO01BQUE7YUFBQTthQUFBO1VBQUEseUJBQXlDOztJQUE3QjtJQUFaLFdBQVksU0FBWjs7OztvQkExQk47TUFBQSx3RUFBSTthQUFBLHdDQUNGO01BQUE7VUFBQTtjQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQTZEO1VBQUE7VUFBQTtRQUFBO1FBQTdEO01BQUEsdUNBQUE7TUFBQSxnRUFBQTsyQkFBQTtRQUFBO01BQUEsMENBQUE7TUFBQTtNQUFBLHFEQUFBO01BQUEsbUNBQUE7TUFBQSw0Q0FBbUc7TUFDakc7YUFBQTs0QkFBQSx5Q0FBb0Y7VUFBQSxXQUM3RTtNQUVOLHVDQUNMO1VBQUE7VUFBQSw4QkFBdUIseUNBQ3JCO2lCQUFBO2NBQUEsMERBQWlCO1VBQUEsVUFBYyx5Q0FDL0I7VUFBQTtVQUFBLDRDQUFrQztVQUFBLGFBQ2hDO1VBQUE7dUNBQUE7OEJBQUEsa0JBQUE7VUFBQSxtREFBMEQ7VUFBQSxhQUMxRDtVQUFBLDhCQUFBOzJDQUFBO01BR2MseUNBQ047TUFDVjthQUFBO1VBQUEsd0JBSVUsdUNBQ0Y7VUFBQSxXQUVWO1VBQUE7VUFBQSxnQkFBNkIseUNBQzNCO1VBQUE7VUFBQSw0Q0FBSTtVQUFBLGtCQUFnQix5Q0FDcEI7VUFBQTtVQUFBLDBEQUFrQztVQUFBLGFBQ2hDO1VBQUEsOEJBQUE7MkNBQUE7TUFFYyx5Q0FDTjtNQUNGOztJQTVCd0I7SUFBaEMsV0FBZ0MsU0FBaEM7SUFDVTtJQUFSLFlBQVEsU0FBUjtJQU9pQjtJQUFqQixZQUFpQixVQUFqQjtJQUM2QjtJQUE3QixZQUE2QixVQUE3QjtJQUt5QjtJQUEzQixZQUEyQixVQUEzQjtJQVUrQjtJQUE3QixZQUE2QixVQUE3Qjs7O0lBeEJGO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsV0FBQSxxRUFBQTtJQU1pQjtJQUFBOzs7O29CQ1BuQjtNQUFBOzhCQUFBO01BQUE7TUFBQSxrQkFBQTt5QkFBQTtJQUFBOzs7OyJ9
