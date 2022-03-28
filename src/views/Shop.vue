<template>
    <div>
        <div v-for="product in dataList" :key="product.code">
            <p>{{product.name}}</p>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {

    computed:{
        ...mapState(['data']),
        dataList(){
            return this.data.data.product
        }
    },
    methods:{
        ...mapActions(['getData']),
        listData(){
            this.getData()
        }
    },
    mounted(){
        this.listData()
    },
}
</script>