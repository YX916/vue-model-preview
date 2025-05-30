<template>
    <div :class="container"></div>
</template>
<script>
import * as THREE from 'three';
export default {
    name: 'vue-model-preview',
    props: {
        container: {
            type: String,
            default: 'model-preview-container'
        }
    },
    data () {
        this.scene = null;
        this.camera = null;
        this.mesh = null;
        this.renderer = null;
        return {
        };
    },
    methods: {
        init () {
            this.createScene(); // 创建场景
            this.loadModel(); // 加载模型
            this.createLight(); // 创建光源
            this.createCamera(); // 创建相机
            this.createRender(); // 创建渲染器
            this.render(); // 渲染
        },
        createScene () {
            this.scene = new THREE.Scene();
        },
        createLight () {

        },
        createCamera () {

        },
        createRender () {

        },
        render () {
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.render); // 循环渲染
        }
    },
    mounted () {
    }
};
</script>
<style></style>