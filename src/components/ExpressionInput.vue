<template>
  <div>
    <div class="remove-expression-button" @click="addNewExpression"><a-icon type="close" /></div>
    <a-select default-value="Test" class="userSelector">
      <a-select-option v-for="u in usrs" :key="u.login">
        {{u.login}}
      </a-select-option>
    </a-select>
    <mathlive-mathfield id="mf" @blur="checkIfValid" class="expression-field" ref="mathfield"
                        :options="{virtualKeyboardMode:'manual', smartFence:false, fontsDirectory:'../../node_modules'}"
                        v-model="expression">f(x)=
    </mathlive-mathfield>
  </div>
</template>

<script>
import store from "../store/index";
import {mapGetters} from "vuex";

export default {
  name: "ExpressionInput",
  data() {
    return {
      expression: ''
    }
  },
  props: {
    output_data: {type: Object}
  },
  methods: {
    checkIfValid() {
      // const expression = { latexExpression: this.expression}
      console.log(this.expression + " ping");
    }
  },
  computed: {
    ...mapGetters([
      'users'
    ]),
    usrs() {
      return this.users
    }
  },
  store
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

.userSelector {
  float: right;
  width: 15%;
  margin: 0.5rem;
}

</style>