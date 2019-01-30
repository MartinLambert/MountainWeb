import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[hotmCardRatio]'
})
export class CardRatioDirective implements AfterViewChecked {

	constructor(private el: ElementRef) {}

	ngAfterViewChecked(): void { // cards should have a 65:90 ratio
		const parentWidth  = this.el.nativeElement.parentElement.clientWidth;
		const parentHeight = this.el.nativeElement.parentElement.clientHeight;
		console.log(parentWidth + ' x ' + parentHeight);

		// if (parentHeight > parentWidth) {
		// 	this.el.nativeElement.style.width  = (parentWidth * 0.9)  + 'px';
		// 	this.el.nativeElement.style.height = (parentWidth * 0.65) + 'px';
		// } else {
		// 	this.el.nativeElement.style.height = (parentHeight * 0.9)  + 'px';
		// 	this.el.nativeElement.style.width  = (parentHeight * 0.65) + 'px';
		// }
	}
}
