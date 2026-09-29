import React from 'react';
import { Code2 } from 'lucide-react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiCplusplus,
  SiGithub,
  SiFigma,
  SiCursor,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { DiJava } from 'react-icons/di';
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa6';

type SkillIconComponent = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

/** Ghost mark for Kiro (Amazon's agentic IDE), which is not available in the icon sets above. */
const KiroGhost: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C7.03 2 3 6.03 3 11v4a3 3 0 0 1 6 0 3 3 0 0 1 6 0 3 3 0 0 1 6 0v-4c0-4.97-4.03-9-9-9Zm-2.5 5.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm5 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"
    />
  </svg>
);

/**
 * Official brand marks for each tech card, keyed by `SkillCard.id`.
 * `color` is the brand color used on the light palette; `darkColor` overrides
 * it when the original brand color would be illegible on the dark palette.
 */
const BRAND_ICONS: Record<string, { Icon: SkillIconComponent; color: string; darkColor?: string }> = {
  html5:      { Icon: SiHtml5,       color: '#E34F26' },
  css3:       { Icon: SiCss,         color: '#1572B6', darkColor: '#4FA8E8' },
  javascript: { Icon: SiJavascript,  color: '#F7DF1E' },
  react:      { Icon: SiReact,       color: '#087EA4', darkColor: '#61DAFB' },
  typescript: { Icon: SiTypescript,  color: '#3178C6', darkColor: '#5DA8E8' },
  tailwind:   { Icon: SiTailwindcss, color: '#06B6D4' },
  bootstrap:  { Icon: SiBootstrap,   color: '#7952B3', darkColor: '#9B7FD4' },
  nodejs:     { Icon: SiNodedotjs,   color: '#5FA04E', darkColor: '#7CC26A' },
  python:     { Icon: SiPython,      color: '#3776AB', darkColor: '#5B95CC' },
  flask:      { Icon: SiFlask,       color: '#1c1917', darkColor: '#f5f4f0' },
  django:     { Icon: SiDjango,      color: '#0C4B33', darkColor: '#44B78B' },
  mysql:      { Icon: SiMysql,       color: '#4479A1', darkColor: '#6AA3CC' },
  postgresql: { Icon: SiPostgresql,  color: '#4169E1', darkColor: '#7C9CF0' },
  java:       { Icon: DiJava,        color: '#E76F00', darkColor: '#FF9C4A' },
  cpp:        { Icon: SiCplusplus,   color: '#00599C', darkColor: '#659AD2' },
  git:        { Icon: SiGithub,      color: '#181717', darkColor: '#f5f4f0' },
  vscode:     { Icon: VscVscode,     color: '#007ACC', darkColor: '#23A8F2' },
  cursor:     { Icon: SiCursor,      color: '#1c1917', darkColor: '#f5f4f0' },
  kiro:       { Icon: KiroGhost,     color: '#1c1917', darkColor: '#f5f4f0' },
  figma:      { Icon: SiFigma,       color: '#F24E1E' },
};

/** Resolves the brand icon + brand color for a skill card, adapting to the active theme. */
export function resolveSkillIcon(skillId: string, isDark: boolean): { Icon: SkillIconComponent; color: string } {
  const spec = BRAND_ICONS[skillId];
  if (!spec) return { Icon: Code2, color: '#3b82f6' };
  return { Icon: spec.Icon, color: isDark ? spec.darkColor ?? spec.color : spec.color };
}

/** Official marks for the social/contact channels shown in the Contact section. */
const SOCIAL_ICONS: Record<string, { Icon: SkillIconComponent; color: string; darkColor?: string }> = {
  whatsapp:  { Icon: FaWhatsapp,  color: '#25D366' },
  github:    { Icon: FaGithub,    color: '#181717', darkColor: '#f5f4f0' },
  linkedin:  { Icon: FaLinkedin,  color: '#0A66C2', darkColor: '#4CA6E8' },
  instagram: { Icon: FaInstagram, color: '#E4405F' },
  facebook:  { Icon: FaFacebook,  color: '#0866FF', darkColor: '#4C8DFF' },
};

/** Resolves the brand icon + brand color for a social channel, adapting to the active theme. */
export function resolveSocialIcon(key: string, isDark: boolean): { Icon: SkillIconComponent; color: string } {
  const spec = SOCIAL_ICONS[key];
  if (!spec) return { Icon: Code2, color: '#3b82f6' };
  return { Icon: spec.Icon, color: isDark ? spec.darkColor ?? spec.color : spec.color };
}

/** Maps technology display names (`Project.technologies`) to their brand icon key. */
const TECH_NAME_ALIASES: Record<string, string> = {
  'html5': 'html5',
  'css3': 'css3',
  'javascript': 'javascript',
  'react': 'react',
  'typescript': 'typescript',
  'tailwind': 'tailwind',
  'tailwind css': 'tailwind',
  'bootstrap': 'bootstrap',
  'node.js': 'nodejs',
  'nodejs': 'nodejs',
  'python': 'python',
  'flask': 'flask',
  'django': 'django',
  'mysql': 'mysql',
  'postgresql': 'postgresql',
  'java': 'java',
  'c++': 'cpp',
  'figma': 'figma',
};

/** Resolves a brand icon from a technology display name; returns null when no official mark exists (e.g. REST API). */
export function resolveTechIconByName(name: string, isDark: boolean): { Icon: SkillIconComponent; color: string } | null {
  const key = TECH_NAME_ALIASES[name.trim().toLowerCase()];
  if (!key) return null;
  const spec = BRAND_ICONS[key];
  if (!spec) return null;
  return { Icon: spec.Icon, color: isDark ? spec.darkColor ?? spec.color : spec.color };
}
