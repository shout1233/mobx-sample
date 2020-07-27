import { observable, action, computed } from "mobx";
import sampleRepository from "../repository/SampleRepository";

export default class GridStore {
  constructor(root) {
    this.root = root;
  }

  @observable
  gridOptions = {
    api: {},
    columnApi: {},
    columnDefs: [
      {
        headerName: "Participant",
        children: [
          { field: "athlete" },
          {
            field: "age",
            maxWidth: 90,
          },
        ],
      },
      {
        headerName: "Details",
        children: [
          { field: "country" },
          {
            field: "year",
            maxWidth: 90,
          },
          { field: "date" },
          { field: "sport" },
        ],
      },
      {
        headerName: "Medals",
        children: [
          { field: "gold", editable: true },
          { field: "silver" },
          { field: "bronze" },
          { field: "total" },
          {
            headerName: "Id",
            maxWidth: 100,
            valueGetter: function (params) {
              const sum =
                1000 +
                Number(params.data.gold) +
                Number(params.data.silver) +
                Number(params.data.bronze);
              console.log("aa");
              return formatNumber(sum);
            },
          },
        ],
      },
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    rowData: [],
    title: "BSJ",
  };

  @computed
  get getAge() {
    console.log("update");
    return this.gridOptions.rowData.reduce((previous, current) => {
      return previous + current.age;
    }, 0);
  }

  @action
  findAll = async (params) => {
    const data = await sampleRepository.findAll(params);

    this.gridOptions.rowData = data.data;
  };

  @action
  changeTitle = (title) => {
    this.gridOptions.title = title;
  };

  @action
  setGridApi = (api, columnApi) => {
    this.gridOptions.api = api;
    this.gridOptions.columnApi = columnApi;
  };

  @action
  setChangeAge = (id, age) => {
    const selectedNode = this.gridOptions.api.getRowNode(10);
    selectedNode.setDataValue("age", 100);
    console.log("aa");

    //const selectedNode = gridApi.current.getRowNode(10);
    //selectedNode.setDataValue("age", 100);
  };
}

function formatNumber(number) {
  return Math.floor(number)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
