<template>
  <div>
    <div class="expression-input" v-for="index in expressionCount" :id="index" :key="index" >
      <div class="remove-expression-button" @click="addNewExpression"><a-icon type="close" /></div>
      <ExpressionInput>g(x)=</ExpressionInput>
    </div>
    <a-button @click="addNewExpression" type="primary">Add new expression</a-button>
  </div>
</template>

<script>

import store from "../store/index";
import ExpressionInput from "@/components/ExpressionInput";

export default {
  name: "MainPage",
  components: {
    ExpressionInput
  },
  data() {
    return {
      expressionCount: 1
    }
  },
  methods: {
    addNewExpression() {
      this.expressionCount++
    }
  },
  store
}
</script>

<style scoped>

  .expression-input {
    border: 1px solid lightgray;
    border-radius: 5px;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    padding-bottom: 0.5rem;
    text-align: center;
  }

  .remove-expression-button {
    padding: 0.5rem 1rem 0 0;
    float: right;
  }

  .remove-expression-button:hover {
    color: red;
  }

</style>