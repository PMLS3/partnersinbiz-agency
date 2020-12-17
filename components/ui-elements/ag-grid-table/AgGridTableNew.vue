<template>
  <div style="height: 100%">
    <ag-grid-vue
      style="width: 100%; height: 100%"
      class="ag-theme-alpine"
      id="myGrid"
      :gridOptions="gridOptions"
      @grid-ready="onGridReady"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      :autoGroupColumnDef="autoGroupColumnDef"
      :rowSelection="rowSelection"
      :groupSelectsChildren="true"
      :suppressRowClickSelection="true"
      :suppressAggFuncInHeader="true"
      :modules="modules"
      :rowData="rowData"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
// import { ClientSideRowModelModule } from 'ag-grid-community/client-side-row-model'
// import { RowGroupingModule } from 'ag-grid-enterprise/row-grouping'
// import { MenuModule } from 'ag-grid-enterprise/menu'
// import { ColumnsToolPanelModule } from 'ag-grid-enterprise/column-tool-panel'
// import 'ag-grid-community/core/dist/styles/ag-grid.css'
// import 'ag-grid-community/core/dist/styles/ag-theme-alpine.css'
export default {
  components: {
    AgGridVue,
  },
  data: function () {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs: null,
      defaultColDef: null,
      autoGroupColumnDef: null,
      rowSelection: null,
      modules: [
        // ClientSideRowModelModule,
        // RowGroupingModule,
        // MenuModule,
        // ColumnsToolPanelModule,
      ],
      rowData: null,
    }
  },
  beforeMount() {
    this.gridOptions = {}
    this.columnDefs = [
      {
        field: 'country',
        rowGroup: true,
        hide: true,
      },
      {
        field: 'sport',
        rowGroup: true,
        hide: true,
      },
      {
        field: 'gold',
        aggFunc: 'sum',
      },
      {
        field: 'silver',
        aggFunc: 'sum',
      },
      {
        field: 'bronze',
        aggFunc: 'sum',
      },
      {
        field: 'age',
        minWidth: 120,
        checkboxSelection: true,
        aggFunc: 'sum',
      },
      {
        field: 'year',
        maxWidth: 120,
      },
      {
        field: 'date',
        minWidth: 150,
      },
    ]
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
    }
    this.autoGroupColumnDef = {
      headerName: 'Athlete',
      field: 'athlete',
      minWidth: 250,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: { checkbox: true },
    }
    this.rowSelection = 'multiple'
  },
  mounted() {
    this.gridApi = this.gridOptions.api
    this.gridColumnApi = this.gridOptions.columnApi
  },
  methods: {
    onGridReady(params) {
      const httpRequest = new XMLHttpRequest()
      const updateData = (data) => {
        this.rowData = data
      }

      httpRequest.open(
        'GET',
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      httpRequest.send()
      httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          updateData(JSON.parse(httpRequest.responseText))
        }
      }
    },
  },
}
</script>

<style></style>
