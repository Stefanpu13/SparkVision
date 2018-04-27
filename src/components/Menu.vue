<template>
    <div class='menu'>
      <nav class="navbar navbar-light bg-white border border-dark d-flex justify-content-start"
       v-for="(menuToDisplay, index) in menusToDisplay"
       v-bind:key="index"
       >
        <button v-for="(menuItem, index) in getMenuItems(menuToDisplay)"
          v-bind:key="index"
          v-on:click="onShowSubmenu(menuItem)"
          class="btn btn-link active">
          {{menuItem._text}}
        </button>
      </nav>
    </div>
</template>

<script>
  export default {
    name: 'sv-menu',
    props: ['getMenuItems', 'menus'],
    data:function(){
      return {
        menusToDisplay: this.menus
      }
    },
    methods: {
    updateMenu: function(currentMenu){
      this.menusToDisplay = [];

      let curMen = currentMenu;
      do {
        this.menusToDisplay.push(curMen);
        curMen = curMen.parentMenu;
      }  while(curMen)
    },
      onShowSubmenu: function(subMenu) {
        if(this.getMenuItems(subMenu).length > 0) {
          this.updateMenu(subMenu);
        } else {
          this.$emit('show-image', subMenu._image);
        }
      }
    }
  }

</script>
