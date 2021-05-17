<template>
  <div>
    <mathlive-mathfield id="mf" @focus="ping" class="expression-field" ref="mathfield"
                        :options="{virtualKeyboardMode:'manual', smartFence:false, fontsDirectory:'../../node_modules'}"
                        v-model="expression">f(x)=
    </mathlive-mathfield>
    <a-button @click="sendTestData" type="primary">Send</a-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ExpressionInput",
  data() {
    return {
      expression: ''
    }
  },
  methods: {
    ping() {
      console.log(this.expression + " ping");
    },
    sendTestData() {
      const expression = { latexExpression: this.expression}
      axios.post('http://localhost:5000', expression)
    }
  }
}
</script>

<style scoped>
</style>