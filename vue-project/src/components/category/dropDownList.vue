<template>
    <div class="button-list">
        <p>{{ data.name }}</p>
        <ol>
            <li v-for="opt, index in data.tags" :key="index">{{opt.title}}</li>
        </ol>
    </div>
</template>

<script>

export default{
    props:{
        data: {type: Object, default(){return []}}
    }
}

</script>

<style scoped>

</style>