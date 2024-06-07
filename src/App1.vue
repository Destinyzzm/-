<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <img class="w-20" src="https://yuguwechat.oss-cn-shanghai.aliyuncs.com/GUWEN/my_data_bg.png" alt="">
  <div class="w-20 h-20 bg-black" @click="downLoad"></div>
  <div class="content" id="test">
    <div class="font-bold text-2xl text-center">标题</div>
    <div class="text-base">设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆设计费第三课旷达科技发动机开发都说了会计法电力科技翻到了翻到了发呆放大了发呆</div>
    <div class="grid grid-cols-2 gap-0 bg-danger">
      <div class="pt-[100%] relative" v-for="(item,index) in imgList1" :key="index">
        <img class="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="100" height="100" :src="item" alt="">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted ,ref} from 'vue';
import HelloWorld from './components/HelloWorld.vue'
// import exportWord from 'html-doc-js'
import exportWord from 'js-export-word'

const imgList = ref([
  'https://yuguwechat.oss-cn-shanghai.aliyuncs.com/GUWEN/my_data_bg.png',
  'https://yuguwechat.oss-cn-shanghai.aliyuncs.com/GUWEN/home_bg.png',
  'https://yuguwechat.oss-cn-shanghai.aliyuncs.com/YUGO2.0/new-mine/yugowuwen_logo.png',
  'https://yuguwechat.oss-cn-shanghai.aliyuncs.com/YUGO2.0/new-mine/lexuehuoban_logo.png'
])
const imgList1 = ref<any>([])
const downLoad = ()=>{
  // const wrap = document.getElementById('test')
  // const config = {
  //       document:document, //默认当前文档的document 导出内容是iframe内部时需要使用iframe的document（getElementById('#iframe').contentDocument），注意iframe同域
  //       addStyle:true, // 是否导出样式，默认为true，此操作会将所有样式转换成行内样式导出
  //       fileName:'测试', // 导出文件名（不需要后缀） 存在文件名则会直接下载 否则会仅在success中返回blob
  //       toImg:['canvas','.bg-danger'], // 页面哪些部分需要转化成图片，例如echart图表之类
  //       success(blob:any,dom:any){
  //         console.log(blob,dom)
  //       } // 完成之后回调， blob及完整处理后dom
  // }
  // exportWord(wrap,config) 


const wrap = document.getElementById('test')
const config = {
      addStyle:true, // 是否导出样式，默认为true，此操作会将所有样式转换成行内样式导出
      fileName:'测试文件', // 导出文件名
      toImg:['.need-to-img','.bg-danger'], // 页面哪些部分需要转化成图片，例如echart图表之类
      success(){} // 完成之后回调，一般页面篇幅比较大，时间比较长
}
exportWord(wrap,config)  
}
const getBase64Image= (src:string) =>{
  return new Promise(resolve => {
        const img = new Image()
        img.crossOrigin = 'Anonymous'
        img.src = src
        img.onload = function () {
            const canvas = document.createElement('canvas')
            canvas.width = img.width
            canvas.height = img.height
            const ctx = canvas.getContext('2d')
            ctx?.drawImage(img, 0, 0, img.width, img.height)
            const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase()
            const dataURL = canvas.toDataURL('image/' + ext)
            resolve(dataURL)
        }
    })
}
onMounted(()=>{
  imgList.value.forEach(async(item:any)=>{
    imgList1.value.push(await getBase64Image(item))
  })
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
