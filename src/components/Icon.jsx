import {
  Watch,
  Smartphone,
  Share2,
  Phone,
  Globe,
  MapPin,
  Clock,
  FileText,
  Mic,
  ClipboardList,
  Link,
  Link2,
  Tag,
  Camera,
  Map,
  CheckCircle2,
  Sparkles,
  Trash2,
  Plane,
  RefreshCw,
  Palette,
  Lock,
  Zap,
  Repeat,
  Inbox,
  Mail,
} from "lucide-react";

const registry = {
  Watch,
  Smartphone,
  Share2,
  Phone,
  Globe,
  MapPin,
  Clock,
  FileText,
  Mic,
  ClipboardList,
  Link,
  Link2,
  Tag,
  Camera,
  Map,
  CheckCircle2,
  Sparkles,
  Trash2,
  Plane,
  RefreshCw,
  Palette,
  Lock,
  Zap,
  Repeat,
  Inbox,
  Mail,
};

export default function Icon({ name, size = 20, strokeWidth = 2, className }) {
  const Component = registry[name];
  if (!Component) return null;
  return (
    <Component size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
  );
}
