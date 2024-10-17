<template>
    <div>
        <input type="checkbox" id="switch" /><label for="switch" @click="changeTheme">Toggle</label>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let isLightTheme = ref(true)

function changeTheme() {
    document.documentElement.style.removeProperty('background-color');
    document.documentElement.style.removeProperty('background-image');
    if (isLightTheme.value) {
        document.documentElement.style.backgroundColor = '#111927'
        document.documentElement.style.backgroundImage = `
      radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), 
      radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%)`
    }
    else {
        document.documentElement.style.backgroundColor = '#50E3C2'
        document.documentElement.style.backgroundImage = `
    radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%),
    radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%);`
    }
    isLightTheme.value = !isLightTheme.value
}
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