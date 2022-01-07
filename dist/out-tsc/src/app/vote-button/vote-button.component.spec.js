import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { VoteButtonComponent } from './vote-button.component';
describe('VoteButtonComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VoteButtonComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(VoteButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=vote-button.component.spec.js.map