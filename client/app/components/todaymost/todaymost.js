import todaymostComponent from './todaymost.component';
import {Button} from 'fancyui';
import modelshowdetal from '../modelshowdetal/modelshowdetal';
import {Service} from 'fancyui';
export default angular.module('todaymost', [
  Button.name,
  modelshowdetal.name,
  Service.name
])
.component('todaymost', todaymostComponent);

