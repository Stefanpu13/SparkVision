<template>
  <div id="app">
    <sv-picture />
    <sv-menu class="botttom-menu"
      v-bind:menus="menusToDisplay"
      v-if="menuLoaded"
      v-on:show-image="onShowImage"
      v-bind:getMenuItems="getMenuItems"/>
  </div>
</template>

<script>
import X2JS from 'x2js';
import Menu from './components/Menu'
import Picture from './components/Picture'
import { AZURE_FILE_STORAGE, PRODUCTS_XML_URL } from './constants'

export default {
  name: 'App',
  data: function(){
    return {
      menuLoaded: false
    }
  },
  components: {
    'sv-menu':Menu,
    'sv-picture': Picture
  },
  methods:{
    getMenuItems: function(currentMenu){
      return (currentMenu && (currentMenu.menu || currentMenu.product)) || [];
    },
    onShowImage: function(str){
      console.log(str);
    },
    initMenu: function (menu) {
      const initMenu = (newMenu, parentMenu) => {
        newMenu.parentMenu = parentMenu;

        const menuItems = this.getMenuItems(newMenu);

        menuItems.forEach(menuItem => {
          initMenu(menuItem, newMenu);
        });
      }

      initMenu(menu);

      return menu;
    }
  },
  created: function(){
    fetch(PRODUCTS_XML_URL)
    .then(r =>  r.text())
    .then(t => {
        const parser = new X2JS();
        const menusJson = parser.xml2js(t);

        const rootMenu = this.initMenu(menusJson.menus);
        this.menusToDisplay = [rootMenu];

        this.menuLoaded = true;
    });
  }
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  #app{
      position: fixed;
      bottom: 0;
      width: 100%;
  }
</style>
