<template>
  <div>
    <b-row>
      <b-col
        v-for="project_item in projects"
        :key="project_item.id"
        cols="4"
        md="4"
        sm="12"
      >
        <div class="card-project">
          <div>
            <span style="font-size: 20px">{{
              show_created_at(project_item.created_at)
            }}</span>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from "moment"
export default {
  props: {
    projects: Array,
  },
  methods:{
    show_created_at(date){
      // 2020-11-01 00:00:00
      return moment(date,"YYYY-MM-DD HH:mm:ss").format("MMMM DD YYYY")
    }
  }
};
</script>

<style>
.card-project {
  cursor: pointer;
  padding: 20px;
  border-radius: 20px;
  margin-top: 40px;
  min-height: 200px;
  width: 100%;
  background-color: #dbf6fd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
}
</style>