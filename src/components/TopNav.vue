<script lang="ts" setup>
import { onMounted, ref, type VNodeRef, computed } from 'vue';
const sliderPosition = ref<number | undefined>(0)
const selectedElementWidth = ref<number | undefined>(0)
const selectedIndex = ref<number | undefined>(0)
const element = ref<HTMLElement[] | null>(null)
const links = ref([
      {
            icon : 'fa-duotone fa-house' ,
            text : 'صفحه نخست'
      } ,
      {
            icon : 'fa-duotone fa-circle-question' ,
            text : 'سوالات متداول'
      } ,
      {
            icon : 'fa-duotone fa-newspaper' ,
            text : 'اخبار و اطلاعیه ها'
      } ,
      {
            icon : 'fa-duotone fa-typewriter' ,
            text : 'مقالات'
      },
      {
            icon : 'fa-duotone fa-messages' ,
            text : 'تماس با ما'
      },
      {
            icon : 'fa-duotone fa-address-card' ,
            text : 'درباره ما'
      }
])

const positionToMove = computed(() => sliderPosition.value + "px" )
const sliderWidth = computed(() => selectedElementWidth.value + "px" )
function sliderIndicator(id : number) : void  {
      const el : HTMLElement | undefined = element.value?.[id]
      sliderPosition.value = el?.offsetLeft ;
      selectedElementWidth.value = el?.offsetWidth ;
      selectedIndex.value = id
}
const burgerOpen = ref<boolean>(false)
</script>
<template>
      <ul class="menu">
            <div class="menu-indicator" :style="{ left : positionToMove , width : sliderWidth }"></div>
            <li 
                  class="menu-item" 
                  v-for="(link , index) in links" 
                  :key="link.text" 
                  ref="element"
                  
                  @click="sliderIndicator(index)">
                  <a href="#" class="menu-link" v-wave>
                        <i :class="link.icon"></i>
                        <span class="w-100">{{ link.text }}</span>
                  </a>
            </li>
      </ul>
      <div class="container-fluid py-2 menuS">
            <button class="burgerBtn my-2" :class="{ 'burgerOpen' : burgerOpen }" @click="burgerOpen = !burgerOpen">
                  <span></span>
            </button>
      </div>
      <aside class="side" :class="{ 'slide-open' : burgerOpen}">
            <ul>
                  <li v-for="link in links" :key="link.text">
                        <a href="#" class="menu-link" v-wave>
                              <i :class="link.icon" class="ms-3 fs-5"></i>
                              <span class="w-100">{{ link.text }}</span>
                        </a>
                  </li>
            </ul>
      </aside>
</template>