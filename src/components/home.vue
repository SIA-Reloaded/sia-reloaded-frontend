<template>
  <div class="wrapper">
    <span>{{ message }}</span>
  </div>
</template>

<script>
import { API, Auth } from "aws-amplify";
export default {
  name: "HomeComponent",
  methods: {
    async getBasicData() {
      return await API.get("suiaapi", "/", {
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession())
            .getIdToken()
            .getJwtToken()}`,
        },
        response: true,
      })
    },
  },
  mounted() {
      console.log(this.getBasicData())
  },
  data: function () {
    return {
      message: "",
    };
  },
};
</script>
