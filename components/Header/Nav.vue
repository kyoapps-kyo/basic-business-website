<template>
    <nav class="w-full bg-base-100 shadow">
        <div class="navbar container mx-auto p-0">
            <div class="flex-1 px-2 mx-2"><Logo></Logo></div>
            <div class=" h-full hidden lg:block" v-html="renderMenu(menu)">
            </div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                  </path>
                </svg>
              </label>
            </div>
        </div>
    </nav>
</template>

<script setup lang='ts'>
import { useMenu, MenuData } from '@/data/commons/menu'
const { menu } = useMenu()

const icon = '<span class="icon"><svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.06067 4L1.06066 0L0 1.06066L4 5.06067L5.06066 6.12132L6.12132 5.06066L10.1213 1.06067L9.06066 8.79169e-06L5.06067 4Z" fill="black"></path></svg></span>'

function renderMenu(menu: MenuData[], hasChild: boolean): string {
  if (!menu || !menu.length) {
    return '';
  }
  const menuClass = hasChild ? 'bg-base-100 min-w-[100px]' : 'menu menu-horizontal bg-base-100';
  let menuHtml = `<ul class="${menuClass}">\n`;
  menu.forEach(({ title, path, children }) => {
    const subMenuHtml = children && children.length ? renderMenu(children, true) : '';
    menuHtml += `
      <li${children ? ' tabindex="0" class="hover:bg-accent hover:text-neutral"' : ' class="hover:bg-accent"'}>
        ${children ? `<span>${title}${icon}</span>` : `<a href="${path}" class='${hasChild? '':''}'>${title}</a>`}
        ${subMenuHtml}
      </li>\n`;
  });
  menuHtml += '</ul>\n';
  return menuHtml;
}

</script>

<style scoped>

</style>
