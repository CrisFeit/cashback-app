<template lang="pug">
  footer.footer
    a(href="http://www.grupoboticario.com.br/pt/Paginas/Inicial.aspx" class="company" tabindex="0" target="_blank") &copy;
      img(class="company-logo" src="img/logo-group.png")
    section.social
      p.social-title Siga a Eudora:
      include ../../includes/social-media.pug
</template>

<script>
export default {
  name: 'Footer'
}
</script>
