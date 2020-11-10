<template>
  <div class="groups-container">
    <div class="list-header">
      <input
        type="text"
        name="find"
        id="find"
        class="inp"
        placeholder="Busca por nombre o código de la materia..."
      />
      <button class="btn btn-primary">
        <i class="material-icons">add</i>Nuevo grupo
      </button>
    </div>
    <div class="list-table">
      <table class="groups-table ancizar-font">
        <thead class="text-bold">
          <tr align="left">
            <th>CÓDIGO</th>
            <th>MATERIA</th>
            <th>GRUPO</th>
            <th>HORARIO</th>
            <th>PROFESOR</th>
            <th>CUPOS</th>
            <th>PARTICIPANTES</th>
          </tr>
        </thead>
        <tbody class="text-light">
          <tr>
            <td>2020202</td>
            <td>Algo</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
            <td>asdf</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "groups",
};
</script>

<style lang="scss">
.groups-container {
  background-color: $grey5;
  padding: 10px;
  border-radius: 10px;
  height: 100%;
  width: auto;
}
.list-header {
  display: flex;
  justify-content: space-between;
}
.list-table {
  display: grid;
  margin-top: 10px;
}
.groups-table {
  border-collapse: collapse;
  thead tr {
    th {
      padding: 5px;
    }
    border-bottom: 1px solid black;
  }
  tbody tr {
    td {
      padding: 5px;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
    }
  }
}
</style>
