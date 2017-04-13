import todaymostComponent from './modelshowdetal.component';
import {Button} from 'fancyui';
import modelshowdetalController from './modelshowdetal.model.controller'

export default angular.module('modelshowdetal', [
  Button.name
])
.component('modelShowDetal', todaymostComponent)
.constant('modelshowdetalcont',{instance:null})
.controller('modelshowdetalmodelController',modelshowdetalController)
