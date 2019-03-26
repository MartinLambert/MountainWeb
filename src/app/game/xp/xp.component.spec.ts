import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {XPComponent} from './xp.component';

describe('XPComponent', () => {
	let component: XPComponent;
	let fixture: ComponentFixture<XPComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [XPComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(XPComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
