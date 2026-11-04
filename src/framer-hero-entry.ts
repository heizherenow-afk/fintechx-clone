// @ts-ignore - Framer's pre-bundled React runtime in /assets/js/
import {
  s as initReact1,
  E as initReact2,
  d as createElement,
  _ as useState,
  y as useEffect,
} from './react.BGjYHp9I.mjs';
import {
  auth,
  authenticateAndSubmitWebsite,
  onAuthStateChanged,
  User,
  validateWebsiteUrl,
} from './firebase';

initReact1();
initReact2();

const HERO_URL_CSS = `
.fintechx-hero-url-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}
.fintechx-hero-url-shell {
  width: min(630px, 90vw);
  padding: 5px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.45);
  border: 1.5px solid rgba(255, 255, 255, 0.88);
  box-shadow: 0 14px 34px rgba(35, 100, 195, 0.18), 0 2px 6px rgba(15, 23, 42, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-sizing: border-box;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.fintechx-hero-url-shell:focus-within {
  box-shadow: 0 16px 40px rgba(17, 110, 252, 0.26), 0 0 0 3px rgba(66, 152, 255, 0.28), inset 0 1px 1px rgba(255, 255, 255, 1);
}
.fintechx-hero-url-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  padding: 6px 7px 6px 14px;
  border-radius: 9999px;
  background: linear-gradient(180deg, rgba(231, 242, 255, 0.92) 0%, rgba(220, 236, 255, 0.96) 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.96);
  box-shadow: inset 0 2px 6px rgba(59, 130, 246, 0.08);
  box-sizing: border-box;
  gap: 12px;
  margin: 0;
}
.fintechx-hero-url-favicon-box {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(17, 110, 252, 0.14);
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.08);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.fintechx-hero-url-favicon-img {
  width: 22px;
  height: 22px;
  object-fit: contain;
  border-radius: 4px;
  display: block;
}
.fintechx-hero-url-favicon-placeholder {
  width: 20px;
  height: 20px;
  display: block;
}
.fintechx-hero-url-input {
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Inter Display", "Inter", system-ui, -apple-system, sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #1d2430;
  padding: 0;
  margin: 0;
}
.fintechx-hero-url-input::placeholder {
  color: #64748b;
  opacity: 0.9;
  font-weight: 500;
}
.fintechx-hero-url-btn {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  height: 52px;
  padding: 0 9px 0 24px;
  border-radius: 9999px;
  background: linear-gradient(180deg, #4298ff 0%, #116efc 100%);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 6px 16px rgba(17, 110, 252, 0.36), inset 0 1px 1px rgba(255, 255, 255, 0.42);
  color: #ffffff;
  font-family: "Inter Display", "Inter", system-ui, -apple-system, sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.01em;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
}
.fintechx-hero-url-btn:hover:not(:disabled) {
  filter: brightness(1.05);
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(17, 110, 252, 0.44), inset 0 1px 1px rgba(255, 255, 255, 0.5);
}
.fintechx-hero-url-btn:active:not(:disabled) {
  transform: translateY(0);
}
.fintechx-hero-url-btn:disabled {
  opacity: 0.75;
  cursor: wait;
}
.fintechx-hero-url-btn-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 5px rgba(15, 23, 42, 0.12);
}
.fintechx-hero-url-feedback {
  margin: 10px 0 0 0;
  font-family: "Inter Display", "Inter", system-ui, -apple-system, sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
}
.fintechx-hero-url-error {
  color: #dc2626;
}
.fintechx-hero-url-success {
  color: #0f766e;
}
.fintechx-hero-url-user {
  color: #334155;
}
@media (max-width: 1439px) and (min-width: 1024px) {
  .fintechx-hero-url-shell { width: min(590px, 88vw); }
  .fintechx-hero-url-form { height: 64px; padding: 6px 7px 6px 13px; }
  .fintechx-hero-url-favicon-box { width: 36px; height: 36px; }
  .fintechx-hero-url-input { font-size: 19px; }
  .fintechx-hero-url-btn { height: 50px; padding: 0 8px 0 22px; font-size: 16.5px; gap: 12px; }
  .fintechx-hero-url-btn-icon { width: 33px; height: 33px; }
}
@media (max-width: 1023px) and (min-width: 640px) {
  .fintechx-hero-url-shell { width: min(520px, 90vw); }
  .fintechx-hero-url-form { height: 60px; padding: 6px 6px 6px 12px; }
  .fintechx-hero-url-favicon-box { width: 34px; height: 34px; }
  .fintechx-hero-url-favicon-img { width: 20px; height: 20px; }
  .fintechx-hero-url-input { font-size: 18px; }
  .fintechx-hero-url-btn { height: 46px; padding: 0 7px 0 18px; font-size: 15.5px; gap: 10px; }
  .fintechx-hero-url-btn-icon { width: 30px; height: 30px; }
}
@media (max-width: 639px) {
  .fintechx-hero-url-shell { width: calc(100vw - 28px); max-width: 420px; padding: 4px; }
  .fintechx-hero-url-form { height: 54px; padding: 4px 5px 4px 10px; gap: 8px; }
  .fintechx-hero-url-favicon-box { width: 30px; height: 30px; }
  .fintechx-hero-url-favicon-img, .fintechx-hero-url-favicon-placeholder { width: 17px; height: 17px; }
  .fintechx-hero-url-input { font-size: 16px; }
  .fintechx-hero-url-btn { height: 44px; padding: 0 6px 0 14px; font-size: 14px; gap: 8px; }
  .fintechx-hero-url-btn-icon { width: 28px; height: 28px; }
}
`;

function ensureStylesInjected() {
  if (typeof document === 'undefined') return;
  let styleEl = document.getElementById('fintechx-hero-url-styles');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'fintechx-hero-url-styles';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = HERO_URL_CSS;
}

ensureStylesInjected();

function extractDomainForFavicon(rawInput: string): string | null {
  const trimmed = rawInput.trim().toLowerCase();
  if (!trimmed) return null;
  const withoutProtocol = trimmed.replace(/^(https?:\/\/|\/\/)/i, '');
  const host = withoutProtocol.split(/[/?#:]/)[0];
  if (!host || !/^([a-z0-9-]+\.)+[a-z]{2,}$/i.test(host)) {
    return null;
  }
  return host;
}

function renderPlaceholderFavicon() {
  return createElement(
    'svg',
    {
      className: 'fintechx-hero-url-favicon-placeholder',
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      'aria-hidden': 'true',
    },
    createElement('circle', {
      cx: '12',
      cy: '12',
      r: '9',
      stroke: '#64748B',
      strokeWidth: '1.75',
    }),
    createElement('path', {
      d: 'M3.6 9H20.4M3.6 15H20.4',
      stroke: '#64748B',
      strokeWidth: '1.5',
      strokeLinecap: 'round',
    }),
    createElement('path', {
      d: 'M12 3C14.5 5.4 15.9 8.6 15.9 12C15.9 15.4 14.5 18.6 12 21C9.5 18.6 8.1 15.4 8.1 12C8.1 8.6 9.5 5.4 12 3Z',
      stroke: '#116EFC',
      strokeWidth: '1.6',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    })
  );
}

export function HeroUrlAuthWidget() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser);
  const [faviconStage, setFaviconStage] = useState<'primary' | 'backup' | 'failed'>('primary');

  const detectedDomain = extractDomainForFavicon(url);

  useEffect(() => {
    setFaviconStage('primary');
  }, [detectedDomain]);

  useEffect(() => {
    ensureStylesInjected();
    const unsub = onAuthStateChanged(auth, (u) => {
      setCurrentUser(u);
    });
    return () => unsub();
  }, []);

  let faviconSrc: string | null = null;
  if (detectedDomain && faviconStage !== 'failed') {
    faviconSrc =
      faviconStage === 'primary'
        ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(detectedDomain)}&sz=64`
        : `https://icons.duckduckgo.com/ip3/${encodeURIComponent(detectedDomain)}.ico`;
  }

  const handleSubmit = async (e?: any) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
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

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return createElement(
    'div',
    { className: 'fintechx-hero-url-wrap' },
    createElement(
      'div',
      { className: 'fintechx-hero-url-shell' },
      createElement(
        'form',
        {
          className: 'fintechx-hero-url-form',
          onSubmit: handleSubmit,
          noValidate: true,
        },
        createElement(
          'span',
          { className: 'fintechx-hero-url-favicon-box', 'aria-hidden': 'true' },
          faviconSrc
            ? createElement('img', {
                key: faviconSrc,
                src: faviconSrc,
                alt: '',
                className: 'fintechx-hero-url-favicon-img',
                onError: () => {
                  setFaviconStage((prev: 'primary' | 'backup' | 'failed') =>
                    prev === 'primary' ? 'backup' : 'failed'
                  );
                },
              })
            : renderPlaceholderFavicon()
        ),
        createElement('input', {
          type: 'url',
          inputMode: 'url',
          autoComplete: 'url',
          placeholder: 'Example.com',
          'aria-label': 'Enter your website URL',
          value: url,
          onChange: (e: any) => {
            setUrl(e.target.value);
            if (errorMsg) setErrorMsg(null);
          },
          onKeyDown: handleKeyDown,
          disabled: loading,
          className: 'fintechx-hero-url-input',
        }),
        createElement(
          'button',
          {
            type: 'submit',
            disabled: loading,
            className: 'fintechx-hero-url-btn',
            'aria-label': 'Get started',
          },
          createElement(
            'span',
            { className: 'fintechx-hero-url-btn-text' },
            loading ? 'Connecting...' : 'Get started'
          ),
          createElement(
            'span',
            { className: 'fintechx-hero-url-btn-icon', 'aria-hidden': 'true' },
            createElement(
              'svg',
              {
                width: '14',
                height: '10',
                viewBox: '0 0 13 9',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              createElement('path', {
                d: 'M8.5 1L12 4.5M12 4.5L8.5 8M12 4.5H1',
                stroke: '#116EFC',
                strokeWidth: '1.8',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              })
            )
          )
        )
      )
    ),
    errorMsg
      ? createElement(
          'p',
          { className: 'fintechx-hero-url-feedback fintechx-hero-url-error', role: 'alert' },
          errorMsg
        )
      : null,
    !errorMsg && successMsg
      ? createElement(
          'p',
          { className: 'fintechx-hero-url-feedback fintechx-hero-url-success', role: 'status' },
          successMsg
        )
      : null,
    !errorMsg && !successMsg && currentUser
      ? createElement(
          'p',
          { className: 'fintechx-hero-url-feedback fintechx-hero-url-user' },
          `Signed in as ${currentUser.displayName || currentUser.email}`
        )
      : null
  );
}

export default HeroUrlAuthWidget;
