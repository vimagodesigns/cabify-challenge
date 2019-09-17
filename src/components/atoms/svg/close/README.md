# SummaryList
Renders a close svg

## Usage

```
import CloseSvgComponent from 'src/components/atoms/svg/close/closeSvg.component';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| className | Class name of the SVG | string | undefined |
| fill | Color of the SVG | string | 'black' |
| size | size in pixel (height and width) | Number | undefined |
| width | width of the SVG | Number | 18 |
| height | height of the SVG | Number | 18 |

```
<CloseSvgComponent size={24} fill={'#aaa'} className={'foo-class'} />

or

<CloseSvgComponent height={10} width={20} fill={'#aaa'} className={'foo-class'} />
```

Note: Normally if you have a size you are defining the same height and width so it makes no 
sense to have size with width and height and viceversa
