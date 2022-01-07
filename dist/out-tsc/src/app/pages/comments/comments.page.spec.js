import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CommentsPage } from './comments.page';
describe('CommentsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CommentsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=comments.page.spec.js.map