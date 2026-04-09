import { useRef, useState } from 'react';
import FormPanel from './components/FormPanel/FormPanel';
import PreviewCanvas from './components/Preview/PreviewCanvas';
import { DependencyProvider } from './di/context';
import { createAppContainer } from './di/appDependencies';
import { useProfileForm } from './hooks/useProfileForm';
import { t } from './i18n/messages';
import { exportNodeAsPng } from './services/exportService';
import { toSafeFileName } from './utils/fileName';
import { validateProfile } from './utils/validation';

export default function App() {
  const containerRef = useRef(createAppContainer());

  return (
    <DependencyProvider container={containerRef.current}>
      <AppContent />
    </DependencyProvider>
  );
}

function AppContent() {
  const { data, setField, setContact, setTheme, reset, saveNow } = useProfileForm();
  const tx = (key: Parameters<typeof t>[1], params?: Record<string, string>) => t(data.locale, key, params);

  const previewRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);
  const [exportError, setExportError] = useState('');
  const [savedMsg, setSavedMsg] = useState('');
  const [exportMsg, setExportMsg] = useState('');

  const validation = validateProfile(data);
  const canExport = validation.valid && Boolean(previewRef.current);

  const handleSaveDraft = () => {
    saveNow();
    setSavedMsg(tx('savedDraft'));
    window.setTimeout(() => setSavedMsg(''), 1500);
  };

  const handleExport = async () => {
    if (!previewRef.current) {
      return;
    }

    setExportError('');
    setExportMsg('');
    setExporting(true);
    try {
      const safeName = toSafeFileName(data.nickname);
      await exportNodeAsPng(previewRef.current, `${safeName}-扩列图-${data.ratio}.png`);
      setExportMsg(tx('exportSuccess'));
      window.setTimeout(() => setExportMsg(''), 1800);
    } catch {
      setExportError(tx('exportFail'));
    } finally {
      setExporting(false);
    }
  };

  return (
    <main className="app-root">
      <header className="app-header">
        <h1>{tx('appTitle')}</h1>
        <p>{tx('appSubtitle')}</p>
      </header>

      <div className="layout">
        <FormPanel
          data={data}
          onChange={setField}
          onContactChange={setContact}
          onThemeChange={setTheme}
          onReset={reset}
          onSaveDraft={handleSaveDraft}
        />

        <div className="preview-panel">
          <PreviewCanvas ref={previewRef} data={data} />
          {!validation.valid && (
            <div className="tip error">
              {validation.messages.map((msg) => (
                <p key={msg}>{msg}</p>
              ))}
            </div>
          )}
          {savedMsg && <p className="tip success">{savedMsg}</p>}
          {exportMsg && <p className="tip success">{exportMsg}</p>}
          {exportError && <p className="tip error">{exportError}</p>}
          <div className="actions">
            <button type="button" onClick={handleExport} disabled={!canExport || exporting}>
              {exporting ? tx('exporting') : tx('exportPng')}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
