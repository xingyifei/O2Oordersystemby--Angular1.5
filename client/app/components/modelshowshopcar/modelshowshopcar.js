import modelshowshopcarComponent from './modelshowshopcar.component';
import {Button} from 'fancyui';
import modelshowdetalController from './modelshowshopcar.model.controller'
export default angular.module('modelshowshopcar', [
  Button.name
])
.component('modelshowshopcar', modelshowshopcarComponent)
.constant('modelshowshopcar',{instance:null})
.controller('modelshowshopcarmodelcontroller',modelshowdetalController)
