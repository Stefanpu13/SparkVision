<template>
  <div id="app" class="d-flex flex-column-reverse">
      <sv-menu
      class=""
      v-bind:intialMenu="intialMenu"
      v-if="menuLoaded"
      v-on:toggle-image="onToggleImage"
      v-bind:getMenuItems="getMenuItems" />

      <div class="pic-container">
        <sv-picture
        v-bind:displayedImageUrl="displayedImageUrl"
        v-if="shouldDisplayImage" />
      </div>
  </div>
</template>

<script>
import X2JS from "x2js";
import Menu from "./components/Menu";
import Picture from "./components/Picture";
import { AZURE_FILE_STORAGE, PRODUCTS_XML_URL } from "./constants";

export default {
  name: "App",
  data: function() {
    return {
      menuLoaded: false,
      displayedImageUrl: "",
      shouldDisplayImage: false
    };
  },
  components: {
    "sv-menu": Menu,
    "sv-picture": Picture
  },
  methods: {
    getMenuItems: function(currentMenu) {
      return currentMenu.menu || currentMenu.product || [];
    },
    onToggleImage: function(imagePath) {
      if (imagePath.length > 0) {
        this.shouldDisplayImage = true;
        // see: https://github.com/vuejs/vue-loader/issues/896
        this.displayedImageUrl = require(`./assets/${imagePath}`);
      } else {
        this.shouldDisplayImage = false;
      }
    },
    /*
      Displayed submenu means that its parent menu is also displayed.
      Adding links to parent menus allows to build a list of submenu
      and its parents and display them.
    */
    linkToParentMenu: function(menu) {
      const linkToParentMenu = (currentMenu, parentMenu) => {
        currentMenu.parentMenu = parentMenu;

        const menuItems = this.getMenuItems(currentMenu);

        menuItems.forEach(menuItem => {
          linkToParentMenu(menuItem, currentMenu);
        });
      };

      linkToParentMenu(menu);

      return menu;
    }
  },
  created: function() {
    fetch(PRODUCTS_XML_URL, {
      headers: {
        "content-type": "text/xml"
      }
    })
      .then(r => r.text())
      .then(t => {
        const parser = new X2JS();
        const menusJson = parser.xml2js(t);

        const rootMenu = this.linkToParentMenu(menusJson.menus);
        this.intialMenu = [rootMenu];

        this.menuLoaded = true;
      });
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  height: 100%;
  // Hide scroll bars in Edge.
  overflow: hidden;
}

.pic-container {
  height: 100%;
  position: relative;
}
</style>
