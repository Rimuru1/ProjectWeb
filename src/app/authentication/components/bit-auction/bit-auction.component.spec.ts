import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitAuctionComponent } from './bit-auction.component';

describe('BitAuctionComponent', () => {
  let component: BitAuctionComponent;
  let fixture: ComponentFixture<BitAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
