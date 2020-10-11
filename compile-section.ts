/**
 * using watch mode
 * tsc index.ts -w
 * tsc index.ts --watch
 * when you would like to stop, Ctrl + c
 *
 * compile all files
 * tsc --init
 * this command generate tsconfig.json
 *
 * select compile file
 * add 'include', 'exclude', 'files' in tsconfig.json
 *
 * ex.
 * "exclude": [
 *  "compile-section.ts",
 *  "*.spec.ts"
 * ]
 *
 * note:
 * "compile-section.ts" apply to root directory.
 * you'd like to apply to any directory, use "**"
 *
 * default: "node_modules" is excluded.
 * ※ writing new exclude settings, you have to add "node_modules", because default setting is overwrote
 *
 * files
 *
 * target
 * specify ECMAScript target version.
 *
 * lib
 * Specify library files to be included in the compilation
 *
 * sourceMap
 * Debbuging TypeScript in Browser, sourceMap true
 */
