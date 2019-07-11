<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
import { getPageTemplateList, getPageTemplateDetail, createPageTemplate, updatePageTemplate, deletePageTemplate } from '../assets/js/pageTemplate.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created(){
    getPageTemplateList();
    getPageTemplateDetail(2);
    createPageTemplate({ name: 'new template', content:'<html>new</html>' });
    updatePageTemplate(9, { name: 'name 9', content:'<html>content 9</html>' });
    deletePageTemplate(9);
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
