<script lang="ts" setup>
import { ref } from 'vue';

const needs = ref<string[]>([
      "شرکت خدمات حسابداری" ,
      "شرکت خدماتی مالیاتی" ,
      "شرکت خدمات حسابرسی" ,
      "خدمات حسابداری" ,
      "خدمات مالیاتی" ,
      "خدمات حسابرسی" ,
      "شرکت خدمات حسابداری و مالی" ,
      "شرکت خدمات حسابداری و مالیاتی" ,
      "موسسه خدمات مالی" ,
      "موسسه خدمات حسابداری"
]) 
</script>
<template>
      <footer class="d-grid footer w-100 py-3 px-4 position-relative">
            <div class="footer-title mb-2">
                  <img src="@/assets/Image/Home/footer-icon.png" alt="icon" class="mb-2">
                  <p>گروه خدمات حسابداری و مالیاتی پیشداد، درراستای جلب رضایت و آسودگی خاطر مشتریان خدمات خود را در اسرع وقت و بالاترین کیفیت ارائه می دهد.</p>
            </div>
            <!-- About Us section -->
            <div class="footer-item">
                  <h2 class="fw-bold d-flex align-items-center">
                        <i class="fa-duotone fa-address-card ms-2"></i>
                        درباره ما
                  </h2>
                  <ul>
                        <li class="d-flex mb-3">
                              <i class="fa-duotone fa-phone-office fs-5"></i>
                              <p class="m-0 me-2">تلفن : 02188990405</p>
                        </li>
                        <li class="d-flex mb-3">
                              <i class="fa-duotone fa-location-dot fs-5"></i>
                              <p class="m-0 me-2">آدرس : تهران، میدان فلسطین ، خیابان فلسطین ، پلاک ۳۵۷ ساختمان پزشکان ۱۵۷، طبقه ۴، واحد ۲۷</p>
                        </li>
                        <li class="d-flex mb-3">
                              <i class="fa-duotone fa-clock fs-5"></i>
                              <p class="m-0 me-2">ساعت کاری : از ساعت 9 صبح الی 18</p>
                        </li>
                  </ul>
            </div>
            <div class="footer-item">
                  <h2 class="fw-bold d-flex align-items-center">
                        <i class="fa-duotone fa-toolbox ms-2"></i>
                        خدمات ما
                  </h2>
                  <ul>
                        <li class="mb-1">
                              <i class="fa-duotone fa-chevron-left"></i>
                              خدمات مالیاتی
                        </li>
                        <li class="mb-1">
                              <i class="fa-duotone fa-chevron-left"></i>
                              خدمات حسابداری
                        </li>
                        <li class="mb-1">
                              <i class="fa-duotone fa-chevron-left"></i>
                              خدمات حسابرسی
                        </li>
                        <li class="mb-1">
                              <i class="fa-duotone fa-chevron-left"></i>
                              خدمات نرم افزاری 
                        </li>
                        <li class="mb-1">
                              <i class="fa-duotone fa-chevron-left"></i>
                              خدمات مشاوره کسب و کار
                        </li>
                        <li class="mb-1">
                              <i class="fa-duotone fa-chevron-left"></i>
                              خدمات حقوقی
                        </li>
                  </ul>
            </div>
            <div class="footer-item">
                  <h2 class="fw-bold d-flex align-items-center">
                        <i class="fa-duotone fa-newspaper ms-2"></i>
                        تازه‌های مالی و مالیاتی
                  </h2>
                  <ul>
                        <li class="mb-2">
                              <i class="fa-duotone fa-chevron-left"></i>
                              تمدید مهلت اظهارنامه مالیات بر ارزش افزوده زمستان 1401
                        </li>
                        <li class="d-flex align-items-center mb-2">
                              <img src="@/assets/Image/Home/Hoghough.jpg" class="rounded-3 ms-2">
                              <span>
                                    افزایش حداقل دستمزد کارگران در سال 1402
                              </span>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                              <img src="@/assets/Image/Home/download.png" class="rounded-3 ms-2">
                              <span>
                                    اعلام نرخ حداقل دستمزد کارگران در سال 1402
                              </span>
                        </li>
                  </ul>
            </div>
            <div class="footer-item">
                  <h2 class="fw-bold d-flex align-items-center">
                        <i class="fa-duotone fa-users-line ms-2"></i>
                        نیاز شرکت‌ها
                  </h2>
                  <ul>
                        <li class="mb-1" v-for="item in needs" :key="item">
                              <i class="fa-duotone fa-chevron-left"></i>
                              {{  item  }}
                        </li>
                  </ul>
            </div>
      </footer>
      <div class="text-center bg-black bg-gradient text-bg-dark py-2 under-footer position-relative">
            <i class="fa-light fa-face-frown"></i>
            Created by Matin and Amin  
            <i class="fa-light fa-face-smile"></i>
      </div>
</template>