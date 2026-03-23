/* S0tool — shared JavaScript
   Loaded by every page as: <script src="./js/script.js"></script>
   All functions are global so onclick= attributes can reach them.
   NOTE: Theme is applied in <head> before CSS loads to prevent flash.
*/

/* ── Theme ───────────────────────────────────────────────────────── */
var THEME_KEY = 's0tool-theme';

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.querySelectorAll('.theme-icon').forEach(function(ic) {
    ic.className = 'theme-icon bi ' + (dark ? 'bi-moon-fill' : 'bi-sun-fill');
  });
  try { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); } catch(e) {}
}

/* ── Tab switcher — GLOBAL, called by onclick="showTab(event,'id')" */
function showTab(e, tabName) {
  var btn     = e.currentTarget || e.target;
  var section = btn.closest ? btn.closest('section') : null;
  var scope   = section || document;

  scope.querySelectorAll('.tab').forEach(function(t) {
    t.classList.remove('active');
  });
  scope.querySelectorAll('.tab-content').forEach(function(c) {
    c.classList.remove('active');
  });

  btn.classList.add('active');

  var target = document.getElementById(tabName);
  if (target) { target.classList.add('active'); }
}

/* ── DOM ready ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {

  /* Auto-update copyright year */
  document.querySelectorAll('.current-year').forEach(function(el) {
    el.textContent = new Date().getFullYear();
  });

  /* Theme toggle buttons */
  document.querySelectorAll('.theme-toggle-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      applyTheme(document.documentElement.getAttribute('data-theme') !== 'dark');
    });
  });

  /* Mobile nav toggle */
  var toggle = document.getElementById('navbar-toggle');
  var links  = document.getElementById('navbar-links');
  if (toggle && links) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      links.classList.toggle('show');
    });
    document.addEventListener('click', function(e) {
      if (!links.contains(e.target) && e.target !== toggle) {
        links.classList.remove('show');
      }
    });
  }

  /* Highlight active nav link */
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(function(a) {
    if (a.getAttribute('href') === current) {
      a.classList.add('active');
    }
  });

  /* Email anti-spam */
  var em = document.getElementById('email-link');
  if (em) {
    em.href        = 'mailto:support@s0tool.nl';
    em.textContent = 'support@s0tool.nl';
  }

});
