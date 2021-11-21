<template>
  <div>
    <div
      v-for="project_item in projects"
      :key="project_item.id"
      class="list-item-project"
    >
      <div class="container-item">
        <div class="center-vertical name-project-text">
          {{ project_item.name }}
        </div>
      </div>
      <div class="container-item">
        <div class="center-vertical">
          <div style="font-weight: bold">Created at</div>
          <div>{{ show_created_at(project_item.created_at) }}</div>
        </div>
      </div>
      <div class="container-item">
        <div class="center-vertical">
          <div style="font-weight: bold">Task Count</div>
          <div style="text-align: center">
            <b-badge class="badge-label-task-list">{{
              project_item.task_count
            }}</b-badge>
          </div>
        </div>
      </div>
      <div class="container-item" style="display: flex">
        <div
          class="center-vertical right"
          style="font-size: 20px; font-weight: bold"
        >
          Progress
        </div>
      </div>
      <div class="container-item">5</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    projects: Array,
  },
  methods: {
    show_created_at(created_at) {
      //2020-11-01 00:00:00
      return moment(created_at, "YYYY-MM-DD HH:mm:ss").format(
        "MMM DD YYYY HH:mm:ss"
      );
    },
  },
};
</script>

<style>
.list-item-project {
  cursor: pointer;
  color: #43435e;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-top: 20px;
  height: 150px;
  background-color: #dbf6fd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
}
.container-item {
  position: relative;
  padding: 10px;
  height: 100%;
  width: 100%;
}

.center-vertical {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.name-project-text {
  font-weight: bold;
}

.badge-label-task-list {
  border-radius: 20px;
  font-size: 20px;
  background-color: #b6ecf8 !important;
  color: #23c3e7;
}

.right {
  position: absolute;
  right: 0%;
}

</style>