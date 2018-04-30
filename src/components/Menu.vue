<template>
    <div class='menu'>
      <nav class="navbar navbar-light bg-white border border-dark d-flex justify-content-start"
       v-for="(menuToDisplay, i) in menusToDisplay"
       v-bind:key="i">
        <button
        v-for="(menuItem, i) in getMenuItems(menuToDisplay)"
        v-bind:key="i"
        v-on:click="onShowSubmenu(menuItem)"
        class="btn"
        v-bind:class="getIsClickedButtonClass(menuItem)">
          {{menuItem._text}}
        </button>
      </nav>
    </div>
</template>

<script>
export default {
  name: "sv-menu",
  props: ["getMenuItems", "intialMenu"],
  data: function() {
    return {
      menusToDisplay: this.intialMenu,
      selectedMenuItems: []
    };
  },
  methods: {
    updateDisplayedMenus: function(menuItem) {
      this.menusToDisplay = [];

      let currentMenu =  menuItem;
      do {
        this.menusToDisplay.push(currentMenu);
        currentMenu = currentMenu.parentMenu;
      } while (currentMenu);
    },
    updateToggledButtons: function(menuItem) {
      this.selectedMenuItems = [];
      let currentMenuItem = menuItem;
      do {
        this.selectedMenuItems.push(currentMenuItem._text);
        currentMenuItem = currentMenuItem.parentMenu;
      } while (currentMenuItem !== undefined && currentMenuItem._text !== undefined);
    },
    getIsClickedButtonClass: function(menuItem) {
      return this.selectedMenuItems.includes(menuItem._text)
        ? "btn-primary"
        : "btn-link";
    },
    onShowSubmenu: function(menuItem) {
      if (this.getMenuItems(menuItem).length > 0) {
        this.updateDisplayedMenus(menuItem);
        this.$emit("toggle-image", "");
      } else {
        this.$emit("toggle-image", menuItem._image);
      }

      this.selectedMenuItems = this._text;
      this.updateToggledButtons(menuItem);
    }
  }
};
</script>
