<template>
    <div class=" py-6 max-w-screen box-border">
        <div class="mb-5 px-4">
            <div class="flex justify-start items-center mb-4">
                <div class="w-24 mr-4" style="text-align-last: justify;">医生姓名</div>
                <el-input class="w-40" v-model="data.doctorName" placeholder="请输入医生姓名" />
            </div>
            <div class="flex justify-start items-center mb-4">
                <div class="w-24 mr-4" style="text-align-last: justify;">患者姓名</div>
                <el-input class="w-40" v-model="data.patientName" placeholder="请输入患者姓名" />
            </div>
            <div class="flex justify-start items-center mb-4">
                <div class="w-24 mr-4" style="text-align-last: justify;">牙位</div>
                <el-input class="w-40" v-model="data.dentalPosition" placeholder="请输入牙位" />
            </div>
            <div class="flex justify-start items-center mb-4">
                <div class="w-24 mr-4" style="text-align-last: justify;">修复体名称</div>
                <el-input class="w-40" v-model="data.repairBody" placeholder="请输入修复体名称" />
            </div>
            <div class="flex justify-start items-center mb-4">
                <div class="w-24 mr-4" style="text-align-last: justify;">质保期</div>
                <el-input class="w-40" v-model="data.warrantyPeriod" placeholder="请输入质保期" />
            </div>
            <div class="flex justify-start items-center mb-4">
                <div class="w-24 mr-4" style="text-align-last: justify;">发卡日期</div>
                <el-date-picker style="width: 160px;" v-model="data.date" type="date" placeholder="请选择发卡日期"
                    size="default" value-format="YYYY年MM月DD日" format="YYYY-MM-DD" />
            </div>
        </div>
        <el-button type="primary" @click="download">确认下载</el-button>
        <div class="relative w-[375px] mt-5" id="image">
            <img class="w-full" src="@/assets/bg.jpg" alt="">
            <div class="bg-white absolute top-44 w-[60%] h-64 right-3 box-border px-5 pt-2">

                    <div class="flex justify-start items-center h-8">
                        <!-- <div class="w-24 text-[#666] font-bold text-base" style="text-align-last: justify;">医生姓名</div>
                        <div class="mr-4 text-[#666] font-bold text-base">:</div> -->
                        <div class="font-bold text-xl">{{ data.doctorName }}</div>
                    </div>
                    <div class="flex justify-start items-center  h-8 mt-1">
                        <!-- <div class="w-24 text-[#666] font-bold text-base" style="text-align-last: justify;">患者姓名</div>
                        <div class="mr-4 text-[#666] font-bold text-base">:</div> -->
                        <div class="font-bold text-xl">{{ data.patientName }}</div>
                    </div>
                    <div class="flex justify-start items-center  h-8 mt-1">
                        <!-- <div class="w-24 text-[#666] font-bold text-base" style="text-align-last: justify;">牙位</div>
                        <div class="mr-4 text-[#666] font-bold text-base">:</div> -->
                        <div class="font-bold text-xl">{{ data.dentalPosition }}</div>
                    </div>
                    <div class="flex justify-start items-center  h-8 mt-1">
                        <!-- <div class="w-24 text-[#666] font-bold text-base" style="text-align-last: justify;">修复体名称</div>
                        <div class="mr-4 text-[#666] font-bold text-base">:</div> -->
                        <div class="font-bold text-xl">{{ data.repairBody }}</div>
                    </div>
                    <div class="flex justify-start items-center  h-8 mt-1">
                        <!-- <div class="w-24 text-[#666] font-bold text-base" style="text-align-last: justify;">质保期</div>
                        <div class="mr-4 text-[#666] font-bold text-base">:</div> -->
                        <div class="font-bold text-xl">{{ data.warrantyPeriod }}</div>
                    </div>
                    <div class="flex justify-start items-center  h-8 mt-0">
                        <!-- <div class="w-24 text-[#666] font-bold text-base" style="text-align-last: justify;">发卡日期</div>
                        <div class="mr-4 text-[#666] font-bold text-base">:</div> -->
                        <div class="font-bold text-xl">{{ data.date }}</div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import html2canvas from 'html2canvas'
import { ElMessage } from 'element-plus'

const data = reactive({ doctorName: '', patientName: '', dentalPosition: '', repairBody: '', warrantyPeriod: '', date: ''});

const download = () => {
    console.log('data',data)
    if (data.doctorName == '') {
        ElMessage({
            message: '请输入医生姓名',
            type: 'warning',
        })
        return
    } else if (data.patientName == '') {
        ElMessage({
            message: '请输入患者姓名',
            type: 'warning',
        })
        return
    } else if (data.dentalPosition == '') {
        ElMessage({
            message: '请输入牙位',
            type: 'warning',
        })
        return
    } else if (data.repairBody == '') {
        ElMessage({
            message: '请输入修复体名称',
            type: 'warning',
        })
        return
    } else if (data.warrantyPeriod == '') {
        ElMessage({
            message: '请输入质保期',
            type: 'warning',
        })
        return
    } else if (data.date == '') {
        ElMessage({
            message: '请选择发卡日期',
            type: 'warning',
        })
        return
    }
    const element = document.querySelector('#image') as HTMLElement
    html2canvas(element, {
        scrollY: 0, // html2canvas默认绘制视图内的页面，需要把scrollY，scrollX设置为0
        scrollX: 0,
        useCORS: true, //支持跨域，但好像没什么用
        allowTaint: true, //允许跨域（默认false）
        scale: 3,
        backgroundColor: '#fff',
    }).then((canvas: any) => {
        // 生成的ba64图片
        const base64Data = canvas.toDataURL('image/png', 1);
        let src = base64ToBlob(base64Data)
        let url =  URL.createObjectURL(src)
        const a: any = document.createElement('a');
        a.href = url;
        a.download = new Date().getTime();
        a.click();
        window.URL.revokeObjectURL(url);
    });
}
const base64ToBlob= (code:any)=> {
  let parts = code.split(';base64,');
  let contentType = parts[0].split(':')[1];
  let raw = window.atob(parts[1]);
  let rawLength = raw.length;
  let uInt8Array = new Uint8Array(rawLength);
  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new window.Blob([uInt8Array], {type: contentType});
}
</script>

<style scoped></style>