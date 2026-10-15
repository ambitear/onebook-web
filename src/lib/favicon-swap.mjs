/**
 * Keeps `<link rel="icon">` in step with the resolved theme.
 * Shared because it has to run on the landing pages (SiteHead, `set:html`) and on
 * the docs (Starlight's `head` option), and both drive colour through `data-theme`.
 */
export const faviconSwap = `(function () {
  var LIGHT = '/favicon.svg', DARK = '/favicon-dark.svg';
  function pick() {
    var t = document.documentElement.dataset.theme;
    if (t !== 'dark' && t !== 'light') {
      t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return t === 'dark' ? DARK : LIGHT;
  }
  function sync() {
    var href = pick();
    document.querySelectorAll('link[rel~="icon"]').forEach(function (link) {
      if (link.href.slice(-href.length) !== href) link.href = href;
    });
  }
  sync();
  new MutationObserver(sync).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', sync);
  if (!document.querySelector('link[rel~="icon"]')) {
    document.addEventListener('DOMContentLoaded', sync);
  }
})();`;
