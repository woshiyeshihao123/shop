fis.hook('relative');

fis.set('project.ignore', [
  'output/**',
  'dist/**',
  'node_modules/**',
  '.git/**',
  'package.json',
  'package-lock.json',
  'jsconfig.json',
  '.gitignore',
  'dev.bat',
  'fis-conf.js',
  'README.md',
  'src/{common,widgets}/**',
]);

fis.match('/src/(**)', {
  release: '/$1'
});

fis.match('*.{scss,css}', {
  parser: fis.plugin('node-sass'),
  rExt: '.css'
});

fis.match('*.{ts,js}', {
  parser: fis.plugin('typescript'),
  rExt: '.js'
});

// fis.match('*.{js,css,ts,scss}', {
//   useHash: true
// });

// fis.match('::image', {
//   useHash: true
// });

fis.media('prod')
  // .match('**.{js, ts}', {
  //   optimizer: fis.plugin('uglify-js')
  // })
  // .match('**.{css, scss}', {
  //   optimizer: fis.plugin('clean-css')
  // })
  // .match('*.png', {
  //   optimizer: fis.plugin('png-compressor'),
  // })
  // .match('*.js', {
  //   parser: fis.plugin('babel-5.x')
  // })
  .match('/src{/,/pages/**/,/widgets/**/,/common/**/}(*.{scss,css})', {
    release: '/assets/css/$1',
  })
  .match('/src{/,/pages/**/,/widgets/**/,/common/**/}(*.{ts,js})', {
    release: '/assets/js/$1',
  })
  .match('/src{/,/pages/**/,/widgets/**/,/common/**/}(*.png)', {
    release: '/assets/img/$1',
  })
  .match('/src/h5-{pages,widgets,common}/**/(*.{scss,css})', {
    release: '/h5-assets/css/$1',
  })
  .match('/src/h5-{pages,widgets,common}/**/(*.{ts,js})', {
    release: '/h5-assets/js/$1',
  })
  .match('/src/h5-{pages,widgets,common}/**/(*.png)', {
    release: '/h5-assets/img/$1',
  })
  .match('**', {
    relative: true
  });
