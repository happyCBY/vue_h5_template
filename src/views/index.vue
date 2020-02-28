<template>
  <div style="font-size: 20px">
      <!-- 图标使用，将下载好的svg图标，放到icons/svg下面，然后使用 <svg-icon icon-class="arrow-lift" /> icon-class是你图标的名字-->
      图标使用，将下载好的svg图标，放到icons/svg下面，然后使用{{domString}}icon-class是你图标的名字
     <svg-icon icon-class="arrow-lift" />
  </div>
  
  
</template>

<script >
export default {
  data(){
    return {
      domString: "<svg-icon icon-class='arrow-lift' />"
    }
  },
  async created(){
  }
}
</script>

<style scoped lang="less" >

</style>
