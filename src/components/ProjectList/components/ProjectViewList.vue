<template>
  <div>
    <div v-for="project_item in projects" :key="project_item.id" class="list-item-project">
     
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: Array,
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
</style>