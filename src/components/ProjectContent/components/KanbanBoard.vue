<template>
  <div id="view-content">
    <!-- header -->
    <div class="header">
      <div class="board-label">{{ project_item.name }} Kanban Board</div>
      <div>
        <b-input-group size="sm" class="mb-2">
          <b-form-input
            type="search"
            v-model="text_search"
            placeholder="Search"
          ></b-form-input>
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </div>
    <!-- header -->

    <!-- content -->
    <div class="body-column">
      <!-- todo -->
      <div class="lane-column">
        <div class="lane-column-header">
          <span>Todo ({{tasks.todo.length}})</span>
        </div>
      </div>
      <!-- todo -->

      <!-- In Progress -->
      <div class="lane-column">
        <div class="lane-column-header">
          <span>In Progress ({{tasks.in_progress.length}})</span>
        </div>
      </div>
      <!-- In Progress -->

      <!-- done -->
      <div class="lane-column">
        <div class="lane-column-header">
          <span>Done ({{tasks.done.length}})</span>
        </div>
      </div>
      <!-- done -->
    </div>
    <!-- content -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      project_item: {
        id: 1,
        name: "Web Build Project",
        percent: 50,
        task_count: 50,
        duration: "2020-12-30 00:00:00",
        created_at: "2020-11-01 00:00:00",
      },
      text_search: "",
      tasks: {
        todo: [
          {
            id: 0,
            title: "Create Login Page",
            state: "todo",
            description:
              "Login Page UI : You have to make prototype for you Developer and let them Coding Mockup follow you prototype",
            color: "#AFE4AE",
            assign_to: {
              id: 0,
              fullname: "Jennifer S. Byrd",
              image_profile:
                "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
            },
          },
        ],
        in_progress: [],
        done: [
          {
            id: 2,
            title: "Create API For Login",
            state: "done",
            description:
              "Login Page UI : You have to make prototype for you Developer and let them Coding Mockup follow you prototype",
            color: "#AFE4AE",
            assign_to: {
              id: 0,
              fullname: "Jennifer S. Byrd",
              image_profile:
                "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
#view-content {
  padding: 20px;
  height: calc(100% - 160px);

  overflow-y: auto;
}
.header {
  display: flex;
  justify-content: space-between;
}
.board-label {
  color: #43435e;
  font-size: 30px;
  font-weight: bold;
}
.body-column {
  overflow: auto;
}

.lane-column-header {
  position: relative;
}

.lane-column {
  height: 650px;
  width: 300px;
  border-radius: 10px;
  display: inline-block;
  margin: 25px;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(97, 97, 97, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(97, 97, 97, 1);
  box-shadow: 0px 0px 5px 0px rgba(97, 97, 97, 1);
}
</style>