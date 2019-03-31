import { readdirSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import { styledPackToDict } from './styles';
import * as elementsModules from '../index';
import defaultElement from './defaultElement';

const toLowerFirst = string => string.charAt(0).toLowerCase() + string.slice(1);

const elements = Object.keys(elementsModules).map(n => toLowerFirst(n));

const loadElementDicts = () => {
  const PATH = './src/';
  const dirs = readdirSync(PATH);
  return dirs.reduce((acc, dir) => {
    if (!elements.includes(dir)) {
      return acc;
    }
    const fileName = `${dir}.dict.js`;
    const filePath = join(PATH, dir, fileName);
    const modulePath = join('../', dir, fileName);
    if (existsSync(filePath)) {
      acc[dir] = require(modulePath).default; // eslint-disable-line
    } else {
      acc[dir] = defaultElement;
    }
    return acc;
  }, {});
};

const makeCategoriesFromStyled = dict => {
  const DEFAULT_CATEGORY = 'Разное';
  const categories = {};
  Object.values(dict).forEach(pack => {
    Object.values(pack).forEach(value => {
      categories[value.category || DEFAULT_CATEGORY] = true;
    });
  });
  return categories;
};

const makeCategoriesFromElementsDict = dict => {
  const DEFAULT_CATEGORY = 'Основное';
  const categories = {};
  Object.values(dict).forEach(pack => {
    Object.values(pack).forEach(value => {
      Object.values(value.attributes || {}).forEach(attr => {
        categories[attr.category || DEFAULT_CATEGORY] = true;
      });
    });
  });
  return categories;
};

// const ready = Object.keys(elementsDict).reduce((acc, element) => {
//     // console.log(element);
//     const stylesElement = elementsDict[element].props.styles;
//     // console.log(stylesElement, '!!333!!')
//     acc[element] = Object.assign({}, elementsDict[element]);
//     console.log(element, stylesElement)
//     acc[element].props.styles = stylesElement.reduce((accum, prop) => {
//       accum[prop] = Object.assign({}, styledDict[prop]);
//       return accum;
//     }, {});
//     return acc;
//   }, {});
const makeDict = () => {
  const styledDict = styledPackToDict();
  const elementsDict = loadElementDicts();
  const styledCategories = makeCategoriesFromStyled(styledDict);
  const elementCategories = makeCategoriesFromElementsDict(elementsDict);
  writeFileSync(
    './build/dict.json',
    JSON.stringify({
      styledDict,
      elementsDict,
      categories: { ...styledCategories, ...elementCategories },
    }),
  );
  console.log('dict create'); // eslint-disable-line
};

makeDict();
