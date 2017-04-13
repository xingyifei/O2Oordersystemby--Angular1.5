/**
 * bp admin entry
 * @author name emailAddress
 */

'use strict';

import angular from 'angular';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import router from './router/router';
import './skin/theme.less';
import 'angular-busy/dist/angular-busy';
import 'angular-busy/angular-busy.css';
import 'angular-ui-bootstrap';
import 'jquery';
import 'bootstrap';
angular.module('app', [
    router.name,
    Common.name,
    Components.name,
     'cgBusy',
     'ui.bootstrap',
  ])
  .constant('$menuConstant', {
    DEBUG: process.env.DEBUG
  })
  .component('app', AppComponent)
.config(function(){
	window.showlist = [];
	window.allprice = 0;
})
  console.log('process.env.DEBUG', process.env.DEBUG);
