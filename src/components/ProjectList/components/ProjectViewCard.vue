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

            <div style="float: right">
              <b-dropdown
                size="sm"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <b-icon
                    style="font-size: 24px; color: #43435e"
                    icon="three-dots-vertical"
                  ></b-icon>
                </template>
                <b-dropdown-item href="#">Delete project</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>

          <div class="project_name_text overme">
            {{ project_item.name }}
          </div>

          <div>
            <div
              style="
                margin-top: 20px;
                font-weight: bold;
                font-size: 20px;
                color: #43435e;
              "
            >
              Progress
            </div>
            <b-progress :value="project_item.percent" :max="100"></b-progress>
            <div style="text-align: right; font-weight: bold">
              {{ project_item.percent }}%
            </div>
            <div class="footer-card">
              <div></div>
              <div>
                <b-badge class="badge-label-task"
                  >{{ project_item.task_count }} Task</b-badge
                >
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    projects: Array,
  },
  methods: {
    show_created_at(date) {
      // 2020-11-01 00:00:00
      return moment(date, "YYYY-MM-DD HH:mm:ss").format("MMMM DD YYYY");
    },
  },
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

.project_name_text {
  color: #43435e;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
}

.overme {
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.progress {
  border-radius: 20px;
  background-color: #f6f6f6;
}

.progress-bar {
  border-radius: 20px;
  background-color: #7be4ff;
}

.footer-card {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.badge-label-task {
  border-radius: 20px;
  font-size: 15px;
  background-color: #effcff !important;
  color: #00acd9;
}


</style>