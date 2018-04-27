<template>
  <div id="app" class="d-flex flex-column-reverse align-items-stretch">
    <sv-menu
      class=""
      v-bind:intialMenu="intialMenu"
      v-if="menuLoaded"
      v-on:toggle-image="onToggleImage"
      v-bind:getMenuItems="getMenuItems"/>

    <div class="pic-container d-flex flex-column">
      <sv-picture
        class="align-self-center"
        v-bind:displayedImageUrl="displayedImageUrl"
        v-if="shouldDisplayImage"/>
    </div>
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
      menuLoaded: false,
      displayedImageUrl:'',
      shouldDisplayImage: false
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
    onToggleImage: function(imagePath) {
      if(imagePath.length > 0 ){
        this.shouldDisplayImage = true;
        this.displayedImageUrl = `${AZURE_FILE_STORAGE.BASE_URL}/${imagePath}${AZURE_FILE_STORAGE.SAS}`
      } else {
        this.shouldDisplayImage = false;
      }
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
        this.intialMenu = [rootMenu];

        this.menuLoaded = true;
    });
  }
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  #app{
      height: 100vh;
  }

  .pic-container{
    height: 100%;
  }
</style>
