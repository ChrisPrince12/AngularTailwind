import { Component, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef, OnInit, AfterViewInit, HostListener, ChangeDetectorRef  } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {
  isSidebarVisible = true;
  selectedComponent: string | null = null
  isSmallScreen: boolean = false
  showProfile: boolean = false

  @HostListener('window:resize', ['$event'])

  toggleOptions(){
    this.showProfile = !this.showProfile
  }

  onWindowResize(event: any){
    this.checkScreenSize();
  }

    checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 640; // Set your desired breakpoint here
    if (this.isSmallScreen) {
      this.isSidebarVisible = false;
    } else {
      this.isSidebarVisible = true;
    }
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.isSmallScreen = !this.isSmallScreen
  }

  @ViewChild('mainContent', { read: ViewContainerRef }) mainContent!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private authService: AuthService,private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.checkScreenSize()

    const storedComponent = localStorage.getItem('selectedComponent')
    if(storedComponent){
      this.selectedComponent = storedComponent
      this.redirect(this.selectedComponent)
    }else{
      this.redirect('home')
    }

    this.cdRef.detectChanges();

  }

  redirect(componentName: string) {
    this.selectedComponent = componentName

    localStorage.setItem('selectedComponent', this.selectedComponent)

    if (this.mainContent) {
      this.mainContent.clear();
    }

    let component: Type<any>;

    switch (componentName) {
      case 'home':
        component = HomeComponent;
        break;
      case 'profile':
        component = ProfileComponent;
        break;
      default:
        component = HomeComponent;
        break;
    }
    

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.mainContent.createComponent(componentFactory);
  }

  logout(){
    this.authService.logout()
  }

}
