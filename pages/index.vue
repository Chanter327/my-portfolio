<script setup>
import '@/assets/css/index.css';
import { onMounted } from 'vue';

onMounted(() => {
    const topTheme = document.getElementById('top-theme');
    topTheme.classList.add('displayed');
});

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
    }, 1000);
    menu.classList.remove('active');
    for (let i = 0; i < menuContent.length; i++) {
        menuContent[i].classList.remove('active');
    }
    scrollTo({
        top: 0
    });
}

const toWorks = () => {
    navigate('/works');
}

const toWorksDetails = () => {
    navigate('/works');
}
</script>
<template>
    <div class="top-theme" id="top-theme">Value Each Phase.</div>
    <div class="theme-desc">
        <span>「過程」に価値を</span><br><br>
        成果や結果だけに限らず、プロジェクトや学習など全ての過程に<br class="sp">
        価値を見出すことで、更なる成長につなげることを重要視して活動しています。
    </div>
    <div id="to-works" @click="toWorks">
        Works
        <div class="circle-pos"><div class="circle"></div></div>
        <div class="circle-pos small"><div class="circle small"></div></div>
    </div>
    <div class="top-content">
        <div class="content-title">About</div>
        <div class="content-txt">
            Web開発者 小比類巻友翔のポートフォリオサイトです。<br>
            2023年からWeb開発の学習を始め、Webサイト作成やアプリケーション開発をしています。<br>
            クライアントからの要望を正確に再現し、デザインからコーディング、公開まで<br class="sp">
            全過程を丁寧に実現します。
        </div>
    </div>
    <div class="top-content">
        <div class="content-title">Works</div>
        <div class="works-arr">
            <div class="work-image-container">
                <img src="@/assets/images/nabe2-management.png" alt="">
            </div>
            <div class="work-image-container">
                <img src="@/assets/images/irorodot-s.png" alt="">
            </div>
        </div>
        <div class="view-detail" id="view-detail" @click="toWorksDetails">Details</div>
    </div>
    <div class="top-content">
        <div class="content-title">Skills</div>
        <div class="skills-container">
            <dl class="skill-content">
                <dt class="skill">Frontend</dt>
                <dd class="skill-detail">HTML</dd>
                <dd class="skill-detail">CSS, Sass</dd>
                <dd class="skill-detail">JavaScript</dd>
                <dd class="skill-detail">jQuery</dd>
                <dd class="skill-detail">Vue.js, Nuxt.js</dd>
                <dd class="skill-detail">React, Next.js</dd>
            </dl>
            <dl class="skill-content">
                <dt class="skill">Backend</dt>
                <dd class="skill-detail">Ruby, Ruby on Rails</dd>
            </dl>
            <dl class="skill-content">
                <dt class="skill">Tools</dt>
                <dd class="skill-detail">git, github</dd>
                <dd class="skill-detail">illustrator</dd>
                <dd class="skill-detail">Figma</dd>
            </dl>
        </div>
    </div>
</template>
<style>
</style>