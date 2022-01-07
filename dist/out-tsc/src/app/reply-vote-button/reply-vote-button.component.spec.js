import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReplyVoteButtonComponent } from './reply-vote-button.component';
describe('ReplyVoteButtonComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReplyVoteButtonComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ReplyVoteButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reply-vote-button.component.spec.js.map