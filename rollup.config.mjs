import typescript from '@rollup/plugin-typescript';

const bundle = config => ({
	...config,
	input: 'src/index.ts',
	external: id => !/^[./]/.test(id),
});

export default [
	bundle({
		plugins: [typescript()],
		output: {
			dir: 'dist',
			format: 'es',
			sourcemap: true,
		},
	}),
]
