export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    AboutUs = "aboutus",
    ContactUs = "contactus",
    OurClasses = "OurClasses"
}

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;

  }

  export interface ClassType {
    name: string;
    description: string;
    image: string
  } 