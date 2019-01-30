import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardRatioDirective } from './card-ratio.directive';

@Component({
	template: '<div hotmCardRatio style="width:100px">1</div>'
})
class TestCardRatioComponent {}

describe('CardRatioDirective', () => {

	let component: TestCardRatioComponent;
	let fixture: ComponentFixture<TestCardRatioComponent>;
	let testDiv: DebugElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestCardRatioComponent, CardRatioDirective]
		});
		fixture = TestBed.createComponent(TestCardRatioComponent);
		component = fixture.componentInstance;
		testDiv = fixture.debugElement.query(By.css('div'));
	});

	it('should set the width/height ratio', () => {
		fixture.detectChanges();
		expect(testDiv.nativeElement.style.width).toBe('72.2px');
	});
});
