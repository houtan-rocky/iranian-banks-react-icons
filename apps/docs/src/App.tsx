import { useState, useMemo, useCallback, useEffect } from 'react';
import * as Icons from '@iran-utils/iranian-banks-react-icons';
import { ICONS, CATEGORIES, type Category } from './icons';
import './App.css';

type ViewMode = 'both' | 'color' | 'mono';

function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div className={`toast ${visible ? 'toast-visible' : ''}`}>
      {message}
    </div>
  );
}

function IconCard({
  entry,
  size,
  viewMode,
  onCopy,
}: {
  entry: (typeof ICONS)[number];
  size: number;
  viewMode: ViewMode;
  onCopy: (text: string) => void;
}) {
  const ColorComp = (Icons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>)[entry.colorIcon];
  const MonoComp = entry.monoIcon
    ? (Icons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>)[entry.monoIcon]
    : null;

  const handleClick = () => {
    const imports = [entry.colorIcon];
    if (entry.monoIcon) imports.push(entry.monoIcon);
    onCopy(`import { ${imports.join(', ')} } from '@iran-utils/iranian-banks-react-icons';`);
  };

  return (
    <button className="icon-card" onClick={handleClick} title="Click to copy import">
      <div className="icon-card-icons">
        {(viewMode === 'both' || viewMode === 'color') && ColorComp && (
          <ColorComp width={size} height={size} />
        )}
        {(viewMode === 'both' || viewMode === 'mono') && MonoComp && (
          <MonoComp width={size} height={size} fill="currentColor" />
        )}
      </div>
      <span className="icon-card-name">{entry.displayName}</span>
      <span className="icon-card-key">{entry.colorIcon}</span>
    </button>
  );
}

export default function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('all');
  const [size, setSize] = useState(48);
  const [viewMode, setViewMode] = useState<ViewMode>('both');
  const [toast, setToast] = useState({ message: '', visible: false });

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setToast({ message: 'Copied to clipboard!', visible: true });
  }, []);

  useEffect(() => {
    if (!toast.visible) return;
    const t = setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 2000);
    return () => clearTimeout(t);
  }, [toast.visible]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return ICONS.filter(icon => {
      const matchesSearch =
        !q ||
        icon.displayName.toLowerCase().includes(q) ||
        icon.key.toLowerCase().includes(q) ||
        icon.colorIcon.toLowerCase().includes(q);
      const matchesCat = category === 'all' || icon.category === category;
      return matchesSearch && matchesCat;
    });
  }, [search, category]);

  return (
    <div className="app">
      <Toast message={toast.message} visible={toast.visible} />

      <header className="header">
        <div className="header-inner">
          <h1 className="header-title">
            <span className="flag">🇮🇷</span> Iranian Banks React Icons
          </h1>
          <p className="header-subtitle">
            {ICONS.length}+ SVG icons for Iranian banks and payment providers — color &amp; monochrome variants
          </p>
          <div className="install-box">
            <code>npm install @iran-utils/iranian-banks-react-icons</code>
            <button
              className="copy-btn"
              onClick={() => handleCopy('npm install @iran-utils/iranian-banks-react-icons')}
            >
              Copy
            </button>
          </div>
          <div className="header-links">
            <a
              href="https://github.com/houtan-rocky/iranian-banks-react-icons"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
            >
              ★ GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@iran-utils/iranian-banks-react-icons"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
            >
              npm
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="controls">
          <input
            className="search"
            type="search"
            placeholder="Search icons…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            autoFocus
          />

          <div className="category-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`tab ${category === cat.id ? 'tab-active' : ''}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
                {cat.id !== 'all' && (
                  <span className="tab-count">
                    {ICONS.filter(i => i.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="options">
            <div className="option-group">
              <label className="option-label">View</label>
              <div className="toggle-group">
                {(['both', 'color', 'mono'] as ViewMode[]).map(m => (
                  <button
                    key={m}
                    className={`toggle ${viewMode === m ? 'toggle-active' : ''}`}
                    onClick={() => setViewMode(m)}
                  >
                    {m === 'both' ? 'Both' : m === 'color' ? 'Color' : 'Mono'}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label className="option-label">Size: {size}px</label>
              <input
                type="range"
                min={24}
                max={96}
                step={8}
                value={size}
                onChange={e => setSize(Number(e.target.value))}
                className="slider"
              />
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty">No icons found for &ldquo;{search}&rdquo;</div>
        ) : (
          <>
            <p className="results-count">
              Showing {filtered.length} of {ICONS.length} icons &mdash; click any card to copy its import statement
            </p>
            <div className="icon-grid">
              {filtered.map(entry => (
                <IconCard
                  key={entry.key}
                  entry={entry}
                  size={size}
                  viewMode={viewMode}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        <p>
          MIT License &middot; Made by{' '}
          <a href="https://github.com/houtan-rocky" target="_blank" rel="noopener noreferrer">
            Houtan Rocky
          </a>
        </p>
      </footer>
    </div>
  );
}
