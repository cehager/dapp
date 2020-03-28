/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyListsComponent } from './my-lists.component';

describe('MyListsComponent', () => {
  let component: MyListsComponent;
  let fixture: ComponentFixture<MyListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
