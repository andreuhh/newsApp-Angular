import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaArticlelistComponent } from './na-articlelist.component';

describe('NaArticlelistComponent', () => {
  let component: NaArticlelistComponent;
  let fixture: ComponentFixture<NaArticlelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaArticlelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaArticlelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
