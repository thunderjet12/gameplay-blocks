/**
 * The internal dependencies.
 */
declare let module : any

import * as utils from '../lib/utils';
import keyBy from 'lodash/keyBy';
import mapValues from 'lodash/mapValues';

module.exports = mapValues(
  keyBy(utils.getUserConfig().bundles, bundle => bundle),
  bundle => utils.srcScriptsPath(`${bundle}/index.ts`)
);
// let test1 =  mapValues(
//   keyBy(utils.getUserConfig().bundles, bundle => bundle),
//   bundle => utils.srcScriptsPath(`${bundle}/index.ts`),
// );

// let test2 = mapValues(
//   keyBy(utils.getUserConfig().components, component => component),
//   component => utils.srcScriptsPath(`admin/components/${component}/index.ts`)
// )

// module.exports = { ...test1, ...test2 }

  
  
  
  

// module.exports.entry = true