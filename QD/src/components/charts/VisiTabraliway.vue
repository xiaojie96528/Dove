<template>
  <div class="mt-4">
    <NRow :gutter="24">
      <NCol :span="24">
        <n-card content-style="padding: 0;" :bordered="false">
          <n-tabs type="line" size="large" :tabs-padding="20" pane-style="padding: 20px;">
            <n-tab-pane name="铁路地图">
              <raliway />
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </NCol>
    </NRow>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import raliway from './raliway.vue';

export default defineComponent({
  components: { raliway },
  setup() {
    return {};
  },
});
</script>
