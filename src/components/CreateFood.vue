<template>
  <div class="app">
    <div class="row">
      <div class="col-md-12">
        <div class="card mt-3">
          <div class="card-header">
            <h5 class="card-title">
              Create New Food
            </h5>
          </div>
          <div class="card-body">
            <form v-on:submit.prevent='addFood()'>
              <div class="form-group">
                <label for="">Name:</label>
                <input
                  type="text"
                  v-model="name"
                  class="form-control"
                  placeholder="Enter Food Name..."
                  required
                />
              </div>
              <div class="form-group">
                <label for="">Price:</label>
                <input
                  type="text"
                  v-model="price"
                  class="form-control"
                  placeholder="Enter Food Price..."
                  required
                />
              </div>
              <div class="float-right">
                <input type="submit" value="SUBMIT" class="btn btn-primary">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateFood",
  data(){
    return{
      name:'',
      price:'',
    }
  },
  methods:{
    addFood(){
      if(this.name){
        let payload = { name: this.name, price: this.price }
        this.$store.dispatch('addFood', payload)
      }
      this.$router.push('/')
    }
  }
};
</script>
