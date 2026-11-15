/* S0tool cookie consent
   Loaded in <head> of every page that used Google Analytics: <script src="./js/consent.js"></script>
   - Google Analytics is only loaded AFTER the visitor clicks Accept.
   - Until then gtag() is a no-op, so no data is sent and no cookies are set.
   - The choice is kept in localStorage; the footer link "Cookie settings" re-opens the banner.
*/
(function () {
  var GA_ID = 'G-9HB5QGY82J';
  var KEY = 's0tool-cookie-consent';
  var loaded = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {};            // no-op until consent is given

  function getChoice() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function setChoice(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window['ga-disable-' + GA_ID] = false;
    window.gtag = function () { window.dataLayer.push(arguments); };
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  function removeAnalytics() {
    window['ga-disable-' + GA_ID] = true;  // stop sending, also if gtag.js is already loaded
    window.gtag = function () {};
    var host = location.hostname, parts = host.split('.'), domains = [host, '.' + host];
    if (parts.length > 2) domains.push('.' + parts.slice(-2).join('.'));
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name === '_ga' || name === '_gid' || name.indexOf('_ga_') === 0 || name.indexOf('_gat') === 0) {
        domains.forEach(function (d) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + d;
        });
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      }
    });
  }

  var TEXT = {
    en: {
      title: 'Cookies',
      body: 'We use Google Analytics cookies to measure how this site is used, so we can improve it. They are only set if you accept. Without them the site works exactly the same.',
      accept: 'Accept', decline: 'Decline', settings: 'Cookie settings'
    },
    nl: {
      title: 'Cookies',
      body: 'We gebruiken Google Analytics-cookies om te meten hoe deze website wordt gebruikt, zodat we hem kunnen verbeteren. Ze worden alleen geplaatst als je accepteert. Zonder deze cookies werkt de site precies hetzelfde.',
      accept: 'Accepteren', decline: 'Weigeren', settings: 'Cookie-instellingen'
    }
  };
  var lang = ((document.documentElement.lang || navigator.language || 'en') + '').toLowerCase().indexOf('nl') === 0 ? 'nl' : 'en';
  var T = TEXT[lang];

  var css =
    '#s0-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:760px;margin:0 auto;' +
    'background:var(--bg2,#fff);color:var(--text,#1e293b);border:1px solid var(--border,#c8d3e8);' +
    'border-radius:var(--radius,10px);box-shadow:0 8px 32px rgba(0,0,0,.25);padding:1rem 1.25rem;' +
    'display:flex;gap:1rem;align-items:center;flex-wrap:wrap;font-size:.92rem;line-height:1.5}' +
    '#s0-consent[hidden]{display:none}' +
    '#s0-consent .s0c-text{flex:1 1 320px;min-width:0}' +
    '#s0-consent .s0c-text strong{display:block;margin-bottom:.15rem}' +
    '#s0-consent .s0c-btns{display:flex;gap:.6rem;flex:0 0 auto}' +
    '#s0-consent .btn{cursor:pointer;min-width:7rem;justify-content:center}';

  function buildBanner() {
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);

    var el = document.createElement('div');
    el.id = 's0-consent';
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', T.title);
    el.hidden = true;
    el.innerHTML =
      '<div class="s0c-text"><strong></strong><span></span></div>' +
      '<div class="s0c-btns">' +
      '<button type="button" class="btn btn-secondary" data-s0c="denied"></button>' +
      '<button type="button" class="btn btn-primary" data-s0c="granted"></button></div>';
    el.querySelector('strong').textContent = T.title;
    el.querySelector('span').textContent = T.body;
    el.querySelector('[data-s0c="denied"]').textContent = T.decline;
    el.querySelector('[data-s0c="granted"]').textContent = T.accept;
    el.addEventListener('click', function (e) {
      var v = e.target && e.target.getAttribute && e.target.getAttribute('data-s0c');
      if (!v) return;
      setChoice(v);
      el.hidden = true;
      if (v === 'granted') loadAnalytics(); else removeAnalytics();
    });
    document.body.appendChild(el);
    return el;
  }

  function init() {
    var banner = buildBanner();
    var choice = getChoice();
    if (choice === 'granted') loadAnalytics();
    else if (choice !== 'denied') banner.hidden = false;

    var footer = document.querySelector('.custom-footer');
    if (footer) {
      var d = document.createElement('div');
      var a = document.createElement('a');
      a.href = '#';
      a.textContent = T.settings;
      a.addEventListener('click', function (e) {
        e.preventDefault();
        banner.hidden = false;
        var b = banner.querySelector('.btn-primary');
        if (b) b.focus();
      });
      d.appendChild(a);
      footer.appendChild(d);
    }
  }

  if (getChoice() === 'granted') loadAnalytics();   // start measuring as early as before
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
