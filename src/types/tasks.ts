import { TaskStatus } from './status';

export interface RichTextStyle {
  bold?: boolean;
  underline?: boolean;
  color?: string;
  bulletLevel?: number; // 0 for no bullet, 1 for bullet, 2+ for sub-bullets
  bulletType?: 'disc' | 'circle' | 'square'; // Different bullet styles for different levels
}

export interface TextSpan {
  text: string;
  bold?: boolean;
  underline?: boolean;
  color?: string;
  href?: string;
}

export interface RichTextSegment {
  spans: TextSpan[];
  bulletLevel?: number;
}

export interface TaskImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface Resource {
  title: string;
  url: string;
  type: 'link' | 'pdf' | 'ppt' | 'image';
  alt?: string;
  description?: string;
  thumbnail?: string;
}

export interface SubTask {
  id: string;
  title: string;
  status: TaskStatus;
  description: RichTextSegment[];
  steps: RichTextSegment[][];
  additionalResources?: Resource[];
  images?: TaskImage[];
}

export interface TaskGroup {
  id: string;
  title: string;
  preTitle: string;
  dueDate: string;
  page: string;
  subtasks: SubTask[];
}