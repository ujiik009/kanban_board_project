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
          </div>
        </div>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      date_now: moment().format("DD MMMM YYYY"),
      in_progress: 50,
      upcomeing: 12,
      total_task:62
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
</style>