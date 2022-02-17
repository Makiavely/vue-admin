<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <div class="btn-toolbar mb-2 mb-md-0">
      <router-link to="/products/create" class="btn btn-sm btn-outline-secondary">Add</router-link>
    </div>
  </div>

  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td><img :src="product.image" height="50"/></td>
        <td>{{ product.title }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.price }}</td>
        <td>
          <div class="btn-group mr-2">
            <router-link :to="`/products/${product.id}/edit`" class="btn btn-sm btn-outline-secondary">Edit
            </router-link>
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" @click="del(product.id)">Delete</a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

<!--  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="prev">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="next">Next</a>
      </li>
    </ul>
  </nav>-->
  <Paginator :last-page="lastPage" @page-changed="load($event)"/>
</template>

<script lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {Entity} from "@/interfaces/entity";
import Paginator from "@/secure/components/Paginator.vue"

export default {
  name: "Products",
  components: {Paginator},
  setup() {
    const products = ref([]);
    /*const page = ref(1);*/
    const lastPage = ref(0);

    /*    onMounted(async () => {
          const response = await axios.get<any>('products');

          products.value = response.data.data;
        });*/

    const load = async (page = 1) => {
      const response = await axios.get<any>(`products?page=${page}`);

      products.value = response.data.data;
      lastPage.value = response.data.meta.last_page;
    }

    onMounted(load);

/*    const next = async () => {
      if (page.value === lastPage.value) return;

      page.value++;
      await load();
    }

    const prev = async () => {
      if (page.value === 1) return;

      page.value--;
      await load();
    }*/

    const del = async (id: number) => {
      if (confirm('Are you sure you want to delete this record?')) {
        await axios.delete(`products/${id}`);

        products.value = products.value.filter((e: Entity) => e.id !== id);
      }
    }

    return {
      products,
      lastPage,
      del,
      /*next,
      prev*/
      load,
    }
  }
}
</script>
