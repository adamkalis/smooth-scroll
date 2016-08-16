Package.describe({
  name: 'fredy:smooth-scroll',
  version: '9.3.0',
  summary: 'Animate scrolling to anchor links. Wrap of https://github.com/cferdinandi/smooth-scroll',
  git: 'https://github.com/adamkalis/smooth-scroll.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  api.use('ecmascript');
  api.export('smoothScroll', 'client');
  api.addFiles('dist/js/smooth-scroll.js', 'client');
});
