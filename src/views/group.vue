<template>
  <div class="group-container">
    <div class="group-header">
      <div class="header__title">
        <span class="ancizar-font">Grupo 1</span>
      </div>
      <div class="header__actions">
        <button class="btn btn-red">Eliminar</button>
        <button class="btn btn-blue-dark">Editar</button>
      </div>
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
  name: "group",
  methods: {
    async getGroup() {
      try {
        this.loading_course = true;
        const res = await fetch(
          `https://62nbonex6j.execute-api.us-east-1.amazonaws.com/Prod/teachers/getCourse?teacherID=test&courseID=${this.$route.params.course_id}`
        );
        const data = await res.json();
        this.group = data;
        this.loading_group = false;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getGroup();
  },
  data() {
    return {
      loading_group: false,
      group: {},
    };
  },
};
</script>

<style lang="scss">
.group-container {
  background-color: $grey5;
  padding: 10px;
  border-radius: 10px;
  height: 100%;
  width: auto;
}
.group-header {
  display: flex;
  justify-content: space-between;
}
.list-table {
  display: grid;
  margin-top: 10px;
}
.header__actions {
  display: flex;
  .btn {
    margin: 5px;
  }
}
</style>
