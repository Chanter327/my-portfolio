<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const stalker = document.getElementById('mouse-stalker');
    document.addEventListener('mousemove', (e) => {
        const offsetX = e.clientX + 20;
        const offsetY = e.clientY - 20;
        stalker.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
    });
  });

const handleMenu = () => {
    const menu = document.getElementById('menu');
    const menuContent = document.querySelectorAll('.menu-content');
    const mobileMenu = document.getElementById('menu-for-sp');
    const container = document.getElementById('container');
    if (window.matchMedia('(max-width: 600px)').matches) {
        menu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        container.classList.toggle('move');
    } else {
        menu.classList.toggle('active');
        for (let i = 0; i < menuContent.length; i++) {
            menuContent[i].classList.toggle('active');
        }
    }
}

function navigate(link) {
    const siteContent =document.getElementById('site-content');
    const menu = document.getElementById('menu');
    const menuContent = document.querySelectorAll('.menu-content');
    siteContent.classList.add('navigate');
    setTimeout(() => {
        siteContent.classList.remove('navigate');
    }, 1800);
    setTimeout(() => {
        navigateTo(link);
    }, 750)
    menu.classList.remove('active');
    for (let i = 0; i < menuContent.length; i++) {
        menuContent[i].classList.remove('active');
    }
}

const backHome = () => {
    navigate('/');
}

const toWorks = () => {
    navigate('/works');
}

function spHandler(link) {
    const container = document.getElementById('container')
    const menu = document.getElementById('menu');
    const mobileMenu = document.getElementById('menu-for-sp');
    navigate(link);
    container.classList.remove('move');
    menu.classList.remove('active');
    mobileMenu.classList.remove('active'); 
}

const backHomeSp = () => {
    spHandler('/');
}

const toWorksSp = () => {
    spHandler('/works');
}
</script>
<template>
    <div id="menu-for-sp">
        <ul>
            <li class="sp-menu-content" @click="backHomeSp">Home</li>
            <li class="sp-menu-content" @click="toWorksSp">Work</li>
            <li class="sp-menu-content"><a href="mailto:march09yuuto@gmail.com" style="color: inherit; text-decoration: none;">Contact</a></li>
        </ul>
    </div>
    <div class="container" id="container">
        <li class="menu-content" @click="backHome">Home</li>
        <li class="menu-content" @click="toWorks">Works</li>
        <li class="menu-content"><a href="mailto:march09yuuto@gmail.com">Contact</a></li>
        <div class="wrapper">
            <div id="mouse-stalker"></div>
            <header>
                <div class="site-title" @click="backHome">
                    Web Development Portfolio<br>
                    <span>By Kohiruimaki Yuuto</span>
                </div>
                <div class="updated">
                    Updated<br>
                    Mar 2024
                </div>
                <div id="menu" @click="handleMenu">Menu</div>
            </header>
            <div id="site-content">
                <slot />
            </div>
            <footer>
                <dl class="intro">
                    <dt class="name">小比類巻友翔</dt>
                    <dd class="name-eng">Kohiruimaki Yuuto</dd>
                    <dt class="e-mail">E-mail : <a href="mailto:march09yuuto@gmail.com">march09yuuto@gmail.com</a></dt>
                    <dt class="phone">Tel : 070-1533-6378</dt>
                    <dt class="github-url">github : <a href="https://github.com/Chanter327" target="_blank">https://github.com/Chanter327</a></dt>
                </dl>
            </footer>
        </div>
    </div>
</template>
<style>
</style>