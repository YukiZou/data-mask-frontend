<!-- 面包屑，小的那个导航栏，可以看出目前处于那个位置了。 -->
<template>
  <el-row>
    <el-breadcrumb separator="/" style="margin-bottom: 20px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="index <= 5">{{showPageName(index)}}</el-breadcrumb-item>
    </el-breadcrumb>
  </el-row>
</template>

<script>
export default {
  props: {
    index: Number
  },
  methods: {
    showPageName (index) {
      if (index === 1) return '离线数据脱敏'
      if (index === 2) return '实时流数据脱敏'
      if (index === 3) return '数据同步'
      if (index === 4) return '历史数据查看'
      if (index >= 5) return '登录'
    }
  }
}
</script>
