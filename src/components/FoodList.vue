<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card mt-3">
        <div class="card-body">
          <table class="table table-bordered table-hover">
            <thead align='center'>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th colspan="4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(food, index) in $store.getters.foods" :key='index'>
                <td>{{index+1}}</td>
                <td v-if='index != editIndex'>{{food.name}}</td>
                <td v-if='index != editIndex'>{{food.price}}</td>
                <td v-if="index !== editIndex">
                  <button class="btn btn-info" @click="openEdit(index,food)"><i class="fas fa-edit"></i></button>
                  <button class="btn btn-danger ml-1" @click="deleteFood(idex)"><i class="fas fa-trash"></i></button>
                </td>
                <td v-if='index === editIndex'>
                  <input class="form-control" type="text" :value="name" @change="name = $event.target.value">
                </td>
                <td v-if='index === editIndex'>
                  <input class="form-control" type="text" :value="price" @change='price = $event.target.value'>
                </td>
                <td v-if="index === editIndex">
                  <button class="btn btn-success mr-1" @click="editFood()"><i class="fas fa-check-square"></i></button>
                  <button class="btn btn-danger" @click="closeEdit(index)"><i class="fas fa-window-close"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      editIndex: -1,
      name:'',
      price: ''
    }
  },
  methods:{
    deleteFood(index){
      this.$store.dispatch('deleteFood',index)
    },
    openEdit(index,food){
      this.editIndex=index;
      this.name=food.name;
      this.price=food.price;
    },
    closeEdit(index){
      this.editIndex = index -1;
      this.name='';
      this.price='';
    },
    editFood(){
      let payload = {
        index: this.editIndex,
        name: this.name,
        price: this.price,
      }
      this.$store.dispatch('editFood',payload).then(this.closeEdit())
    }
  }
}
</script>

<style>

</style>