<template>
    <div class="w-full flex items-center justify-center py-1 bg-base-300">
        {{ content }}
    </div>
</template>

<script setup lang='ts'>
import { useContent } from '@/data/commons/siteNavContent'
const { content } = useContent()
</script>

<style scoped>

</style>
