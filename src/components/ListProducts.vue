<script>
import Products from '../Products'
import { toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';

export default {
    name: 'ListProducts',
    
    data() {
        return {
            products: Products
        }
    },
    
    methods: {
        addProduct(product) {
            this.$store.commit('addProduct', product)
            toast.success('Produto adicionado no carrinho!'), {
                autoClose: 1000,
               
            }
            
        }
    },
    
}
</script>

<template>
    <div class="container">
        <div v-for="product in products" :key="product.id" class="card">
            <div class="img-content">
                <img :src='product.image' class="img-card">
            </div>
            <div class="info-content">
                <h3 class="name-product">{{product.name}}</h3>
                <span class="category">{{ product.category }}</span>
                <p class="price">R$ {{ product.price }}</p>
                <button class="button-add" @click="addProduct(product)">Adicionar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 55%;
    flex-wrap: wrap;
}

.card {
    width: 31.5%;
    background: #fff;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    box-sizing: border-box;
    height: 250px;
    margin: 5px;
}

.img-content {
    align-items: center;
    background: #f5f5f5;
    display: flex;
    height: 100px;
    justify-content: center;
    width: 100%;
}

.info-content {
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-style: normal;
    gap: 9px;
    justify-content: flex-start;
    margin: 15px 10px;
    width: 90%;
}

.img-card {
    height: 100px;
    width: 120px;
}

.name-product {
    font-size: 16px;
    font-weight: 700;
    color: #333;
    line-height: 24px;
    white-space: nowrap;
}

.category {
    color: #828282;
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;
}

.price {
    color: #27ae60;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
}

.button-add {
    align-items: center;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    color: #fff;
    display: flex;
    flex-direction: row;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    height: 30px;
    justify-content: center;
    width: 106px;
    cursor: pointer;
}
</style>