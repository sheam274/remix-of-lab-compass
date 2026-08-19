import {
  BookOpen,
  BrainCircuit,
  ChartNoAxesColumn,
  Code2,
  Container,
  Cpu,
  Dna,
  FlaskConical,
  GraduationCap,
  Leaf,
  Microscope,
  Network,
  Presentation,
  Sprout,
  Sun,
  TestTubes,
  Thermometer,
  Users,
  Wheat,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  BrainCircuit,
  ChartNoAxesColumn,
  Code2,
  Container,
  Cpu,
  Dna,
  FlaskConical,
  GraduationCap,
  Leaf,
  Microscope,
  Network,
  Presentation,
  Sprout,
  Sun,
  TestTubes,
  Thermometer,
  Users,
  Wheat,
};

export interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const Component = iconMap[name] ?? Sprout;
  return <Component className={className} aria-hidden="true" />;
}
