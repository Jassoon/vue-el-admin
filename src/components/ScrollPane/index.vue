<template>
    <el-scrollbar ref="scrollContainer" :vertical="false">
        <slot/>
    </el-scrollbar>
</template>
<script>
export default {
    name:'ScrollPane',
    data(){
        return{

        }
    }
}
</script>