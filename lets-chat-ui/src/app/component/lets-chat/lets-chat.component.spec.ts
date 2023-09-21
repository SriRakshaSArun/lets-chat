import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsChatComponent } from './lets-chat.component';

describe('LetsChatComponent', () => {
  let component: LetsChatComponent;
  let fixture: ComponentFixture<LetsChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetsChatComponent]
    });
    fixture = TestBed.createComponent(LetsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
