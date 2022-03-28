<template>
    <div class="bg">
        <div class="container">
            <p>{{dataAndTime}}</p>
            <router-link :to="{name: 'Shop'}">
            <h2>&lt; SPE / FRONTEND &gt;</h2>
            </router-link>
        </div>
      <router-view/>

    </div>
</template>

<script>
export default {
    methods:{
        
    },
    computed:{
        dataAndTime(){
            const date = new Date()
            const stringDate = date.toString().split("GMT")
            return stringDate[0]
        }
    }
}
</script>
<style scoped>
.bg{
    background-image: linear-gradient(to right, #00DBDE, #FC00FF);
    width: 100%;
}
</style>
