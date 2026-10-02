<script setup lang="ts">
const { t, locale, setLocale } = useI18n();
</script>

<template>
    <div class="p-10">
        <h1 class="text-4xl font-bold">
            {{ t("home.title") }}
        </h1>

        <div class="mt-6 flex gap-4">
            <button @click="setLocale('nl')">NL</button>
            <button @click="setLocale('en')">EN</button>
        </div>
    </div>
</template>
