<template>
    <div ref="box" class="relative w-full bg-primary transform transition-all duration-500 overflow-hidden  flex items-center justify-center"
            :style="{ height: heroHeight }">
            <div class="z-50">
                    <div class="content">
                        <h1 class="text-4xl md:text-6xl lg:text-9xl font-black text-base-100 px-6">Jawline Exercise Tools</h1>
                        <a ref="tBox" href="" class="border-2 border-base-content w-fit px-4 lg:px-8 py-2 lg:py-4 ml-6 lg:ml-8 mt-2 lg:mt-20 bg-success flex items-center text-black">
                            <span class=" font-black lg:text-2xl whitespace-nowrap">SHOP NOW</span>
                            <svg :class="arrowClass" class=" transform-gpu transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg>
                        </a>
                    </div>
                </div>
            <div class="absolute top-0 left-0 right-0 bottom-0 z-0">
                <img src="/images/example1.jpg" alt="your-image-description" class=" object-cover object-center z-0 w-full h-full">
            </div>
        </div>
</template>

<script setup lang='ts'>
import { MediaQuery } from '@/data/commons/constant'
import { useWindowSize, useElementBounding, useDebounceFn, useMouseInElement } from '@vueuse/core'
const { width, height } = useWindowSize()
const box = ref(null)
const tBox = ref(null)
const { top } = useElementBounding(box)
const { isOutside } = useMouseInElement(tBox)
const { width:tBoxW } = useElementBounding(tBox)
const maxHeight = ref(0)
const heroHeight = ref('1000px')
const updateMaxHeight = () => {
    if (!box.value) return
    if (width.value < MediaQuery.Lg) {
        maxHeight.value = Math.floor((height.value - top.value) / 2)
    } else {
        maxHeight.value = height.value - top.value
    }
    heroHeight.value = `${maxHeight.value}px`
}
const arrowClass = computed(()=>{
    return isOutside.value ? 'opacity-0 w-0': 'opacity-100 w-[30px] ml-4' 
})
const useDebounceFndUpdate = useDebounceFn(updateMaxHeight, 100)
onMounted(() => { 
    useDebounceFndUpdate()
    window.addEventListener('resize', useDebounceFndUpdate)
})
onUnmounted(() => {
    window.removeEventListener('resize', useDebounceFndUpdate)
})
</script>

<style scoped>

</style>
