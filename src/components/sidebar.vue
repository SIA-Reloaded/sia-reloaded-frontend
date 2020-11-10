<template>
  <nav id="sidebar-wrapper">
    <router-link
      v-for="(item, idx) in items"
      :key="idx"
      class="item text-grey0"
      :to="{ name: item.router_name }"
    >
      <div
        :class="{
          'inner-item': true,
          selected: $route.name === item.router_name,
        }"
      >
        <i class="material-icons">{{ item.icon }}</i>
        <span class="ancizar-font text-bold">{{ item.label }}</span>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "sidebar",
  beforeMount() {
    const role = localStorage.getItem("active-role");
    console.log(role);
    if (role === "TEACHER") {
      Array.prototype.push.apply(this.items, [
        {
          label: "Cursos asignados",
          router_name: "assigned_courses",
          icon: "receipt_long",
        },
      ]);
    } else if (role === "ADMIN") {
      Array.prototype.push.apply(this.items, [
        {
          label: "Solicitudes",
          router_name: "homeasd",
          icon: "question_answer",
        },
        {
          label: "Grupos",
          router_name: "groups",
          icon: "group_work",
        },
      ]);
    }
  },
  data() {
    return {
      items: [{ label: "Inicio", router_name: "home", icon: "home" }],
    };
  },
};
</script>

<style lang="scss">
#sidebar-wrapper {
  background-color: $white;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
.item {
  display: flex;
  padding: 10px;
  text-decoration: none;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
}
.inner-item {
  display: flex;
  padding: 10px;
  text-decoration: none;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  border-radius: 20px;
  i {
    margin-right: 5px;
    font-size: 1.5em;
  }
  &.selected {
    background-color: $grey5;
  }
}
</style>
