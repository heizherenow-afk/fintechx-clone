import React, { useState, useEffect, useMemo } from 'react';
import {
  auth,
  authenticateAndSubmitWebsite,
  onAuthStateChanged,
  User,
  validateWebsiteUrl,
} from '../firebase';

export function extractDomainForFavicon(rawInput: string): string | null {
  const trimmed = rawInput.trim().toLowerCase();
  if (!trimmed) return null;
  const withoutProtocol = trimmed.replace(/^(https?:\/\/|\/\/)/i, '');
  const host = withoutProtocol.split(/[/?#:]/)[0];
  if (!host || !/^([a-z0-9-]+\.)+[a-z]{2,}$/i.test(host)) {
    return null;
  }
  return host;
}

export const PlaceholderGlobeIcon: React.FC = () => (
  <svg
    className="fintechx-hero-url-favicon-placeholder"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" stroke="#64748B" strokeWidth="1.75" />
    <path
      d="M3.6 9H20.4M3.6 15H20.4"
      stroke="#64748B"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 3C14.5 5.4 15.9 8.6 15.9 12C15.9 15.4 14.5 18.6 12 21C9.5 18.6 8.1 15.4 8.1 12C8.1 8.6 9.5 5.4 12 3Z"
      stroke="#116EFC"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeroUrlField: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser);
  const [faviconStage, setFaviconStage] = useState<'primary' | 'backup' | 'failed'>('primary');

  const detectedDomain = useMemo(() => extractDomainForFavicon(url), [url]);

  useEffect(() => {
    setFaviconStage('primary');
  }, [detectedDomain]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setCurrentUser(u);
    });
    return () => unsub();
  }, []);

  const faviconSrc = useMemo(() => {
    if (!detectedDomain || faviconStage === 'failed') return null;
    if (faviconStage === 'primary') {
      return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(detectedDomain)}&sz=64`;
    }
    return `https://icons.duckduckgo.com/ip3/${encodeURIComponent(detectedDomain)}.ico`;
  }, [detectedDomain, faviconStage]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const check = validateWebsiteUrl(url);
    if (!check.valid) {
      setErrorMsg(check.error || 'Please enter a valid website URL (e.g., Example.com)');
      return;
    }

    setLoading(true);
    try {
      const { user, websiteUrl } = await authenticateAndSubmitWebsite(url);
      setSuccessMsg(
        `Authenticated as ${user.displayName || user.email || 'User'} · ${websiteUrl} saved`
      );
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('auth/popup-closed-by-user')) {
        setErrorMsg('Sign-in popup was closed before completing authentication.');
      } else {
        setErrorMsg(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="fintechx-hero-url-wrap">
      <div className="fintechx-hero-url-shell">
        <form className="fintechx-hero-url-form" onSubmit={handleSubmit} noValidate>
          <span className="fintechx-hero-url-favicon-box" aria-hidden="true">
            {faviconSrc ? (
              <img
                key={faviconSrc}
                src={faviconSrc}
                alt=""
                className="fintechx-hero-url-favicon-img"
                onError={() => {
                  setFaviconStage((prev) => (prev === 'primary' ? 'backup' : 'failed'));
                }}
              />
            ) : (
              <PlaceholderGlobeIcon />
            )}
          </span>
          <input
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="Example.com"
            aria-label="Enter your website URL"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (errorMsg) setErrorMsg(null);
            }}
            onKeyDown={handleKeyDown}
            disabled={loading}
            className="fintechx-hero-url-input"
          />
          <button
            type="submit"
            disabled={loading}
            className="fintechx-hero-url-btn"
            aria-label="Get started"
          >
            <span className="fintechx-hero-url-btn-text">
              {loading ? 'Connecting...' : 'Get started'}
            </span>
            <span className="fintechx-hero-url-btn-icon" aria-hidden="true">
              <svg
                width="14"
                height="10"
                viewBox="0 0 13 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 1L12 4.5M12 4.5L8.5 8M12 4.5H1"
                  stroke="#116EFC"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </form>
      </div>
      {errorMsg && (
        <p className="fintechx-hero-url-feedback fintechx-hero-url-error" role="alert">
          {errorMsg}
        </p>
      )}
      {!errorMsg && successMsg && (
        <p className="fintechx-hero-url-feedback fintechx-hero-url-success" role="status">
          {successMsg}
        </p>
      )}
      {!errorMsg && !successMsg && currentUser && (
        <p className="fintechx-hero-url-feedback fintechx-hero-url-user">
          Signed in as {currentUser.displayName || currentUser.email}
        </p>
      )}
    </div>
  );
};
