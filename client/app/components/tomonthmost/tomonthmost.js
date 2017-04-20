import startComponent from './tomonthmost.component';
import {Button} from 'fancyui';

export default angular.module('tomonthmost', [
  Button.name
])
.component('tomonthmost', startComponent);

