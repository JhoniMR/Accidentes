import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-top-sdenav',
  templateUrl: './top-sdenav.component.html',
  styleUrls: ['./top-sdenav.component.css']
})
export class TopSdenavComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNavf = [
    {name: '', route: 'login', icon: 'account_circle'}
  ];

  fillerNav = [
    {name: 'Home', route: 'feed', icon: 'home'},
    {name: 'map', route: 'map', icon: 'map'},
    {name: 'graficas', route: 'graficas', icon: 'trending_up'}
  ];

  
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit(): void {
  }

}
