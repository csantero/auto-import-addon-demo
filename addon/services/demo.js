import Service from '@ember/service';
import { capitalize } from 'lodash-es';

export default Service.extend({
  foo: capitalize('foo')
});
