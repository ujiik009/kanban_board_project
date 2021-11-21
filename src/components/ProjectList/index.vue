<template>
  <div class="content-page">
    <div class="container-box">
      <div class="content-left">
        <div id="project-box">
          <div id="project-box-header">
            <div>Project List</div>
            <div>{{ date_now }}</div>
          </div>

          <div id="summary-box">
            <div>
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: 450px;
                  background-color: #e8e8e8;
                  padding: 10px 20px 10px 20px;
                  border-radius: 20px;
                "
              >
                <!-- in progress -->
                <div>
                  <div style="font-size: 32px; font-weight: bold">
                    {{ in_progress }}
                  </div>
                  <div style="font-weight: bold">In Progress</div>
                </div>
                <!-- in progress -->
                <!-- Upcomeing -->
                <div>
                  <div style="font-size: 32px; font-weight: bold">
                    {{ upcomeing }}
                  </div>
                  <div style="font-weight: bold">Upcomeing</div>
                </div>
                <!-- Upcomeing -->
                <!-- Total Task -->
                <div>
                  <div style="font-size: 32px; font-weight: bold">
                    {{ total_task }}
                  </div>
                  <div style="font-weight: bold">Total Task</div>
                </div>
                <!-- Total Task -->
              </div>
            </div>
            <div>
              <!-- btn 1 -->
              <b-button
                @click="view_page_active = 'card'"
                v-bind:class="{
                  ['btn-view']: true,
                  ['active-btn']: view_page_active == 'card',
                }"
                ><b-icon icon="grid-3x3-gap-fill"></b-icon
              ></b-button>
              <!-- btn 1  -->

              <!-- btn 2 -->
              <b-button
                @click="view_page_active = 'list'"
                v-bind:class="{
                  ['btn-view']: true,
                  ['active-btn']: view_page_active == 'list',
                }"
                ><b-icon icon="list-ul"></b-icon
              ></b-button>
              <!-- btn 2 -->
            </div>
          </div>

          <div id="view-content">
            
            <ProjectViewCard
              :projects="project"
              v-if="view_page_active == 'card'"
            />

            <ProjectViewList
              :projects="project"
              v-if="view_page_active == 'list'"
            />
          </div>
        </div>
      </div>
      <div class="content-right">
        <div id="my-task-today">
          <div style="color: #ffffff; font-size: 24px" class="font-impact">
            <b-icon icon="card-checklist"></b-icon>
            <span style="margin-left: 10px">My Task Today</span>
          </div>
          <div class="my-task-today-zone">
            <div v-for="(task_item, index) in tasks" class="task" :key="index">
              <div style="width: 50px">
                <div class="round" style="margin-top: 15px; margin-left: 10px">
                  <input
                    type="checkbox"
                    :id="`${'checkbox'}${index}`"
                    :checked="task_item.status"
                    @change="task_item.status = !task_item.status"
                  />
                  <label :for="`${'checkbox'}${index}`"></label>
                </div>
              </div>
              <div>
                <div class="overme">
                  {{ task_item.name }}
                </div>
                <div>
                  <b-badge class="badge-label">{{ task_item.label }}</b-badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ProjectViewCard from "@/components/ProjectList/components/ProjectViewCard.vue";
import ProjectViewList from "@/components/ProjectList/components/ProjectViewList.vue";
export default {
  components: {
    ProjectViewCard,
    ProjectViewList,
  },
  data() {
    return {
      view_page_active: "card",
      date_now: moment().format("DD MMMM YYYY"),
      in_progress: 50,
      upcomeing: 12,
      total_task: 62,
      project: [
        {
          id: 1,
          name: "Web Desinger Project",
          percent: 50,
          task_count: 50,
          duration: "2020-12-30 00:00:00",
          created_at: "2020-11-01 00:00:00",
        },
        {
          id: 2,
          name: "Final Project For BSRU",
          percent: 90,
          task_count: 50,
          duration: "2020-12-30 00:00:00",
          created_at: "2020-11-01 00:00:00",
        },
        {
          id: 3,
          name: "Project For internship",
          percent: 5,
          task_count: 50,
          duration: "2020-12-30 00:00:00",
          created_at: "2020-11-01 00:00:00",
        },
        {
          id: 4,
          name: "Main Project",
          percent: 10,
          task_count: 50,
          duration: "2020-12-30 00:00:00",
          created_at: "2020-11-01 00:00:00",
        },
      ],
      tasks: [
        {
          name: "Create Login Page",
          label: "Design",
          status: false,
        },
        {
          name: "Create Register Page",
          label: "Design",
          status: true,
        },
      ],
    };
  },
};
</script>

<style>
.content-page {
  height: 100%;
  overflow-y: auto;
  background-color: #e7e7e7;
  padding-left: 20px;
  padding-right: 20px;
}

.container-box {
  display: flex;
  height: inherit;
}

.content-left {
  padding: 10px;
  flex: 3;
  height: inherit;
}

.content-right {
  flex: 1;
  padding: 10px;
  height: inherit;
}

#project-box {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  height: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
}

#project-box-header {
  font-size: 32px;
  color: #43435e;
  display: flex;
  justify-content: space-between;
}

.btn-view {
  background-color: white;
  color: #43435e;
}

.active-btn {
  background-color: #43435e !important;
  color: white !important;
}

.btn-view:active,
.btn-view:focus,
.btn-view:hover {
  background-color: #43435e !important;
  color: white !important;
}

#summary-box {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

#view-content {
  height: calc(100% - 160px);
  overflow-y: auto;
}

#my-task-today {
  border-radius: 10px;
  padding: 10px;
  background-color: #43435e;
  height: 100%;
}

.my-task-today-zone {
  margin-top: 15px;
  height: 90%;
  overflow-y: auto;
}

.task {
  margin-top: 10px;
  min-height: 60px;
  background-color: white;
  border-radius: 5px;
  display: flex;
}

.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

.overme {
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.badge-label {
  background-color: #dbf6fd;
  color: #00acd9;
}

</style>