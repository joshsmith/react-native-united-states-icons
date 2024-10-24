import { parse } from 'svgson'
import path from 'path'
import fs from 'fs'

import { API, FileInfo } from 'jscodeshift'

// A map of US state abbreviations and territories to their full names
const stateMap: { [key: string]: string } = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DC: 'DistrictOfColumbia',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'NewHampshire',
  NJ: 'NewJersey',
  NM: 'NewMexico',
  NY: 'NewYork',
  NC: 'NorthCarolina',
  ND: 'NorthDakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'RhodeIsland',
  SC: 'SouthCarolina',
  SD: 'SouthDakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'WestVirginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
  PR: 'PuertoRico',
  GU: 'Guam',
  VI: 'VirginIslands',
  MP: 'NorthernMarianaIslands',
  AS: 'AmericanSamoa'
}

// Helper function to convert kebab-case to PascalCase for component names
const toPascalCase = (string: string): string =>
  string.replace(/(^\w|-\w)/g, (match) => match.replace(/-/, '').toUpperCase())

const ensureDirectoryExists = (directory: string) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  }
}

interface SvgAttributes {
  width?: string
  height?: string
  viewBox?: string
  d?: string
  cx?: string
  cy?: string
  r?: string
  rx?: string
  ry?: string
  x?: string
  y?: string
  points?: string
  x1?: string
  y1?: string
  x2?: string
  y2?: string
  stroke?: string
  ['stroke-width']?: string
}

interface SvgElement {
  name: string
  attributes: SvgAttributes
  children: SvgElement[]
}

// The transformation function
export default function transformer(
  fileInfo: FileInfo,
  api: API,
  options: any
) {
  // Get the SVG file contents
  const svgFilePath = fileInfo.path
  const svgContent = fs.readFileSync(svgFilePath, 'utf-8')

  // Extract the abbreviation from the file name (assuming the file name is in the form of 'AL.svg')
  const abbreviation = path.basename(svgFilePath, '.svg').toUpperCase()

  // Get the full state/territory name
  const componentName = stateMap[abbreviation] || toPascalCase(abbreviation)

  const usedElements = new Set<string>()

  // Parse the SVG into JSON representation
  return parse(svgContent).then((json: SvgElement) => {
    // Start the component string with TypeScript typing
    let componentString = `const ${componentName}: React.FC<SvgProps> = ({ width = ${
      json.attributes.width || 100
    }, height = ${
      json.attributes.height || 100
    }, ...props}) => (\n  <Svg width={width} height={height} viewBox="${
      json.attributes.viewBox || '0 0 100 100'
    }" {...props}>\n`

    // Traverse the parsed SVG JSON to convert elements into React Native Svg components
    const convertElement = (element: SvgElement) => {
      const { name, attributes } = element

      switch (name) {
        case 'path':
          usedElements.add('Path')
          componentString += `    <Path d="${attributes.d}" />\n`
          break
        case 'circle':
          usedElements.add('Circle')
          componentString += `    <Circle cx="${attributes.cx}" cy="${attributes.cy}" r="${attributes.r}" />\n`
          break
        case 'rect':
          usedElements.add('Rect')
          componentString += `    <Rect x="${attributes.x}" y="${attributes.y}" width="${attributes.width}" height="${attributes.height}" />\n`
          break
        case 'line':
          usedElements.add('Line')
          componentString += `    <Line x1="${attributes.x1}" y1="${
            attributes.y1
          }" x2="${attributes.x2}" y2="${
            attributes.y2
          }" strokeWidth="${
            attributes['stroke-width'] || 1
          }" />\n`
          break
        case 'polygon':
          usedElements.add('Polygon')
          componentString += `    <Polygon points="${attributes.points}" />\n`
          break
        case 'polyline':
          usedElements.add('Polyline')
          componentString += `    <Polyline points="${attributes.points}" />\n`
          break
        case 'ellipse':
          usedElements.add('Ellipse')
          componentString += `    <Ellipse cx="${attributes.cx}" cy="${attributes.cy}" rx="${attributes.rx}" ry="${attributes.ry}" />\n`
          break
        case 'g': // Support for <g> (Group) elements
          usedElements.add('G')
          componentString += `    <G>\n`
          if (element.children && element.children.length > 0) {
            element.children.forEach(convertElement)
          }
          componentString += `    </G>\n`
          break
        case 'title': // Support for <title> elements, extract text from children
          usedElements.add('Title')
          const titleText =
            element.children && element.children.length > 0
              ? element.children.map((child: any) => child.value).join('')
              : ''
          componentString += `    <Title>{'${titleText}'}</Title>\n`
          break
        default:
          console.log(`Element ${name} is not supported yet.`)
      }

      // Recursively handle child elements if they exist
      if (element.children && element.children.length > 0) {
        element.children.forEach(convertElement)
      }
    }

    // Convert all top-level SVG children
    json.children.forEach(convertElement)

    // Derive the import statements that include the used elements
    const importStatements = Array.from(usedElements)
      .map(
        (element) =>
          `import type { SvgProps } from 'react-native-svg';\nimport { Svg, ${element} } from 'react-native-svg';\nimport React from 'react';`
      )
      .join('\n')
    componentString = `${importStatements}\n\n${componentString}`

    // Close the component string
    componentString += `  </Svg>\n);\n\nexport default ${componentName};\n`

    // Ensure the output directory exists
    ensureDirectoryExists(options.outputDir || 'icons')

    // Output the converted component string as a .tsx file
    const outputPath = path.join(
      options.outputDir || 'icons',
      `${componentName}.tsx`
    )
    fs.writeFileSync(outputPath, componentString)
    console.log(`Converted ${componentName} and saved to ${outputPath}`)
  })
}
