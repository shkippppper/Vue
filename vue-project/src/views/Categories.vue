<template>
    <div>
        <!-- <ul>
            <li >
                {{ widget }}                
            </li>
        </ul> -->
        <BaseWidget v-for="widget, index in widgets" :key="index" :data="widget" />


    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import BaseWidget from '../components/layout/BaseWidget.vue'
    export default{
        components:{
            BaseWidget
        },
        props: {
            slug: {default: null}
        },
        computed: {
            ...mapGetters({widgets : 'category/categoryWidgets'})
        },
        watch: {
            slug(slug){
                this.$store.dispatch("category/fetchWidgetData", slug)
            }
        },
        mounted(){
            this.$store.dispatch("category/fetchWidgetData", this.slug)
        }
    }
</script>

<style scoped>

</style>