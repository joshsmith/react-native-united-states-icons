# React Native United States SVG Icons

This library provides SVG icons for all US states and territories, optimized for use with React Native. It leverages the `state-svg-defs` library and uses `jscodeshift` to codemod the SVGs into `react-native-svg` components.

## Usage

### Step 1 - Installation

Install the library using npm or yarn:

```sh
npm install react-native-united-states-icons
```

or

```sh
yarn add react-native-united-states-icons
```

or

```sh
pnpm add react-native-united-states-icons
```

### Step 2 - Importing Icons

Import the desired state icons into your React Native component:

```tsx
import { Alabama, California, Texas } from 'react-native-united-states-icons'

const App = () => (
  <View>
    <Alabama width={50} height={50} />
    <California width={50} height={50} />
    <Texas width={50} height={50} />
  </View>
)
```

### Step 3 - Styling Icons

You can style the icons using the `style` prop or by wrapping them in a styled component:

```tsx
import { Alabama } from 'react-native-united-states-icons'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  icon: {
    color: 'red',
  },
})

const App = () => (
  <View>
    <Alabama width={50} height={50} style={styles.icon} />
  </View>
)
```

## Credit

The original icons were [designed by ProPublica](https://github.com/propublica/stateface) and provided as an icon font. [coryetzkorn](https://github.com/coryetzkorn) converted them to the svgdefs format. Passing on his kudos to ProPublica for the original work—and my kudos for having this repo as a starting point for _this_ new package!

United States territory SVGs from [Wiki Commons](https://commons.wikimedia.org/wiki/File:Blank_USA,_w_territories.svg)

## Contributors

- [joshsmith](https://github.com/joshsmith)
- [coryetzkorn](https://github.com/coryetzkorn)
- [jomurgel](https://github.com/jomurgel)
