# GitHub CLI Reference Guide - Design Ideas

## Overview
An interactive reference website for GitHub CLI commands and capabilities, featuring command examples, copy-to-clipboard functionality, and organized sections for easy navigation.

---

<response>
<text>
## Idea 1: Terminal Noir

**Design Movement**: Cyberpunk Terminal Aesthetic meets Developer Documentation

**Core Principles**:
1. Authentic terminal experience with monospace typography and command-line visual language
2. High contrast dark theme with neon accent highlights for scanability
3. Information density balanced with clear visual hierarchy
4. Functional brutalism - every element serves a purpose

**Color Philosophy**:
- Primary Background: Deep charcoal black (#0D1117) - mimics GitHub's dark mode
- Secondary Background: Slightly lighter slate (#161B22) for cards and elevated surfaces
- Primary Accent: Electric green (#39D353) - the classic terminal cursor color, signals "active" and "success"
- Secondary Accent: Cyan (#58A6FF) - for links and interactive elements
- Warning/Highlight: Amber (#F0883E) - for important callouts
- Text: Off-white (#E6EDF3) for primary, muted gray (#8B949E) for secondary

**Layout Paradigm**:
- Left-anchored navigation sidebar that mimics a file tree structure
- Main content area with stacked command "blocks" that feel like terminal output
- Sticky table of contents on the right for long-form sections
- Full-width code blocks that span the content area

**Signature Elements**:
1. Animated cursor blink on the hero section
2. "Copy to clipboard" buttons that animate with a checkmark on success
3. Command blocks with syntax highlighting and line numbers

**Interaction Philosophy**:
- Hover states reveal additional context (like tooltips showing full command output)
- Click-to-copy feels instantaneous with micro-feedback
- Smooth scroll between sections with progress indicator

**Animation**:
- Typewriter effect for hero headline
- Code blocks fade in sequentially as user scrolls
- Subtle pulse on interactive elements
- Terminal-style cursor animations

**Typography System**:
- Display: JetBrains Mono Bold for headlines - authentic developer feel
- Body: Inter for readable prose sections
- Code: JetBrains Mono for all command examples
- Hierarchy: 48px hero → 32px section titles → 24px subsections → 16px body
</text>
<probability>0.08</probability>
</response>

---

<response>
<text>
## Idea 2: Blueprint Documentation

**Design Movement**: Technical Blueprint / Engineering Schematic Aesthetic

**Core Principles**:
1. Precision and clarity inspired by architectural blueprints
2. Grid-based layouts with visible structure lines
3. Instructional clarity - every command is a "specification"
4. Professional authority through restrained elegance

**Color Philosophy**:
- Primary Background: Deep navy blue (#0A1628) - classic blueprint base
- Grid Lines: Subtle cyan (#1E3A5F) - visible structure without distraction
- Primary Accent: Bright white (#FFFFFF) - commands and important text pop
- Secondary Accent: Electric blue (#00B4D8) - for interactive elements and highlights
- Success: Soft green (#4ADE80) - for copy confirmations
- Text: Pure white for commands, light blue-gray (#94A3B8) for descriptions

**Layout Paradigm**:
- Visible grid overlay that subtly appears behind content
- Cards positioned like specification boxes on a blueprint
- Horizontal navigation bar at top with section anchors
- Content organized in "specification sheets" - each command is a complete unit

**Signature Elements**:
1. Dotted grid background that creates depth
2. Corner markers on cards (like technical drawing registration marks)
3. "Specification number" badges on each command section

**Interaction Philosophy**:
- Hover reveals the full "specification" with expanded details
- Commands feel like selecting components from a parts list
- Search functions like filtering a technical catalog

**Animation**:
- Grid lines draw themselves on page load
- Cards slide in from different directions based on position
- Smooth zoom effect on hover for command cards
- Blueprint "unfolding" transition between sections

**Typography System**:
- Display: Space Grotesk Bold - geometric, technical feel
- Body: IBM Plex Sans - clean, professional readability
- Code: IBM Plex Mono - consistent with body font family
- Hierarchy: 56px hero → 36px section → 20px subsection → 15px body
</text>
<probability>0.06</probability>
</response>

---

<response>
<text>
## Idea 3: Octopus Garden (GitHub-Inspired Organic)

**Design Movement**: Organic Minimalism with GitHub's Octocat DNA

**Core Principles**:
1. Warm, approachable documentation that doesn't feel sterile
2. Organic shapes and flowing layouts that guide the eye naturally
3. Playful professionalism - serious content with friendly presentation
4. Community-focused feel - documentation as a shared resource

**Color Philosophy**:
- Primary Background: Warm off-white (#FAFBFC) - softer than pure white
- Secondary Background: Soft lavender-gray (#F6F8FA) for cards
- Primary Accent: GitHub purple (#8957E5) - brand connection
- Secondary Accent: Coral (#F97583) - for highlights and CTAs
- Success: Fresh green (#56D364) - GitHub's contribution green
- Text: Rich charcoal (#24292F) for primary, warm gray (#57606A) for secondary

**Layout Paradigm**:
- Flowing, asymmetric layout with content "floating" in organic containers
- Wavy section dividers instead of hard lines
- Card-based command display with generous padding and soft shadows
- Centered content with breathing room on sides

**Signature Elements**:
1. Subtle blob shapes in the background that slowly morph
2. Rounded, pill-shaped tags and badges
3. Illustrated icons for each command category (custom, not generic)

**Interaction Philosophy**:
- Hover states feel like gentle "blooming" - elements expand slightly
- Copy actions trigger a friendly animation (like a small celebration)
- Navigation feels like flowing through connected spaces

**Animation**:
- Gentle floating animation on decorative elements
- Cards lift and cast deeper shadows on hover
- Smooth morphing transitions between states
- Staggered fade-in for list items

**Typography System**:
- Display: Outfit Bold - modern, friendly, slightly rounded
- Body: Plus Jakarta Sans - warm, highly readable
- Code: Fira Code with ligatures - developer-friendly
- Hierarchy: 52px hero → 34px section → 22px subsection → 16px body
</text>
<probability>0.07</probability>
</response>

---

## Selected Approach: Terminal Noir

I'm selecting **Terminal Noir** for this GitHub CLI reference guide because:

1. **Authenticity**: A terminal-inspired design directly connects with the subject matter - command-line tools deserve a command-line aesthetic
2. **Developer Familiarity**: The dark theme with syntax highlighting mirrors the environment where developers actually use these commands
3. **Scanability**: High contrast and clear visual hierarchy make it easy to find and copy commands quickly
4. **Professional Authority**: The design conveys technical expertise while remaining approachable
5. **Functional Focus**: Every design element serves the primary purpose - helping users find and use commands efficiently
