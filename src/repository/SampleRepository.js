import axios from 'axios';

class SampleRepository {
  URL =
    'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json';

  constructor(url) {
    this.URL = url || this.URL;
  }

  findAll(params) {
    return axios.get(`${this.URL}`, { params });
  }
}

// 싱글톤으로 리턴 (매번 새로운 객체를 생성 할 필요가 없다면 처음 부터 싱글톤으로 export)
export default new SampleRepository();
