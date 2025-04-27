import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SidebarComponent,
        RouterTestingModule,
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit collapse state change', () => {
    const spy = spyOn(component.collapseStateChanged, 'emit');
    component.toggleCollapse();
    expect(spy).toHaveBeenCalledWith(true);
  });

  it('should emit item selected', () => {
    const spy = spyOn(component.itemSelected, 'emit');
    const item = { label: 'Test', icon: 'test' };
    component.handleItemClick(item, 0);
    expect(spy).toHaveBeenCalledWith(item);
  });

  it('should not emit for disabled items', () => {
    const spy = spyOn(component.itemSelected, 'emit');
    const item = { label: 'Test', icon: 'test', disabled: true };
    component.handleItemClick(item, 0);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should execute action if provided', () => {
    const action = jasmine.createSpy('action');
    const item = { label: 'Test', icon: 'test', action };
    component.handleItemClick(item, 0);
    expect(action).toHaveBeenCalled();
  });
});
