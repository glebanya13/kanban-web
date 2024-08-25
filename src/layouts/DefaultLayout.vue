<template>
  <AppSidebar />
  <div
    class="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent"
  >
    <AppHeader />
    <div class="body flex-grow-1 px-3">
      <CContainer lg>
        <router-view />
      </CContainer>
    </div>
  </div>
</template>
<script lang="ts">
import { CContainer } from '@coreui/vue-pro'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppSidebar,
    CContainer,
  },
}
</script>
