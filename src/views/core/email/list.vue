<template>
  <div class="email-list">
  
    <TaskList website='email'  type='publish' role='email' ref="TaskList"/>
  

  </div>
</template>

<script>
import { taskAPI } from '@/api'
import TaskList from '../Common/TaskList'

export default {
  name: 'EmailDetail',
  components: {
    TaskList
  },
  data () {
    return {
      listParams: {
        pageNo: 1,
        pageSize: 10,
        website: 'email',
        type: 'publish'
      },
      tableData: []
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>
