<template>
  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="prev">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="next">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {ref} from 'vue';

export default {
  name: "Paginator",
  emits: ['page-changed'],
  props: {
    lastPage: Number
  },

  /*setup() {*/
  /*setup(props, context) {*/

  setup(props, {emit}) {
    const page = ref(1);

    const next = async () => {

      /*if (page.value === lastPage.value) return;*/
      if (page.value === props.lastPage) return;

      page.value++;
      /*await load();*/
      /*context.emit('page-changed', page.value);*/
      emit('page-changed', page.value);
    }

    const prev = async () => {
      if (page.value === 1) return;

      page.value--;
      /*await load();*/
      emit('page-changed', page.value);
    }

    return {
      next,
      prev
    }
  }
}
</script>