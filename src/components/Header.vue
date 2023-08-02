<script>
    export default {
        name: 'Header'
    }
</script>

<template>
    <div class="header">
        <div class="content">
            <div class="title-header">
                <h1 class="title">Burger</h1>
            </div>
            <div class="input-search">
                <form class="form-content">
                    <input type="text" class="input" placeholder="Digitar Pesquisa">
                    <button class="button-search" type="submit">Pesquisar</button>
                </form>
            </div>
        </div>
    </div> 
</template>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f5f5f5;
    height: 100px;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
}

.input-search {
    height: 60px;
    width: 40%;
    background-color: #FFF;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
}

.input {
    border-style: none;
    outline-style: none;
}


.form-content, .input-search {
    align-items: center;
    display: flex;
}

.form-content {
    justify-content: space-between;
    margin: 0 15px;
    width: 100%;
}

.button-search {
    font-size: 14px;
    height: 40px;
    width: 100px;
    align-items: center;
    background-color: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 4px;
    color: #FFF;
    font-weight: 500;
    justify-content: center;
    margin: 5px 0;
}

</style>