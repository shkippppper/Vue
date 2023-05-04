<template>
    <component :is="getComponent" :data="data" @input="filter"></component>
    
</template>

<script>
import buttonList from '../category/buttonList.vue'
import dropDownList from '../category/dropDownList.vue'
export default{
    components:{
        buttonList,
        dropDownList
    },
    props:{
        data: {type: Object, default(){return []}}
    },
    data(){
        return {
            componentsMap : {
                "ARMREST": "buttonList",
                "UPHOLSTERY": "buttonList",
                "BUTTONLIST": "buttonList",
                "DROPDOWN_LIST": "dropDownList",
            }
        }
    },  
    computed: {
        getComponent(){
            return this.componentsMap[this.data.type]
        },
        
    },
    methods:{
        filter(){
            
        }
    }
}

</script>

<style scoped>

</style>