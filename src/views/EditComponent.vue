<template>
  <div class="edit-component">
    <h1 class="title">Component: {{ model.id }} <input class="name" v-model="model.name" /> <span class="tip">{{ tipText }}</span></h1>
    <aside class="tools">
      <button class="btn" @click="refreshComponent">Refresh</button><button class="btn" @click="saveChange">Save</button>
    </aside>
    <section class="content">
      <div class="view" v-html="model.content">
      </div>
      <textarea class="code" v-model="model.content">
      </textarea>
    </section>
  </div>
</template>
<script>
import { getPageTemplateList, getPageTemplateDetail, createPageTemplate, updatePageTemplate, deletePageTemplate } from '../assets/js/pageTemplate.js';

export default {
  name: 'EditComponent',
  data(){
    return {
      componentId: 1,
      tipText: '',
      model: {
        id: '',
        name: '',
        content: '',
      }
      
    }
  },
  created() {
    this.getComponentDetail();
  },
  methods: {
    refreshComponent(){
      this.getComponentDetail();
    },
    getComponentDetail(){
      getPageTemplateDetail(this.componentId)
        .then((res) => {
          if(res.code == 200){
            this.model = res.data;
          }
        });
    },
    saveChange(){
      updatePageTemplate(this.componentId, { name: this.model.name, content: this.model.content })
        .then((res) => {
          if(res.code == 200){
            this.resultTip('Success!');
          }
        })
    },
    resultTip(msg){
      this.tipText = msg;
      setTimeout(() => {
        this.tipText = '';
      }, 2000);
    }
  },
}
</script>
<style lang="less" scoded>
.edit-component{
  height: 500px;
  border: 4px solid #ccc;
  display: flex;
  flex-direction: column;
  .title{
    margin: 0 0;
    margin-top: 2px;
    font-size: 20px;
    flex: 0 0 40px;
    border-bottom: 1px solid #ccc;
    .name{
      font-size: 14px;
      height: 32px;
      line-height: 32px;
    }
    .tip{
      display:inline-block;
      width: 200px;
      font-size: 16px;

    }
  }
  .tools{
    padding: 4px 20px;
    flex: 0 0 60px;
    text-align: right;
    .btn{
      display: inline-block;
      width: 100px;
      height: 30px;
      line-height: 28px;
      text-align: center;
      font-size: 15px;
      margin-left: 2px;
      margin-right: 2px;
    }
  }
  .content{
    padding: 4px 4px;
    flex: 1;
    border: 1px solid #bbb;
    display: flex;
    .view{
      flex: 1;
      margin-right: 6px;
      border: 1px solid #bbb;
    }
    .code{
      flex: 1;
      margin-left: 6px;
      border: 1px solid #bbb;
      font-size: 14px;
    }
  }
}
</style>