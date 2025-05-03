const esbuild = require('esbuild');
const chokidar = require('chokidar');
const fs = require('fs');

const buildOptions = {
    entryPoints: ['src/index.js'],
    bundle: true,
    outdir: 'dist',
    loader: {
        '.png': 'file',
        '.svg': 'file',
        '.jpg': 'file',
        '.ttf': 'file',
    },
};

async function start() {
    // First build
    await esbuild.build(buildOptions);

    // Copy index.html initially
    fs.copyFileSync('src/index.html', 'dist/index.html');

    // Start the dev server
    const ctx = await esbuild.context(buildOptions);
    const { host, port } = await ctx.serve({
        servedir: 'dist',
    })
    console.log(`Server running at http://${host}:${port}`);

    // Watch for changes to src/index.html and copy 
    const watcher = chokidar.watch('./src/index.html');
    watcher.on('change', () => {
        console.log('src/index.html changed');
        fs.copyFileSync('src/index.html', 'dist/index.html');
    });

    await ctx.watch();
}

start().catch(() => process.exit(1));
