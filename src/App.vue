<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue';
import Footer from './components/Footer.vue';

</script>

<template>
	<nav class="container-fluid d-flex justify-content-around align-items-center top py-1">
		<div>
			<i class="fa-duotone fa-phone fa-bounce"></i>
			۰۲۱۸۸۹۹۰۴۰۵
		</div>
		<div class="fa-fade text-center">تخفیف ویژه جهت انجام امور حسابداری و مالیاتی سال 1402، فقط تا پایان سال</div>
		<div></div>
	</nav>
	<TopNav />
	<RouterView />
	<Footer />
</template>