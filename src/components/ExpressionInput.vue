<template>
  <div style="display: flex">
    <div class="expression-input">
      <div class="remove-expression-button" @click="addNewExpression"><a-icon type="close" /></div>
      <mathlive-mathfield id="mf" @blur="checkIfValid" class="expression-field" ref="mathfield"
                          :options="{virtualKeyboardMode:'manual', smartFence:false, fontsDirectory:'../../node_modules'}"
                          v-model="expression">f(x)=
      </mathlive-mathfield>
    </div>
    <div class="userSelectorsBlock">
      <a-select class="userSelector" :defaultValue="users[0].login" @change="ping">
        <a-select-option v-for="u in users" :key="u.login">
          {{u.login}}
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>

import {FETCH_USERS} from "@/store/actions.type";

export default {
  name: "ExpressionInput",
  data() {
    return {
      expression: '',
    }
  },
  props: {
    users: {type: Array},
    output_data: {type: Object},
    id: Number
  },
  methods: {
    checkIfValid() {
      // const expression = { latexExpression: this.expression}
      console.log(this.expression + " ping");
    },
    ping() {
      console.log(this.usrs)
    },
    saveExpression() {
      this.$store.dispatch(FETCH_USERS)
    }
  }
}
</script>

<style scoped>

.expression-field {
  width: 70%;
}

.remove-expression-button {
  padding: 0.5rem 1rem 0 1%;
  float: right;
}

.remove-expression-button:hover {
  color: red;
}

.userSelectorsBlock {
  border: 1px solid lightgray;
  border-radius: 5px;
  min-width: 5%;
  width: auto;
  margin: 3rem auto 3rem 0;
}

.userSelector {
  width: 5rem;
  margin: 0.5rem;
}

.expression-input {
  border: 1px solid lightgray;
  border-radius: 5px;
  justify-content: center;
  width: 40%;
  margin: 3rem 3rem 3rem auto;
  padding-bottom: 0.5rem;
  text-align: center;
}

</style>