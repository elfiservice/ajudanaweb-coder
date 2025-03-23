import Technology from "../technology/Technology";
import { Level } from "./Level";
import { Type } from "./Type";

export default interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  technologies: Technology[];
  type: Type;
  level: Level;
  repository: string;
  highlight: boolean;
}