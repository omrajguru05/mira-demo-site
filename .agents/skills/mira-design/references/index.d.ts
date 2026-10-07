// Mira components. Each function returns an HTML string; assign it to innerHTML.

export interface ButtonProps {
  /** Visible label, written as a plain verb. */
  label: string;
  /** solid inverts the ground, outline draws a border, accent uses ember. Default solid. */
  variant?: 'solid' | 'outline' | 'accent';
  /** md is 44px tall, sm is 32px tall. Default md. */
  size?: 'md' | 'sm';
  disabled?: boolean;
}

export interface EyebrowProps {
  /** Metadata items, joined by a middle dot. */
  items: string[];
}

export interface HighlightProps {
  /** The key word or phrase, one per headline. */
  text: string;
  /** Block color. Default sun. */
  tone?: 'sun' | 'ember' | 'lime' | 'haze' | 'cobalt';
}

export interface CursorTagProps {
  /** Collaborator name shown in the tag. */
  name: string;
  /** Tag color. Default cobalt. */
  tone?: 'cobalt' | 'ember' | 'sun' | 'lagoon' | 'rose';
}

export interface AtmosphereProps {
  /** Gradient field. Default sunset. */
  palette?: 'sunset' | 'sky' | 'cobalt' | 'meadow';
  /** Height in px. Default fills content with a 220px minimum. */
  height?: number;
  /** Trusted HTML placed over the field. */
  content?: string;
}

export interface GlassShapeProps {
  /** Silhouette. Default tile. */
  shape?: 'disc' | 'ring' | 'tile' | 'plus' | 'steps';
  /** Width and height in px. Default 96. */
  size?: number;
}

export interface PixelMarkProps {
  /** Width and height in px. Default 64. */
  size?: number;
  /** dark is white on black, light is black on white, glyph inherits currentColor. Default dark. */
  tone?: 'dark' | 'light' | 'ember' | 'cobalt' | 'glyph';
}

export interface ChipProps {
  label: string;
  /** Set in mono. Default true. */
  mono?: boolean;
}

export interface PixelIconProps {
  /** Glyph drawn on the 12 by 12 grid. Default check. */
  name?: 'morph' | 'content' | 'check' | 'search' | 'shield' | 'alert' | 'bars' | 'bolt' | 'globe' | 'pin' | 'lock' | 'arrow';
  /** Lit pixel color. Default ink. */
  tone?: 'ink' | 'ember' | 'sun' | 'peach' | 'rose' | 'lime' | 'lagoon' | 'haze' | 'lilac' | 'cobalt';
  /** Width and height in px. Default 40. */
  size?: number;
}

export interface BoxProps {
  /** Trusted HTML placed inside the frame. */
  content?: string;
  /** Place the box on a dotted stage with hairlines past the corners. Default false. */
  rails?: boolean;
}

export interface BoxGridCell {
  icon?: PixelIconProps['name'];
  tone?: PixelIconProps['tone'];
  title: string;
  body?: string;
  /** Command or attribute chips shown under the body. */
  chips?: string[];
}

export interface BoxGridProps {
  /** Columns on wide screens. Default 4. */
  columns?: 2 | 3 | 4;
  cells: BoxGridCell[];
  rails?: boolean;
}
