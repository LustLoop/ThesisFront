<template>
  <div>
    <div v-for="index in expressionCount" :key="index" >
      <ExpressionInput v-if="usrs.length > 0" :users="usrs" :id="index"/>
    </div>
    <div class="newExpression">
      <a-button @click="addNewExpression" type="primary">Add new expression</a-button>
    </div>
  </div>
</template>

<script>

import ExpressionInput from "@/components/ExpressionInput";
import {FETCH_USERS} from "@/store/actions.type";
import {mapGetters} from "vuex";

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
  mounted() {
    this.$store.dispatch(FETCH_USERS)
  },
  computed: {
    ...mapGetters([
      'users'
    ]),
    usrs() {
      console.log(this.users)
      return this.users
    }
  }
}
</script>

<style scoped>

  .newExpression {
    width: 10%;
    margin: 1rem auto;
  }

</style>