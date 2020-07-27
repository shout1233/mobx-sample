import React, { useRef } from "react";
import { inject, observer } from "mobx-react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Grid = ({
  columnDefs,
  defaultColDef,
  rowData,
  findAll,
  setGridApi,
  setChangeAge,
  changeTitle,
  title,
}) => {
  const gridApi = useRef();

  const onGridReady = (params) => {
    gridApi.current = params.api;
    setGridApi(params.api, params.columnApi);
    console.log("ready");
    findAll();
    changeTitle("RARARA");
  };

  const onBtForEachNode = () => {
    //console.log("### api.forEachNode() ###");
    //gridApi.current.forEachNode(printNode);
    const selectedNode = gridApi.current.getRowNode(10);
    console.log(selectedNode.data.athlete);
    selectedNode.setSelected(true);
  };

  const onChangeData = () => {
    //console.log("### api.forEachNode() ###");
    //gridApi.current.forEachNode(printNode);

    const selectedNode = gridApi.current.getRowNode(10);
    const newData = {
      ...selectedNode.data,
      age: 200,
      athlete: "배성진",
    };
    selectedNode.setData(newData);
  };

  const onChangeAge = () => {
    //console.log("### api.forEachNode() ###");
    //gridApi.current.forEachNode(printNode);

    //const selectedNode = gridApi.current.getRowNode(10);
    //selectedNode.setDataValue("age", 100);
    setChangeAge(10, 100);
  };

  const printNode = (node, index) => {
    if (node.group) {
      console.log(index + " -> group: " + node.key);
    } else {
      console.log(
        index +
          " -> data: " +
          node.data.country +
          ", " +
          node.data.athlete +
          " , " +
          node.id
      );
    }
  };

  const viewData = () => {
    console.log(JSON.stringify(rowData, null, 2));
  };

  return (
    <div style={{ height: "800px", width: "100%" }}>
      <div
        id="myGrid"
        style={{
          height: "100%",
          width: "100%",
        }}
        className="ag-theme-alpine"
      >
        <p>{title}</p>
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          onGridReady={onGridReady}
        />
        <button onClick={onBtForEachNode}>Print</button>
        <button onClick={onChangeAge}>Change Age</button>
        <button onClick={onChangeData}>Change Data</button>
        <button onClick={viewData}>Change Data</button>
      </div>
    </div>
  );
};

export default inject(({ grid }) => ({
  columnDefs: grid.gridOptions.columnDefs,
  defaultColDef: grid.gridOptions.defaultColDef,
  rowData: grid.gridOptions.rowData,
  findAll: grid.findAll,
  title: grid.gridOptions.title,
  changeTitle: grid.changeTitle,
  age: grid.getAge,
  changeData: grid.changeData,
  setGridApi: grid.setGridApi,
  setChangeAge: grid.setChangeAge,
}))(observer(Grid));
