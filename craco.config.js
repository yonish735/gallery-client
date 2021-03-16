const CracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        // includePaths: ['/external/dir/with/components'], // Optional. If you want to include components which are not in src folder
        enableSvgr: true, // Optional.
        esbuildLoaderOptions: {
          loader: 'jsx',
          target: 'es2015',
        },
      },
    },
  ],
};
