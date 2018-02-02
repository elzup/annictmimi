// @flow
const path = require('path')

const actionTypesPlugin = require('babel-plugin-s2s-action-types').default
const actionCreaterPlugin = require('babel-plugin-s2s-action-creater').default
const reducerCaseCreaterPlugin = require('babel-plugin-s2s-reducer-case-creater')
	.default
const actionRootPlugin = require('babel-plugin-s2s-action-root').default
const reducerTestCasePlugin = require('babel-plugin-s2s-reducer-test-case')
	.default
const stateRootPlugin = require('babel-plugin-s2s-state-root').default
const reducerRootPlugin = require('babel-plugin-s2s-reducer-root').default

const cwd = process.cwd()

const getRootDir = (...x) => path.resolve(cwd, 'src', ...x)
const getTyepDir = x => getRootDir('types', x)

const rootReducerPath = getRootDir('reducer.js')
const rootActionPath = getTyepDir('action.js')
const rootStatePath = getTyepDir('state.js')

const plugins = [
	{
		test: /actionTypes.js$/,
		plugin: [actionTypesPlugin, { removePrefix: 'src/containers' }],
	},
	{
		test: /actionTypes.js$/,
		output: 'actions.js',
		plugin: [actionCreaterPlugin],
	},
	{
		test: /actionTypes.js$/,
		input: 'reducer.js',
		output: 'reducer.js',
		plugin: [reducerCaseCreaterPlugin],
	},
	{
		test: /actionTypes.js$/,
		input: rootActionPath,
		output: rootActionPath,
		plugin: [
			actionRootPlugin,
			{ input: 'src/**/actionTypes.js', output: rootActionPath },
		],
	},
	{
		test: /containers\/.+reducer.js/,
		input: 'reducer.test.js',
		output: 'reducer.test.js',
		plugin: [reducerTestCasePlugin],
	},
	{
		test: /containers\/.+reducer.js/,
		input: rootStatePath,
		output: rootStatePath,
		plugin: [
			stateRootPlugin,
			{ input: 'src/containers/**/reducer.js', output: rootStatePath },
		],
	},
	{
		test: /containers\/.+reducer.js/,
		input: rootReducerPath,
		output: rootReducerPath,
		plugin: [
			reducerRootPlugin,
			{
				input: 'src/containers/**/reducer.js',
				output: rootReducerPath,
				combineReducers: './config',
			},
		],
	},
]

module.exports = {
	watch: './**/*.js',
	plugins,
	templates: [
		{ test: /containers\/.*\/index.js/, input: 'containers.js' },
		{ test: /components\/.*\/index.js/, input: 'components.js' },
		{ test: /components\/.*\/index.test.js/, input: 'component.test.js' },
		{ test: /reducer.js/, input: 'reducer.js' },
		{ test: /reducer.js/, input: 'reducer.test.js', output: 'reducer.test.js' },
		{ test: /reducer.js/, input: 'actionTypes.js', output: 'actionTypes.js' },
		{ test: /selectors.js/, input: 'selectors.js' },
		{ test: /selectors.test.js/, input: 'selectors.test.js' },
		{ test: /logic.js/, input: 'logic.js' },
	],
}
