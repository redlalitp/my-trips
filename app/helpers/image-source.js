import { helper } from '@ember/component/helper';

export default helper(function imageSource(destination/*, hash*/) {
  return "assets/images/"+destination+"-thumbnail.jpg";
});
