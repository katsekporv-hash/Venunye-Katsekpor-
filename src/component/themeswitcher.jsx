import React from 'react';

const accentOptions = [
  { key: 'blue', label: 'Blue' },
  { key: 'green', label: 'Green' },
  { key: 'orange', label: 'Orange' },
  { key: 'pink', label: 'Pink' },
];

const ThemeSwitcher = ({ mode, accent, onToggleMode, onAccentChange }) => {
  return (
    <div className="theme-tools" aria-label="Theme controls">
      <button
        type="button"
        className="mode-toggle"
        onClick={onToggleMode}
        aria-label="Toggle light or dark mode"
      >
        {mode === 'light' ? 'Dark' : 'Light'}
      </button>

      <div className="accent-palette" aria-label="Accent color palette">
        {accentOptions.map((option) => (
          <button
            type="button"
            key={option.key}
            title={option.label}
            aria-label={`Set ${option.label} accent`}
            className={accent === option.key ? 'accent-dot active' : 'accent-dot'}
            data-accent-choice={option.key}
            onClick={() => onAccentChange(option.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
