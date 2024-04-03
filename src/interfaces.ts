import { ReactNode } from "react";

export interface ProjectGridProps {
    filter?:boolean;
    max?: number;
}

export interface TranslateTextProps {
    text: string;
}

export interface BadgeProps {
    children: ReactNode;
}

export interface PillsProps {
    children: ReactNode;
    addClass?:string;
    index: string|number;
}

export interface ButtonProps {
    href?: string; 
    target?:string;
    addClass?:string;
    onClick?: () => void; 
    children: React.ReactNode;
}

export interface ProjectModalProps {
    project: Projects;
    onClose: () => void; 
}

export interface CarruselProps {
    images: Images[]; 
}

export interface NavItem {
    label: string;
    url: string;
}

export interface DateRangeProps {
    startDate: string;
    endDate?: string;
}

export interface Experience {
    tittle : string;
    startDate: string;
    endDate?: string;
    position:  string;
    description: string;
}

export interface Technology {
    name: string;
    icon: string;
}

export interface Skills {
    title: string;
    technologies: Technology[];
}

export interface Projects{
    title:string;
    description:string;
    technical:string;
    images:Images[];
    pills:Pills[];
}

export interface Images{
    url:string;
    alt:string;
    type?:string
}

export interface Pills{
    title:string,
}

