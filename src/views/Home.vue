<script setup lang="ts">
import Header from '@/components/Home/Header.vue';
import Cards from '@/components/Home/Cards.vue';
import ApexCharts from 'apexcharts'
import { ref, reactive, computed, watch, onUpdated, onMounted, onBeforeMount } from 'vue';
const scrollBox = ref<null | HTMLElement>(null)
interface Scroller {
      left : number | undefined 
      leftEnable : boolean | undefined
      rightEnable : boolean | undefined 

}
const scroller  = reactive<Scroller>({
      left : 0 ,
      leftEnable : true ,
      rightEnable : true ,
})

function assignScroller( where : 'left' | 'right') {
      if( scrollBox.value && scrollBox.value.scrollLeft != undefined) {
            scroller.left = scrollBox.value.scrollLeft
            scroller.leftEnable = (-(scroller.left - 300) >= scrollBox.value.scrollWidth - scrollBox.value.clientWidth) ? false : true 
            if ( where == 'left' ) scroller.rightEnable = ((scroller.left - 300) > 0) ? false : true
            else scroller.rightEnable = ((scroller.left + 300) > 0) ? false : true
            
      }
}
function scroll ( where : 'left' | 'right' ) : void {
      assignScroller(where)
      if ( where === 'left' ) {
            if ( scrollBox.value && scrollBox.value.scrollLeft > -(scrollBox.value.scrollWidth - scrollBox.value.clientWidth) ) {
                  scrollBox.value.scrollLeft = scrollBox.value.scrollLeft - 300 ;
                  console.log("left" , scrollBox.value.scrollLeft - 300 )
            }
      } else {
            if ( scrollBox.value && scrollBox.value.scrollLeft < 0 ) {
                  scrollBox.value.scrollLeft += 300 ;
                  console.log("right" , scrollBox.value.scrollLeft + 300 )
            }
      }
}

onMounted(()=>{
      assignScroller('right')
})

const colors = reactive({
      red : '#F71735' ,
      purple : '#585191' ,
      orange : '#FF9F1C' ,
      greenDark : '#439775' ,
      greenLight : '#61D095'
})
const percents = reactive({
      chartOne : 85 ,
      chartTwo : 75 ,
      chartThree : 55 ,
      chartFour : 20 ,
})

function liveColor( percent : number ) : string{
      if ( percent < 20 ) return  colors.red ;
      else if ( percent < 40 ) return colors.purple ;
      else if ( percent < 60 ) return colors.orange ;
      else if ( percent < 80 ) return colors.greenDark ;
      else return colors.greenLight ;
}

interface Input {
      name : string
      phone : number | null
      email : string
}
const input = reactive<Input>({
      name : '' ,
      phone : null ,
      email : ''
})
</script>

<template>
      <Header />
      <main>
            <Cards />

            <div class="d-flex container flex-column main-sec align-items-center mb-5">
                  <h2 class="text-center fs-2 fw-bold mb-4">مراحل ثبت درخواست پروژه</h2>
                  <img src="@/assets/Image/Home/HomeSecond.png" class="img-fluid w-75" alt="">
            </div>

            <div class="d-flex flex-column main-third pt-4">
                  <h2 class="text-center fs-2 fw-bold mb-4">چرا دیگران ما را انتخاب کرده‌اند؟</h2>
                  <div class="main-third-charts d-flex flex-wrap justify-content-center align-items-cente">
                        <div class="d-flex flex-column justify-content-center align-items-center mb-5">
                              <div class="pie animate" :style="{ '--p' : percents.chartOne , '--c' : liveColor(percents.chartOne) }">{{ percents.chartOne }}%</div>
                              <h5>مشتریان راضی </h5>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center mb-5">
                              <div class="pie animate" :style="{ '--p' : percents.chartTwo , '--c' : liveColor(percents.chartTwo) }">{{ percents.chartTwo }}%</div>
                              <h5>حسابرسی های موفق</h5>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center mb-5">
                              <div class="pie animate" :style="{ '--p' : percents.chartThree , '--c' : liveColor(percents.chartThree) }">{{ percents.chartThree }}%</div>
                              <h5>تعهد به کار</h5>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center mb-5">
                              <div class="pie animate" :style="{ '--p' : percents.chartFour , '--c' : liveColor(percents.chartFour) }">{{ percents.chartFour }}%</div>
                              <h5>صداقت</h5>
                        </div>
                  </div>
            </div>

            <div class="main-third d-flex flex-column justify-content-center align-items-center mb-3">
                  <h2 class="fw-bold">آخرین مطالب</h2>
                  <div class="container">
                        <div class="main-scroll d-flex justify-content-center alignt-items-center">
                              <button @click="scroll('left')" :class="{ 'scroll-not-enable' : !scroller.leftEnable }">
                                    <i class="fa-light fa-caret-left"></i>
                              </button>
                              <div class="main-scroll-wrapper" ref="scrollBox">
                                    <div class="main-scroll-item position-relative">
                                          <img src="@/assets/Image/Home/placeholder.png" class="img-fluid" alt="">
                                          <div class="position-absolute text-light d-flex justify-content-center align-items-center py-3">
                                                <p class="mb-0 text-center">تمدید مهلت اظهارنامه مالیات بر ارزش افزوده زمستان 1401</p>
                                                <button class="position-absolute shadow-lg">
                                                      <i class="fa-duotone fa-up"></i>
                                                </button>
                                          </div>
                                    </div>
                                    <div class="main-scroll-item position-relative">
                                          <img src="@/assets/Image/Home/Hoghough.jpg" class="img-fluid" alt="">
                                          <div class="position-absolute text-light d-flex justify-content-center align-items-center py-3">
                                                <p class="mb-0 text-center"> افزایش حداقل دستمزد کارگران در سال 1402</p>
                                                <button class="position-absolute shadow-lg">
                                                      <i class="fa-duotone fa-up"></i>
                                                </button>
                                          </div>
                                    </div>
                                    <div class="main-scroll-item position-relative">
                                          <img src="@/assets/Image/Home/download.png" class="img-fluid" alt="">
                                          <div class="position-absolute text-light d-flex justify-content-center align-items-center py-3">
                                                <p class="mb-0 text-center">اعلام نرخ حداقل دستمزد کارگران در سال 1402</p>
                                                <button class="position-absolute shadow-lg">
                                                      <i class="fa-duotone fa-up"></i>
                                                </button>
                                          </div>
                                    </div>
                              </div>
                              <button @click="scroll('right')" :class="{ 'scroll-not-enable' : !scroller.rightEnable }">
                                    <i class="fa-light fa-caret-right"></i>
                              </button>
                        </div>
                  </div>
            </div>

            <div class="main-form d-flex flex-column position-relative">
                  <!-- <div class="position-absolute"></div> -->
                  <h2 class="text-center">درخواست مشاوره</h2>
                  <form class="container d-flex flex-column justify-content-center align-items-center">
                        <div class="main-form-item position-relative mb-3 py-2" :class="{ 'input-style' : input.name  }">
                              <label for="name" class="position-absolute">نام و نام خانوادگی</label>
                              <input type="text" name="name" class="border-0 w-100" v-model="input.name" />
                        </div>

                        <div class="main-form-item position-relative mb-3 py-2"  :class="{ 'input-style' : input.phone  }">
                              <label for="phone" class="position-absolute">تلفن</label>
                              <input type="number" name="phone" class="border-0 w-100" v-model="input.phone" />
                        </div>

                        <div class="main-form-item position-relative mb-3 py-2" :class="{ 'input-style' : input.email  }">
                              <label for="email" class="position-absolute">آدرس ایمیل</label>
                              <input type="email" name="email" class="border-0 w-100" v-model="input.email" />
                        </div>
                        
                        <button type="submit" class="px-4 py-3 fw-bold mb-3">درخواست مشاوره</button>
                  </form>
            </div>
      </main>
</template>
