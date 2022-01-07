import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CreatePostPage } from './create-post.page';
describe('CreatePostPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreatePostPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(CreatePostPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-post.page.spec.js.map