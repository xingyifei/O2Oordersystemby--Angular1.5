/**
 * components
 * @author name emailAddress
 */

import Service from '../service/service';
import modelshowdetal from './modelshowdetal/modelshowdetal';
import modelshowshopcar from './modelshowshopcar/modelshowshopcar';
import toweekmost from './toweekmost/toweekmost';
import todaymost from './todaymost/todaymost';
export default angular.module('app.components', [
  Service.name,
  modelshowdetal.name,
  todaymost.name,
  toweekmost.name,
  modelshowshopcar.name
]);

