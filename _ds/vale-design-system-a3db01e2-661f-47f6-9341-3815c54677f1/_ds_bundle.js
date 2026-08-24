/* @ds-bundle: {"format":4,"namespace":"ValeDesignSystem_a3db01","components":[{"name":"BauhausShape","sourcePath":"components/brand/BauhausShape.jsx"},{"name":"Monogram","sourcePath":"components/brand/Monogram.jsx"},{"name":"ScanlineSurface","sourcePath":"components/brand/ScanlineSurface.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"NodeFlow","sourcePath":"components/flow/NodeFlow.jsx"},{"name":"StepChain","sourcePath":"components/flow/StepChain.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"PromptCursor","sourcePath":"components/terminal/PromptCursor.jsx"},{"name":"TerminalBlock","sourcePath":"components/terminal/TerminalBlock.jsx"},{"name":"TerminalLine","sourcePath":"components/terminal/TerminalLine.jsx"}],"sourceHashes":{"components/brand/BauhausShape.jsx":"a782e2130f08","components/brand/Monogram.jsx":"7f5b43d25f61","components/brand/ScanlineSurface.jsx":"f05d43474f0e","components/brand/Wordmark.jsx":"975803523fe0","components/core/Badge.jsx":"c8ce60c817e2","components/core/Button.jsx":"11410ac35f86","components/core/Card.jsx":"f8d74b45e5ac","components/core/Divider.jsx":"c093b2ba3b4f","components/core/Icon.jsx":"d151a9ed8c16","components/core/SectionHeading.jsx":"21aee4c3a504","components/core/StatusDot.jsx":"9ec6bfe85b6e","components/core/Tag.jsx":"ddb7a374f402","components/flow/NodeFlow.jsx":"e24902347668","components/flow/StepChain.jsx":"76d89bcaa1d1","components/forms/Checkbox.jsx":"d5901eea0cc1","components/forms/Input.jsx":"442d4084df22","components/forms/Select.jsx":"7612b9f59a4b","components/forms/Switch.jsx":"999f3b8fa7cb","components/forms/Textarea.jsx":"01287772723e","components/navigation/Footer.jsx":"df49736d7741","components/navigation/NavBar.jsx":"8fc622b7d130","components/terminal/PromptCursor.jsx":"4f58f8a449dc","components/terminal/TerminalBlock.jsx":"c77f2913c9bf","components/terminal/TerminalLine.jsx":"d3feab91cd5a","ui_kits/portfolio/Site.jsx":"df08b2556083","ui_kits/social/Graphics.jsx":"380b5e7386b0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ValeDesignSystem_a3db01 = window.ValeDesignSystem_a3db01 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BauhausShape.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bauhaus primitive (circle / square / triangle) used as divider, accent or composition block. */
function BauhausShape({
  shape = 'square',
  size = 48,
  color = 'var(--accent)',
  outline = false,
  style,
  ...rest
}) {
  const base = {
    width: size,
    height: size,
    display: 'inline-block',
    ...style
  };
  if (shape === 'circle') {
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      style: {
        ...base,
        borderRadius: '50%',
        background: outline ? 'transparent' : color,
        border: outline ? `2px solid ${color}` : 'none'
      }
    }));
  }
  if (shape === 'triangle') {
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      style: {
        ...base,
        height: 0,
        width: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`
      }
    }));
  }
  if (shape === 'bar') {
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      style: {
        ...base,
        height: 6,
        background: color
      }
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      ...base,
      background: outline ? 'transparent' : color,
      border: outline ? `2px solid ${color}` : 'none'
    }
  }));
}
Object.assign(__ds_scope, { BauhausShape });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BauhausShape.jsx", error: String((e && e.message) || e) }); }

// components/brand/Monogram.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lowercase "v" + orange underscore in a rounded-square tile. Favicon / avatar mark. */
function Monogram({
  size = 64,
  variant = 'light',
  glow = false,
  style,
  ...rest
}) {
  const skins = {
    light: {
      bg: 'var(--paper-100)',
      fg: 'var(--ink-900)',
      border: '2px solid var(--ink-900)',
      cursor: 'var(--orange-500)'
    },
    dark: {
      bg: 'var(--slate-700)',
      fg: 'var(--paper-100)',
      border: '2px solid var(--slate-600)',
      cursor: 'var(--orange-500)'
    },
    accent: {
      bg: 'var(--orange-500)',
      fg: '#FFFFFF',
      border: '2px solid var(--orange-500)',
      cursor: '#FFFFFF'
    }
  };
  const s = skins[variant] || skins.light;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      width: size,
      height: size,
      background: s.bg,
      border: s.border,
      borderRadius: 'var(--radius-tile)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: s.fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * 0.5,
      letterSpacing: 'var(--track-display)',
      lineHeight: 1,
      boxShadow: glow ? 'var(--glow-accent)' : 'none',
      ...style
    }
  }), "v", /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.cursor
    }
  }, "_"));
}
Object.assign(__ds_scope, { Monogram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Monogram.jsx", error: String((e && e.message) || e) }); }

// components/brand/ScanlineSurface.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dark-mode CRT surface: slate background + low-opacity scanline texture. */
function ScanlineSurface({
  intensity = 'normal',
  tone = 'deep',
  as: Tag = 'div',
  children,
  style,
  className = '',
  ...rest
}) {
  const bg = tone === 'deep' ? 'var(--slate-800)' : tone === 'black' ? 'var(--slate-900)' : 'var(--slate-700)';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    className: ('vale-dark ' + className).trim(),
    style: {
      position: 'relative',
      background: bg,
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: intensity === 'strong' ? 'var(--scanline-strong)' : 'var(--scanline)',
      opacity: intensity === 'subtle' ? 0.5 : 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { ScanlineSurface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ScanlineSurface.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** vale_ wordmark — lowercase Space Grotesk with the orange underscore cursor. */
function Wordmark({
  size = 40,
  blink = false,
  tone = 'default',
  as: Tag = 'span',
  style,
  ...rest
}) {
  const color = tone === 'inverse' ? 'var(--text-inverse)' : tone === 'accent' ? 'var(--text-on-accent)' : 'var(--text-heading)';
  const cursor = tone === 'accent' ? 'var(--text-on-accent)' : 'var(--cursor)';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size,
      letterSpacing: 'var(--track-display)',
      lineHeight: 1,
      color,
      display: 'inline-flex',
      alignItems: 'baseline',
      ...style
    }
  }), "vale", /*#__PURE__*/React.createElement("span", {
    style: {
      color: cursor,
      animation: blink ? 'vale-blink var(--dur-blink) var(--ease-step) infinite' : 'none'
    }
  }, "_"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small mono status marker. Square, uppercase, never a pill. */
function Badge({
  tone = 'accent',
  children,
  style,
  ...rest
}) {
  const tones = {
    accent: {
      color: 'var(--accent)',
      border: '1px solid var(--accent)',
      background: 'var(--accent-soft)'
    },
    teal: {
      color: 'var(--teal-600)',
      border: '1px solid var(--accent-secondary)',
      background: 'var(--accent-secondary-soft)'
    },
    neutral: {
      color: 'var(--text-muted)',
      border: '1px solid var(--border-hairline)',
      background: 'transparent'
    },
    solid: {
      color: 'var(--text-on-accent)',
      border: '1px solid var(--accent)',
      background: 'var(--accent)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      ...(tones[tone] || tones.accent),
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: 'var(--radius-1)',
      display: 'inline-block',
      lineHeight: 1.3,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Primary CTA and its quieter siblings. Square corners, hard offset shadow on primary. */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  iconAfter = null,
  as: Tag = 'button',
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 13
    },
    md: {
      padding: '12px 20px',
      fontSize: 15
    },
    lg: {
      padding: '16px 28px',
      fontSize: 17
    }
  }[size];
  const skins = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '2px solid var(--accent)',
      boxShadow: 'none'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '2px solid var(--border-strong)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '2px solid transparent',
      boxShadow: 'none'
    },
    teal: {
      background: 'var(--accent-secondary)',
      color: '#08221D',
      border: '2px solid var(--accent-secondary)',
      boxShadow: 'none'
    }
  };
  const skin = skins[variant] || skins.primary;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      ...skin,
      ...sizes,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      letterSpacing: 'var(--track-mono)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-1)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      textDecoration: 'none',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out)',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }), icon, children, iconAfter);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square-cornered content block. Hairline by default; 'hard' adds the printed offset shadow. */
function Card({
  variant = 'hairline',
  label = null,
  padding = 'var(--space-6)',
  children,
  style,
  ...rest
}) {
  const skins = {
    hairline: {
      border: '1px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      boxShadow: 'none'
    },
    hard: {
      border: '2px solid var(--border-strong)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-hard)'
    },
    sunken: {
      border: '1px solid var(--border-hairline)',
      background: 'var(--surface-sunken)',
      boxShadow: 'none'
    },
    accent: {
      border: '2px solid var(--accent)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-hard-accent)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      ...(skins[variant] || skins.hairline),
      borderRadius: 'var(--radius-2)',
      padding,
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, label), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hairline rule, optionally punctuated by a Bauhaus primitive. */
function Divider({
  accent = false,
  shape = null,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("hr", {
    style: {
      flex: 1,
      height: accent ? 2 : 1,
      border: 'none',
      background: accent ? 'var(--accent)' : 'var(--border-hairline)',
      margin: 0
    }
  }), shape === 'square' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--accent)'
    }
  }), shape === 'circle' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent-secondary)'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lucide glyph rendered as a currentColor mask. Stroke set is Lucide 0.454 via CDN. */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeSet = 'https://unpkg.com/lucide-static@0.454.0/icons/',
  style,
  ...rest
}) {
  const url = `url("${strokeSet}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    role: "img",
    "aria-label": name,
    style: {
      width: size,
      height: size,
      display: 'inline-block',
      background: color,
      flex: '0 0 auto',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Section opener: mono terminal command over a Space Grotesk headline. Left-aligned, asymmetric. */
function SectionHeading({
  command = null,
  title,
  lede = null,
  level = 2,
  align = 'left',
  style,
  ...rest
}) {
  const H = 'h' + level;
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      textAlign: align,
      maxWidth: align === 'left' ? '46ch' : 'none',
      ...style
    }
  }), command && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-m)',
      letterSpacing: 'var(--track-mono)',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--prompt)'
    }
  }, "$ "), command), React.createElement(H, {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--size-display-m)',
      letterSpacing: 'var(--track-display)',
      lineHeight: 'var(--leading-display)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-l)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)',
      margin: 'var(--space-4) 0 0'
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Status LED. The one place a glow is allowed outside hero moments. */
function StatusDot({
  tone = 'ok',
  label = null,
  glow = true,
  size = 8,
  style,
  ...rest
}) {
  const color = {
    ok: 'var(--status-ok)',
    warn: 'var(--status-warn)',
    idle: 'var(--status-idle)'
  }[tone] || 'var(--status-ok)';
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: color,
      color,
      boxShadow: glow ? 'var(--glow-led)' : 'none'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Skill / tool chip. Mono, hairline, optionally removable. */
function Tag({
  children,
  onRemove = null,
  active = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-m)',
      letterSpacing: 'var(--track-mono)',
      color: active ? 'var(--text-on-accent)' : 'var(--text-body)',
      background: active ? 'var(--accent)' : 'transparent',
      border: `1px solid ${active ? 'var(--accent)' : 'var(--border-hairline)'}`,
      padding: '5px 10px',
      borderRadius: 'var(--radius-1)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-mono)'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/flow/NodeFlow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** input → process → output chain. The brand's systems-thinking motif. */
function NodeFlow({
  nodes = [],
  orientation = 'horizontal',
  accentLast = true,
  style,
  ...rest
}) {
  const horiz = orientation === 'horizontal';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: horiz ? 'row' : 'column',
      alignItems: horiz ? 'stretch' : 'flex-start',
      gap: 0,
      flexWrap: 'wrap',
      ...style
    }
  }), nodes.map((n, i) => {
    const last = i === nodes.length - 1;
    const accent = accentLast && last;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: horiz ? '1 1 0' : 'none',
        minWidth: 130,
        border: `2px solid ${accent ? 'var(--accent)' : 'var(--border-strong)'}`,
        background: accent ? 'var(--accent-soft)' : 'transparent',
        padding: 'var(--space-4)',
        borderRadius: 'var(--radius-1)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--size-mono-s)',
        letterSpacing: 'var(--track-mono-wide)',
        textTransform: 'uppercase',
        color: accent ? 'var(--accent)' : 'var(--text-muted)',
        marginBottom: 6
      }
    }, n.step || String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: 'var(--track-display)',
        color: 'var(--text-heading)'
      }
    }, n.label), n.detail && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--size-body-s)',
        lineHeight: 1.5,
        color: 'var(--text-body)',
        marginTop: 6
      }
    }, n.detail)), !last && /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: horiz ? '0 var(--space-3)' : 'var(--space-2) 0 var(--space-2) var(--space-6)',
        color: 'var(--accent)',
        fontFamily: 'var(--font-mono)',
        fontSize: 18
      }
    }, horiz ? '→' : '↓'));
  }));
}
Object.assign(__ds_scope, { NodeFlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/flow/NodeFlow.jsx", error: String((e && e.message) || e) }); }

// components/flow/StepChain.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered process steps (diagnose → build → refine) as a vertical rail. */
function StepChain({
  steps = [],
  activeIndex = -1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({}, rest, {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--space-5)',
      ...style
    }
  }), steps.map((s, i) => {
    const active = i === activeIndex;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '44px 1fr',
        gap: 'var(--space-4)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `2px solid ${active ? 'var(--accent)' : 'var(--border-strong)'}`,
        background: active ? 'var(--accent)' : 'transparent',
        color: active ? 'var(--text-on-accent)' : 'var(--text-heading)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: 'var(--size-mono-m)',
        borderRadius: 'var(--radius-1)'
      }
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 20,
        letterSpacing: 'var(--track-display)',
        color: 'var(--text-heading)'
      }
    }, s.title), s.body && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--size-body-m)',
        lineHeight: 'var(--leading-body)',
        color: 'var(--text-body)',
        margin: '6px 0 0',
        maxWidth: '54ch'
      }
    }, s.body)));
  }));
}
Object.assign(__ds_scope, { StepChain });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/flow/StepChain.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox — fills signal orange when checked. */
function Checkbox({
  label = null,
  checked = false,
  onChange = () => {},
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      border: `2px solid ${checked ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--accent)' : 'transparent',
      borderRadius: 'var(--radius-1)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-on-accent)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1
    }
  }, checked ? '×' : ''), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-m)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text field with a mono uppercase label. Square corners, 2px focus ring in signal orange. */
function Input({
  label = null,
  hint = null,
  prefix = null,
  invalid = false,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      border: `2px solid ${invalid ? 'var(--orange-600)' : focus ? 'var(--focus-ring)' : 'var(--border-hairline)'}`,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-1)',
      padding: '0 var(--space-3)',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--prompt)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '11px 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-m)',
      color: 'var(--text-heading)',
      ...style
    }
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      color: invalid ? 'var(--orange-600)' : 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select in the vale_ frame. */
function Select({
  label = null,
  options = [],
  style,
  wrapperStyle,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    style: {
      appearance: 'none',
      border: '2px solid var(--border-hairline)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-1)',
      padding: '11px var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-m)',
      color: 'var(--text-heading)',
      outline: 'none',
      ...style
    }
  }), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hard-edged toggle — a terminal switch, not an iOS pill. */
function Switch({
  checked = false,
  onChange = () => {},
  label = null,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 22,
      border: '2px solid var(--border-strong)',
      borderRadius: 'var(--radius-1)',
      background: checked ? 'var(--accent)' : 'transparent',
      position: 'relative',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 1,
      left: checked ? 21 : 1,
      width: 18,
      height: 16,
      background: checked ? 'var(--text-on-accent)' : 'var(--border-strong)',
      transition: 'left var(--dur-fast) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-m)',
      letterSpacing: 'var(--track-mono)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line field matching Input's frame. */
function Textarea({
  label = null,
  hint = null,
  rows = 4,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({}, rest, {
    rows: rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      border: `2px solid ${focus ? 'var(--focus-ring)' : 'var(--border-hairline)'}`,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-1)',
      padding: 'var(--space-3)',
      outline: 'none',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-m)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-heading)',
      transition: 'border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Site footer: wordmark, tagline, mono link columns, status line. */
function Footer({
  tagline = 'Chaos in. Systems out. Growth on repeat.',
  columns = [],
  note = null,
  tone = 'dark',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
    className: dark ? 'vale-dark' : undefined,
    style: {
      background: dark ? 'var(--slate-800)' : 'var(--surface-sunken)',
      color: 'var(--text-body)',
      padding: 'var(--space-8) var(--space-6)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(auto-fit, minmax(140px, 1fr))',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 30,
    tone: dark ? 'inverse' : 'default',
    blink: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-m)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-muted)',
      margin: 'var(--space-3) 0 0',
      maxWidth: '30ch'
    }
  }, tagline)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-m)',
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, l))))))), note && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-7) auto 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono)',
      color: 'var(--text-muted)'
    }
  }, note));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sticky top bar: wordmark left, mono links right, one CTA. Blur protection on scroll. */
function NavBar({
  items = [],
  activeItem = null,
  onNavigate = () => {},
  cta = null,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    className: dark ? 'vale-dark' : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-4) var(--space-6)',
      background: dark ? 'rgba(34,40,43,.82)' : 'rgba(244,241,234,.82)',
      backdropFilter: 'var(--blur-nav)',
      WebkitBackdropFilter: 'var(--blur-nav)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 24,
    blink: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, items.map(it => {
    const active = it === activeItem;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      onClick: () => onNavigate(it),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--size-mono-m)',
        letterSpacing: 'var(--track-mono)',
        textTransform: 'lowercase',
        color: active ? 'var(--accent)' : 'var(--text-body)',
        borderBottom: `2px solid ${active ? 'var(--accent)' : 'transparent'}`,
        paddingBottom: 2,
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, it);
  }), cta));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/terminal/PromptCursor.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The signature blinking orange underscore, standalone. */
function PromptCursor({
  size = 'inherit',
  color = 'var(--cursor)',
  blink = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size,
      color,
      animation: blink ? 'vale-blink var(--dur-blink) var(--ease-step) infinite' : 'none',
      ...style
    }
  }), "_");
}
Object.assign(__ds_scope, { PromptCursor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/PromptCursor.jsx", error: String((e && e.message) || e) }); }

// components/terminal/TerminalLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One meaningful terminal line: teal $ prompt, mono command, optional blinking cursor. */
function TerminalLine({
  command,
  output = null,
  cursor = false,
  size = 'md',
  style,
  ...rest
}) {
  const fs = {
    sm: 'var(--size-mono-s)',
    md: 'var(--size-mono-m)',
    lg: 'var(--size-mono-l)'
  }[size];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      letterSpacing: 'var(--track-mono)',
      lineHeight: 'var(--leading-mono)',
      color: 'var(--text-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--prompt)'
    }
  }, "$ "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-heading)'
    }
  }, command), cursor && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cursor)',
      animation: 'vale-blink var(--dur-blink) var(--ease-step) infinite'
    }
  }, "_")), output && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, output));
}
Object.assign(__ds_scope, { TerminalLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/TerminalLine.jsx", error: String((e && e.message) || e) }); }

// components/terminal/TerminalBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Framed group of terminal lines. Dark variant carries the scanline texture. */
function TerminalBlock({
  lines = [],
  title = null,
  tone = 'dark',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: dark ? 'vale-dark' : undefined,
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-2)',
      background: dark ? 'var(--slate-800)' : 'var(--surface-sunken)',
      border: `1px solid ${dark ? 'var(--slate-600)' : 'var(--border-hairline)'}`,
      padding: 'var(--space-5)',
      ...style
    }
  }), dark && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scanline)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, title), lines.map((l, i) => /*#__PURE__*/React.createElement(__ds_scope.TerminalLine, {
    key: i,
    command: l.command,
    output: l.output,
    cursor: l.cursor || i === lines.length - 1 && l.cursor !== false && false
  }))));
}
Object.assign(__ds_scope, { TerminalBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/TerminalBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Site.jsx
try { (() => {
const {
  NavBar,
  Footer,
  Button,
  Card,
  Badge,
  Tag,
  StatusDot,
  SectionHeading,
  Divider,
  Icon,
  Wordmark,
  Monogram,
  ScanlineSurface,
  BauhausShape,
  TerminalLine,
  TerminalBlock,
  PromptCursor,
  NodeFlow,
  StepChain,
  Input,
  Textarea,
  Select,
  Checkbox,
  Switch
} = window.ValeDesignSystem_a3db01;
const Container = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 var(--space-6)',
    ...style
  }
}, children);
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(ScanlineSurface, {
    intensity: "normal",
    style: {
      padding: '96px 0 88px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 4fr',
      gap: 'var(--space-8)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TerminalLine, {
    command: "whoami",
    size: "lg"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--size-display-xl)',
      letterSpacing: 'var(--track-display)',
      lineHeight: 'var(--leading-display)',
      color: 'var(--paper-100)',
      margin: '20px 0 0'
    }
  }, "Chaos in. Systems out.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, "Growth on repeat."), /*#__PURE__*/React.createElement(PromptCursor, null)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-l)',
      letterSpacing: 'var(--track-mono)',
      color: 'var(--sage-500)',
      margin: '24px 0 0'
    }
  }, "positioning, pipeline, and the automations between them"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('contact'),
    iconAfter: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "book a call"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('work'),
    style: {
      color: 'var(--paper-100)',
      borderColor: 'var(--sage-500)'
    }
  }, "see the work"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(BauhausShape, {
    shape: "bar",
    size: 72,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement(BauhausShape, {
    shape: "bar",
    size: 40,
    color: "var(--teal-500)"
  })), /*#__PURE__*/React.createElement(StatusDot, {
    tone: "ok",
    label: "available \u2014 q4 2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--sage-500)',
      lineHeight: 2
    }
  }, "revops \xB7 marketing ops", /*#__PURE__*/React.createElement("br", null), "hubspot \xB7 b2b saas", /*#__PURE__*/React.createElement("br", null), "latam + remote \xB7 en/es")))));
}
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: '80px var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    command: "vale ls ./skills",
    title: "What I actually do",
    lede: "Three things, in the order they usually break."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, [{
    label: 'service 01',
    icon: 'crosshair',
    title: 'Positioning',
    body: 'Message, segments and offer, written so sales and marketing say the same sentence.'
  }, {
    label: 'service 02',
    icon: 'git-branch',
    title: 'Pipeline',
    body: 'Lifecycle stages, scoring, routing and reporting that survive a quarter of real usage.'
  }, {
    label: 'service 03',
    icon: 'workflow',
    title: 'Automation',
    body: 'HubSpot workflows and integrations that remove the manual step, not hide it.'
  }].map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    variant: "hairline",
    label: s.label,
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-heading)',
      marginTop: 'var(--space-3)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-m)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)',
      margin: '10px 0 0'
    }
  }, s.body)))), /*#__PURE__*/React.createElement(Divider, {
    accent: true,
    shape: "square",
    style: {
      margin: 'var(--space-8) 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    command: "vale run growth.flow",
    title: "How I work",
    lede: "Same three moves, every engagement."
  }), /*#__PURE__*/React.createElement(StepChain, {
    activeIndex: 0,
    steps: [{
      title: 'Diagnose',
      body: 'Two weeks inside the stack, the data and the handoffs. You get a map of where revenue leaks — not a slide deck of best practices.'
    }, {
      title: 'Build',
      body: 'Lifecycle stages, scoring, routing, dashboards and the automations between them. Built in your instance, documented as you go.'
    }, {
      title: 'Refine',
      body: 'Ship, watch, adjust. The system earns its keep after the third iteration, not the first.'
    }]
  }))), /*#__PURE__*/React.createElement(ScanlineSurface, {
    tone: "mid",
    intensity: "subtle",
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--sage-500)',
      marginBottom: 'var(--space-5)'
    }
  }, "a pipeline, rebuilt"), /*#__PURE__*/React.createElement(NodeFlow, {
    nodes: [{
      label: 'lead',
      detail: 'forms, ads, events'
    }, {
      label: 'score',
      detail: 'fit + intent, weighted'
    }, {
      label: 'nurture',
      detail: 'stage-aware sequences'
    }, {
      label: 'close',
      detail: 'routed, tracked, attributed'
    }]
  }))));
}
function WorkScreen({
  onOpenCase
}) {
  const cases = [{
    id: 1,
    client: 'Series-B fintech · LATAM',
    title: 'From 9 spreadsheets to one pipeline',
    tags: ['hubspot', 'lifecycle', 'scoring'],
    stat: '+38%',
    statLabel: 'MQL→SQL conversion'
  }, {
    id: 2,
    client: 'B2B SaaS · remote',
    title: 'Routing that stopped losing demos',
    tags: ['routing', 'slack', 'reporting'],
    stat: '−4 days',
    statLabel: 'time to first touch'
  }, {
    id: 3,
    client: 'Dev tools · EN/ES',
    title: 'A bilingual nurture that actually converts',
    tags: ['nurture', 'copy', 'segments'],
    stat: '2.1×',
    statLabel: 'reply rate'
  }];
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: '72px var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    command: "vale status --pipeline",
    title: "Selected work",
    lede: "Three systems, still running."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, cases.map((c, i) => /*#__PURE__*/React.createElement(Card, {
    key: c.id,
    variant: i === 0 ? 'hard' : 'hairline',
    label: `case study 0${c.id}`,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 3fr',
      gap: 'var(--space-6)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-m)',
      color: 'var(--text-muted)'
    }
  }, c.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-heading)',
      margin: '8px 0 14px'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, c.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      letterSpacing: 'var(--track-display)',
      color: 'var(--accent)',
      lineHeight: 1
    }
  }, c.stat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, c.statLabel), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onOpenCase(c),
    iconAfter: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    }),
    style: {
      marginTop: 14,
      paddingRight: 0
    }
  }, "open")))))));
}
function CaseScreen({
  item,
  onBack
}) {
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: '72px var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onBack,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 14
    }),
    style: {
      paddingLeft: 0,
      marginBottom: 'var(--space-5)'
    }
  }, "back to work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 4fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, item.client), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--size-display-l)',
      letterSpacing: 'var(--track-display)',
      lineHeight: 'var(--leading-display)',
      color: 'var(--text-heading)',
      margin: '16px 0 0'
    }
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-l)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)',
      maxWidth: '58ch'
    }
  }, "Leads arrived from six sources into three CRMs and nobody agreed on what \"qualified\" meant. We rebuilt the definition first, then the machinery around it."), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-6) 0'
    }
  }), /*#__PURE__*/React.createElement(NodeFlow, {
    nodes: [{
      label: 'audit',
      step: '01'
    }, {
      label: 'define',
      step: '02'
    }, {
      label: 'build',
      step: '03'
    }, {
      label: 'handover',
      step: '04'
    }]
  }), /*#__PURE__*/React.createElement(TerminalBlock, {
    style: {
      marginTop: 'var(--space-6)'
    },
    title: "./changelog",
    lines: [{
      command: 'vale run diagnose',
      output: '14 findings · 6 sources · 3 CRMs'
    }, {
      command: 'vale run build --lifecycle --scoring',
      output: '9 workflows replaced by 2'
    }, {
      command: 'vale run refine --week 6',
      output: 'MQL→SQL +38%',
      cursor: true
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    label: "at a glance",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, [['engagement', '10 weeks'], ['stack', 'HubSpot · Segment · Slack'], ['languages', 'EN / ES'], ['result', item.stat + ' ' + item.statLabel]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-m)',
      color: 'var(--text-heading)',
      marginTop: 4
    }
  }, v)))))));
}
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [hubspot, setHubspot] = React.useState(true);
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: '72px var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    command: "vale contact --new",
    title: "Tell me what's broken",
    lede: "One paragraph is enough. I reply within two working days."
  }), /*#__PURE__*/React.createElement(TerminalBlock, {
    style: {
      marginTop: 'var(--space-6)'
    },
    tone: "dark",
    title: "./availability",
    lines: [{
      command: 'vale status',
      output: 'open — q4 2026 · 2 slots'
    }, {
      command: 'vale tz',
      output: 'GMT−3 · overlaps EU mornings',
      cursor: true
    }]
  })), sent ? /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(StatusDot, {
    tone: "ok",
    label: "message sent"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-heading)',
      margin: '12px 0 8px'
    }
  }, "Got it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-body-m)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, "You'll hear back within two working days \u2014 usually with three questions."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 'var(--space-5)'
    },
    onClick: () => setSent(false)
  }, "send another")) : /*#__PURE__*/React.createElement(Card, {
    variant: "hairline",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "name",
    placeholder: "Ana Reyes"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "email",
    prefix: "$",
    placeholder: "ana@company.com"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "what do you need?",
    options: ['positioning', 'pipeline / revops', 'automation', 'not sure yet']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "what's broken?",
    rows: 4,
    placeholder: "Leads land, then nothing happens\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "we're already on HubSpot",
    checked: hubspot,
    onChange: setHubspot
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setSent(true)
  }, "send it"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-mono-s)',
      color: 'var(--text-muted)'
    }
  }, "no newsletter, no funnel"))))));
}
function Site() {
  const [screen, setScreen] = React.useState('home');
  const [dark, setDark] = React.useState(false);
  const [item, setItem] = React.useState(null);
  const go = s => {
    setScreen(s);
    setItem(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: dark ? 'vale-dark' : undefined,
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    tone: dark ? 'dark' : 'light',
    items: ['work', 'services', 'contact'],
    activeItem: screen === 'case' ? 'work' : screen,
    onNavigate: s => go(s === 'services' ? 'home' : s),
    cta: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      checked: dark,
      onChange: setDark,
      label: "crt"
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => go('contact')
    }, "book a call"))
  })), screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    onNavigate: go
  }), screen === 'work' && /*#__PURE__*/React.createElement(WorkScreen, {
    onOpenCase: c => {
      setItem(c);
      setScreen('case');
    }
  }), screen === 'case' && item && /*#__PURE__*/React.createElement(CaseScreen, {
    item: item,
    onBack: () => go('work')
  }), screen === 'contact' && /*#__PURE__*/React.createElement(ContactScreen, null), /*#__PURE__*/React.createElement(Footer, {
    columns: [{
      title: 'site',
      links: ['work', 'services', 'about']
    }, {
      title: 'elsewhere',
      links: ['linkedin', 'github', 'email']
    }],
    note: "\xA9 2026 vale_ \u2014 chaos in, systems out."
  }));
}
Object.assign(window, {
  Site,
  HomeScreen,
  WorkScreen,
  CaseScreen,
  ContactScreen,
  Hero,
  Container
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Graphics.jsx
try { (() => {
const {
  Wordmark,
  Monogram,
  ScanlineSurface,
  BauhausShape,
  PromptCursor,
  TerminalLine,
  NodeFlow,
  Badge,
  StatusDot
} = window.ValeDesignSystem_a3db01;

/** LinkedIn banner — 1584×396. Left ~25% kept clear for the profile photo. */
function LinkedInBanner() {
  return /*#__PURE__*/React.createElement(ScanlineSurface, {
    intensity: "normal",
    style: {
      width: 1584,
      height: 396,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      gridTemplateColumns: '25% 1fr',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      paddingRight: 72
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 64,
      letterSpacing: 'var(--track-display)',
      lineHeight: 1.06,
      color: 'var(--paper-100)',
      margin: 0
    }
  }, "Chaos in. Systems out.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, "Growth on repeat.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 16,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 5,
      background: 'var(--teal-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 96,
      height: 5,
      background: 'var(--orange-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      letterSpacing: 'var(--track-mono)',
      color: 'var(--sage-500)'
    }
  }, "positioning, pipeline, and the automations between them")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 72,
      top: 40
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 30,
    tone: "inverse"
  })));
}

/** 1080×1080 statement post. */
function QuoteCard() {
  return /*#__PURE__*/React.createElement(ScanlineSurface, {
    intensity: "subtle",
    style: {
      width: 1080,
      height: 1080,
      padding: 96,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 44,
    tone: "inverse"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "teal"
  }, "revops")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TerminalLine, {
    command: "vale run growth.flow",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 92,
      letterSpacing: 'var(--track-display)',
      lineHeight: 1.04,
      color: 'var(--paper-100)',
      marginTop: 28
    }
  }, "A funnel nobody maintains", /*#__PURE__*/React.createElement("br", null), "is just a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, "rumour"), ".", /*#__PURE__*/React.createElement(PromptCursor, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(BauhausShape, {
    shape: "square",
    size: 40,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement(BauhausShape, {
    shape: "circle",
    size: 40,
    color: "var(--teal-500)"
  }), /*#__PURE__*/React.createElement(BauhausShape, {
    shape: "triangle",
    size: 40,
    color: "var(--paper-100)"
  })), /*#__PURE__*/React.createElement(StatusDot, {
    tone: "ok",
    label: "vale.systems"
  })));
}

/** 1080×1080 light-mode carousel slide — the systems motif on paper. */
function FlowSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: 'var(--paper-100)',
      padding: 96,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      letterSpacing: 'var(--track-mono)',
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-600)'
    }
  }, "$ "), "vale ls ./pipeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 76,
      letterSpacing: 'var(--track-display)',
      lineHeight: 1.04,
      color: 'var(--ink-900)',
      marginTop: 24,
      maxWidth: '16ch'
    }
  }, "Four stages. Zero spreadsheets.")), /*#__PURE__*/React.createElement(NodeFlow, {
    orientation: "vertical",
    nodes: [{
      label: 'lead',
      detail: 'forms, ads, events'
    }, {
      label: 'score',
      detail: 'fit + intent, weighted'
    }, {
      label: 'nurture',
      detail: 'stage-aware sequences'
    }, {
      label: 'close',
      detail: 'routed and attributed'
    }],
    style: {
      width: 620
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 20,
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, "01 / 05")));
}
function AvatarSet() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      padding: 32,
      background: 'var(--paper-100)'
    }
  }, ['light', 'dark', 'accent'].map(v => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    size: 112,
    variant: v,
    glow: v === 'dark'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: 'var(--track-mono-wide)',
      textTransform: 'uppercase',
      color: 'var(--ink-500)',
      marginTop: 12
    }
  }, v))), [64, 32, 16].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    size: s,
    variant: "accent"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-500)',
      marginTop: 12
    }
  }, s, "px"))));
}
function Graphics() {
  const [tab, setTab] = React.useState('banner');
  const tabs = [['banner', 'linkedin banner · 1584×396'], ['quote', 'statement post · 1080²'], ['flow', 'carousel slide · 1080²'], ['avatar', 'monogram / favicon']];
  const view = {
    banner: /*#__PURE__*/React.createElement(LinkedInBanner, null),
    quote: /*#__PURE__*/React.createElement(QuoteCard, null),
    flow: /*#__PURE__*/React.createElement(FlowSlide, null),
    avatar: /*#__PURE__*/React.createElement(AvatarSet, null)
  }[tab];
  const scale = {
    banner: 0.78,
    quote: 0.58,
    flow: 0.58,
    avatar: 1
  }[tab];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-200)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--paper-300)',
      background: 'var(--paper-100)',
      padding: '0 24px'
    }
  }, tabs.map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      background: 'none',
      border: 'none',
      borderBottom: `2px solid ${tab === k ? 'var(--orange-500)' : 'transparent'}`,
      padding: '16px 18px',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: 'var(--track-mono)',
      color: tab === k ? 'var(--orange-600)' : 'var(--ink-500)'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `scale(${scale})`,
      transformOrigin: 'top center',
      boxShadow: 'var(--shadow-soft)'
    }
  }, view)));
}
Object.assign(window, {
  Graphics,
  LinkedInBanner,
  QuoteCard,
  FlowSlide,
  AvatarSet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Graphics.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BauhausShape = __ds_scope.BauhausShape;

__ds_ns.Monogram = __ds_scope.Monogram;

__ds_ns.ScanlineSurface = __ds_scope.ScanlineSurface;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.NodeFlow = __ds_scope.NodeFlow;

__ds_ns.StepChain = __ds_scope.StepChain;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.PromptCursor = __ds_scope.PromptCursor;

__ds_ns.TerminalBlock = __ds_scope.TerminalBlock;

__ds_ns.TerminalLine = __ds_scope.TerminalLine;

})();
