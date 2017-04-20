import startComponent from './toweekmost.component';
import {Button} from 'fancyui';

export default angular.module('toweekmost', [
  Button.name
])
.component('toweekmost', startComponent);

