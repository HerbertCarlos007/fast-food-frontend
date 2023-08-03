<script>
export default {
    name: 'ListProducts'
}
</script>

<template>
    <div class="container">
        <div class="card">
            <div class="img-content">
                <img src="https://i.imgur.com/Vng6VzV.png" class="img-card">
            </div>
            <div class="info-content">
                <h3 class="name-product">Hamburger</h3>
                <span class="category">Sanduiches</span>
                <p class="price">R$ 14,00</p>
                <button class="button-add">Adicionar</button>
            </div>
        </div>
        
        <div class="card">
            <div class="img-content">
                <img src="https://i.imgur.com/Vng6VzV.png" class="img-card">
            </div>
            <div class="info-content">
                <h3 class="name-product">Hamburger</h3>
                <span class="category">Sanduiches</span>
                <p class="price">R$ 14,00</p>
                <button class="button-add">Adicionar</button>
            </div>
        </div>
        
        <div class="card">
            <div class="img-content">
                <img src="https://i.imgur.com/Vng6VzV.png" class="img-card">
            </div>
            <div class="info-content">
                <h3 class="name-product">Hamburger</h3>
                <span class="category">Sanduiches</span>
                <p class="price">R$ 14,00</p>
                <button class="button-add">Adicionar</button>
            </div>
        </div>
        
        <div class="card">
            <div class="img-content">
                <img src="https://i.imgur.com/Vng6VzV.png" class="img-card">
            </div>
            <div class="info-content">
                <h3 class="name-product">Hamburger</h3>
                <span class="category">Sanduiches</span>
                <p class="price">R$ 14,00</p>
                <button class="button-add">Adicionar</button>
            </div>
        </div>
        
        <div class="card">
            <div class="img-content">
                <img src="https://i.imgur.com/Vng6VzV.png" class="img-card">
            </div>
            <div class="info-content">
                <h3 class="name-product">Hamburger</h3>
                <span class="category">Sanduiches</span>
                <p class="price">R$ 14,00</p>
                <button class="button-add">Adicionar</button>
            </div>
        </div>
        
        <div class="card">
            <div class="img-content">
                <img src="https://i.imgur.com/Vng6VzV.png" class="img-card">
            </div>
            <div class="info-content">
                <h3 class="name-product">Hamburger</h3>
                <span class="category">Sanduiches</span>
                <p class="price">R$ 14,00</p>
                <button class="button-add">Adicionar</button>
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
    width: 30%;
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
}
</style>