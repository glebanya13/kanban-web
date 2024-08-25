<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="store.commit('toggleSidebar')">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
    </CContainer>
  </CHeader>
</template>

<script lang="ts">
import { useStore } from 'vuex'

export default {
  name: 'AppHeader',
  components: {},
  setup() {
    const store = useStore()

    return {
      store,
    }
  },
}
</script>
