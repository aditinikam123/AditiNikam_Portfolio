import {
  Atom,
  Briefcase,
  Boxes,
  Calendar,
  CheckCircle2,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  DatabaseZap,
  Globe,
  GraduationCap,
  Leaf,
  MapPin,
  Network,
  Server,
  TerminalSquare,
  Award,
  FileText,
  ExternalLink,
  Presentation,
  Trophy,
} from 'lucide-react'

const icons = {
  Atom,
  Briefcase,
  Boxes,
  Calendar,
  CheckCircle2,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  DatabaseZap,
  Globe,
  GraduationCap,
  Leaf,
  MapPin,
  Network,
  Server,
  TerminalSquare,
  Award,
  FileText,
  ExternalLink,
  Presentation,
  Trophy,
}

export function Icon({ name, className = '' }) {
  const Cmp = icons[name]
  if (!Cmp) return null
  return <Cmp className={className} aria-hidden="true" />
}

