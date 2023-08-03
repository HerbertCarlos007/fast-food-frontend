<script>
import Header from '../components/Header.vue'
import ListProducts from '../components/ListProducts.vue'
import ShoppingCart from '../components/ShoppingCart.vue';


export default {
    name: 'Home',

    components: {
        Header,
        ListProducts,
        ShoppingCart
    }
}
</script>

<template>
    <Header />
    <div class="container">
        <div class="contents">
            <ListProducts />
           <ShoppingCart/>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;

}

.contents {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
}
</style>