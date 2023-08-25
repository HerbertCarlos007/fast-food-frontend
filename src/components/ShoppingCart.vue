<script>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
    name: 'ShoppingCart',

    methods: {
        increaseQuantity(item) {
            item.quantity++
        },

        decrementQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--
            }
        },

        removeProduct(item) {
            this.$store.commit('removeProduct', item.id)
        },
        
        cleanCart() {
            this.$store.commit('cleanCart')
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="title-content">
            <h3 class="title-cart">Carrinho de compras</h3>
        </div>

        <div class="cart-list" v-if="this.$store.state.cart.length > 0">
            <div class="cart-card" v-for="item in $store.state.cart" :key="item.id">
                <div class="img-card">
                    <img :src='item.image'>
                </div>

                <div class="content-card">
                    <div class="info-product">
                        <h3 class="title-product">{{ item.name }}</h3>
                        <span class="category-product">{{ item.category }}</span>
                    </div>
                    <div class="actions-container">
                        <div class="left-side">
                            <button class="button-quantity" @click="decrementQuantity(item)">-</button>
                            <span class="text-quantity">{{ item.quantity }}</span>
                            <button class="button-quantity" @click="increaseQuantity(item)">+</button>
                        </div>

                        <div class="right-side">
                            <span class="button-delete" @click="removeProduct(item)">
                                <span class="fa-solid fa-trash-can"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="emptyCart">
            vazio
        </div>

        <div class="purchase-summary">
            <div class="total-value">
                <div class="info-value">
                    <p>Total</p>
                    <span>R$ {{ $store.getters.total }}</span>
                </div>

                <button class="button-clean-cart" @click="cleanCart()">Remover todos</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 43%;
    height: 400px;
    background-color: #f5f5f5;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
}

.emptyCart {
    height: 100%;
}

.title-content {
    height: 50px;
    align-items: center;
    background: #27ae60;
    border-radius: 5px 5px 0 0;
    color: #fff;
    display: flex;
    font-family: Inter;
    font-style: normal;
    justify-content: flex-start;
    min-height: 40px;
    width: 100%;

}

.title-cart {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    margin-left: 10px
}

.cart-list {
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    width: 100%;
}

.cart-card {
    display: flex;
    margin: 10px 18px 5px;
}

.img-card {
    align-items: center;
    background-color: #e0e0e0;
    border-radius: 5px;
    display: flex;
    height: 70px;
    justify-content: center;
    width: 90px;
}

.img-card img {
    height: 60px;
    width: 60px;
}

.content-card {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.info-product {
    display: flex;
    flex-direction: column;
    height: 45px;
    justify-content: space-between;
    margin-left: 12px;
    margin-top: 5px;
}

.title-product {
    color: #333;
    font-size: 12px;
    font-weight: 700;
    line-height: 24px;
}

.category-product {
    color: #828282;
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
}

.actions-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
}

.left-side {
    display: flex;
    justify-content: center;
}

.button-quantity {
    align-items: center;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    height: 24px;
    justify-content: center;
    margin: 0 5px;
    width: 24px;
    cursor: pointer;
}

.text-quantity {
    color: #828282;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin-top: 5px;
}

.button-delete {
    color: #bdbdbd;
    font-size: 10px;
    font-weight: 500;
    line-height: 15px;
    cursor: pointer;
}

.purchase-summary {
    align-items: center;
    background: #f5f5f5;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-style: normal;
    height: 80px;
    justify-content: center;
    width: 100%;
}

.total-value {
    border-top: 2px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    width: 90%;
}

.info-value {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.info-value p {
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    color: #828282;
}

.info-value span {
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    color: #828282;
}

.total-value button {
    align-items: center;
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    color: #828282;
    display: flex;
    flex-direction: row;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    justify-content: center;
    margin-bottom: 10px;
    padding: 6px;
    width: 100%;
    cursor: pointer;
}

</style>