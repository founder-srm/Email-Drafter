<template>
    <div>
        <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
    </div>
</template>

<script setup>

</script>

<style scoped>
input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
}

label {
    cursor: pointer;
    text-indent: -9999px;
    width: 5rem;
    height: 2.5rem;
    background: #d6da55;
    display: block;
    border-radius: 100px;
    position: relative;
}

label:after {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: 0.3rem;
    width: 2rem;
    height: 2rem;
    background: #fff;
    border-radius: 2rem;
    transition: 0.3s;
}

input:checked+label {
    background: grey;
}

input:checked+label:after {
    left: calc(100% - 0.3rem);
    transform: translateX(-100%);
}

label:active:after {
    width: 5rem;
}
</style>