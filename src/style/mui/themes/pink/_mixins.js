/**
 * Canon
 *
 * @package     Columbus-APP
 * @project     Columbus
 * @repo        https://canon-australia.visualstudio.com/Columbus/_git/Columbus-APP
 *
 */

const mixins = {
 "toolbar": {
   "minHeight": 56,
     "@media (min-width:0px) and (orientation: landscape)": {
     "minHeight": 48
   },
   "@media (min-width:600px)": {
     "minHeight": 64
   }
 }
}

export default mixins;
