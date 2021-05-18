<template>
  <div style="display: flex">
    <div class="expression-input">
      <div class="remove-expression-button"><a-icon type="close" /></div>
      <mathlive-mathfield id="mf" class="expression-field" @blur="saveNewExpression" ref="mathfield"
                          :options="{virtualKeyboardMode:'manual', smartFence:false, fontsDirectory:'../../node_modules'}"
                          v-model="expression">f(x)=
      </mathlive-mathfield>
    </div>
    <div class="userSelectorsBlock">
      <a-select v-for="index in userSelectorsCount" :key="index" class="userSelector" @change="saveNewVariantUser">
        <a-select-option v-for="u in users" :key="u.login">
          {{u.login}}
        </a-select-option>
      </a-select>
      <a-icon type="plus" @click="addUserSelector"/>
    </div>
  </div>
</template>

<script>

import {SAVE_EXPRESSION, SAVE_USER_VARIANT} from "@/store/actions.type";

export default {
  name: "ExpressionInput",
  data() {
    return {
      expression: '',
      userSelectorsCount: 1
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
    addUserSelector() {
      this.userSelectorsCount++
    },
    saveNewVariantUser(login) {
      this.$store.dispatch(SAVE_USER_VARIANT, {login: login, variantId: this.$props.id})
    },
    saveNewExpression() {
      this.$store.dispatch(SAVE_EXPRESSION, {variantId: this.$props.id, content: this.expression})
    }
  },
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
  padding-right: 1rem;
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