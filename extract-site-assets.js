const https = require('https');

https.get('https://www.abogadoslydiagarciaoviedo.com/', (res) => {
  let html = '';
  res.on('data', (chunk) => {
    html += chunk;
  });
  res.on('end', () => {
    console.log(html.slice(0, 3000));
    console.log('\n---HTML END PREVIEW---\n');
    const uniq = (regex) => [...new Set([...html.matchAll(regex)].map((m) => m[1]))];
    const css = uniq(/<link[^>]+href=["']([^"']+\.css[^"']*)["']/gi);
    const imgs = uniq(/<img[^>]+src=["']([^"']+)["']/gi);
    const scripts = uniq(/<script[^>]+src=["']([^"']+)["']/gi);

    console.log('CSS');
    console.log(css.join('\n'));
    console.log('\nIMAGES');
    console.log(imgs.join('\n'));
    console.log('\nSCRIPTS');
    console.log(scripts.join('\n'));
  });
});
