# svelte3-parcel-starter

A starter for svelte3 bundled with parcel and tested via jest.

[![NPM Test Status](https://github.com/edm00se/svelte3-parcel-starter/workflows/Node.js%20Testing/badge.svg)](https://github.com/edm00se/svelte3-parcel-starter/actions?workflow=Node.js+Testing) [![GitHub Pages Deploy Status](https://github.com/edm00se/svelte3-parcel-starter/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/edm00se/svelte3-parcel-starter/actions?workflow=Deploy+to+GitHub+Pages)

## Includes

- [parcel](https://parceljs.org/) dev server and builds
- [svelte 3](https://svelte.dev/)
- ecmascript (es6+), transpiled by [babel](https://babeljs.io/) 7.9.0+
- sass/scss support, both global import in js and in svelte component style blocks, via parcel, [sass](https://github.com/sass/dart-sass), and [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess)
- [jest](https://jestjs.io/) unit testing

## Installation

- `git clone https://github.com/edm00se/svelte3-parcel-starter.git`
- `cd svelte3-parcel-starter`
- `npm install`

## Usage

- `npm run dev` - parcel's development server
- `npm run build` - production build, builds to `dist/`
- `npm test` - runs jest

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

- [svelte](https://svelte.dev/)
- [parcel](https://parceljs.org/)
- [parcel-plugin-svelte](https://github.com/DeMoorJasper/parcel-plugin-svelte/)
- [jest](https://jestjs.io/)
- [svelte-jest](https://github.com/ktsn/svelte-jest)

## License

MIT
