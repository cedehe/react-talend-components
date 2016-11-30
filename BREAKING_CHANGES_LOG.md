# Breaking changes log

Before 1.0, `react-talend-components` do NOT follow semver version in releases.
This document aims to ease the WIP migration from a version to another by providing intels about what to do to migrate.

## v0.18.0
* Component: List
* PR : [feat(list): allow title input mode](https://github.com/Talend/react-talend-components/pull/90)
* Changes

| Old Props | New props |
|---|---|
| props.titleKey | props.titleProps.key |
| props.iconKey | props.titleProps.iconKey |
| props.onTitleClick | props.titleProps.onClick |

## v0.17.2
* Component: all
* PR : [fix(Layout): header height use $navbar-height and brand-primary](https://github.com/Talend/react-talend-components/pull/122)
* Changes : need to provide bootstrap theme var file via `sass-loader` to your chore to compile the sass files. Example [here](https://github.com/Talend/react-talend-components/blob/3fff34fe61e2e9288718d635be871e42a24cdf85/.storybook/webpack.config.js)

## v0.16.0
* Component: Typeahead
* PR : [feat: Typeahead component with search icon](https://github.com/Talend/react-talend-components/pull/83)
* Changes : new PEER dependency `"react-autowhatever": "^7.0.0"`

## v0.15.1
* Component: all
* PR : [fix: add access to bootstrap vars in components](https://github.com/Talend/react-talend-components/pull/108)
* Changes : need to provide bootstrap theme var file via `sass-loader` to your chore to compile the sass files. Example [here](https://github.com/Talend/react-talend-components/blob/51b37a8f28e3659de242dc04d3738d52c1ebc626/.storybook/webpack.config.js)

