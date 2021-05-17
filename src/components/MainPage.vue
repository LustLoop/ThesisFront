<template>
  <div>
    <div class="expression-input" v-for="index in expressionCount" :id="index" :key="index" >
      <ExpressionInput />
    </div>
    <div class="newExpression">
      <a-button @click="addNewExpression" type="primary">Add new expression</a-button>
    </div>
  </div>
</template>

<script>

import store from "../store/index";
import ExpressionInput from "@/components/ExpressionInput";
import {FETCH_USERS} from "@/store/actions.type";

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
  store,
  mounted() {
    this.$store.dispatch(FETCH_USERS)
  },
}
</script>

<style scoped>

  .expression-input {
    border: 1px solid lightgray;
    border-radius: 5px;
    justify-content: center;
    width: 50%;
    margin: 3rem auto;
    padding-bottom: 0.5rem;
    text-align: center;
  }

  .newExpression {
    width: 10%;
    margin: 1rem auto;
  }

</style>