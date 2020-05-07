import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSdenavComponent } from './top-sdenav.component';

describe('TopSdenavComponent', () => {
  let component: TopSdenavComponent;
  let fixture: ComponentFixture<TopSdenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSdenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSdenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
