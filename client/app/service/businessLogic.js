class BusinessLogicService {
  constructor(Api, $q) {
    "ngInject";
    this.$q = $q;
    this.Api = Api;
  }

  /**
   * 获得餐品数据
   */
  get(params) {
    return this.Api.get('http://localhost:8080/getList', params);
  }

}

export default BusinessLogicService
