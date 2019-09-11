import elementary from '@quarkly/elementary';
import { getOmitProps } from '../utils';

const Image = elementary.img({
  name: 'Image',
  styles: [
    'variant',
    'display',
    'height',
    'minHeight',
    'maxHeight',
    'width',
    'minWidth',
    'maxWidth',
    'size',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'flex',
    'order',
    'justifySelf',
    'alignSelf',
    'background',
    'backgroundColor',
    'backgroundImage',
    'backgroundSize',
    'backgroundPosition',
    'backgroundRepeat',
    'border',
    'borderTop',
    'borderRight',
    'borderBottom',
    'borderLeft',
    'borderColor',
    'borderRadius',
    'opacity',
    'boxShadow',
    'overflow',
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'zIndex',
  ],
  variant: 'images',
  effects: {
    hover: ':hover',
  },
  omit: getOmitProps(),
  normalize: true,
  mixins: true,
  aliases: true,
  propTypes: true,
});

export default Image;
