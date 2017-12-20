<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <line-chart></line-chart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <pie-chart></pie-chart>
        </div>
      </el-col>
    </el-row>

    <h4>监控信息</h4>
    <monitor-table></monitor-table>
  </div>
</template>

<script>
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import MonitorTable from './components/MonitorTable'

export default {
  name: 'dashboard',
  components: {
    LineChart,
    PieChart,
    MonitorTable
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-container {
  .chart-wrapper {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, .1);
    border-color: rgba(0, 0, 0, .1);
    height: 380px;
    margin-bottom: 20px;
  }
}
</style>
