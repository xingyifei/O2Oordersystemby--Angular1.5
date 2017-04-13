import startComponent from './toweekmost.component';
import {Button} from 'fancyui';

export default angular.module('start', [
  Button.name
])
.component('toweekmost', startComponent);

