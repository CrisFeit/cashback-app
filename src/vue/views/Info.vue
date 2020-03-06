<template lang="pug">
  main.main.info
    h3.page-title Informações
    div.info-warning
      div.info-warning-title
        | Teste Desenvolvedor Front End - Grupo Boticário
      div.info-warning-text
        | *Esta aplicação não tem validade nem vínculo oficial com &copy;Grupo Boticário
    section.info-card
      div.info-top
        div.info-img
          img.info-icon.icons(src="https://avatars1.githubusercontent.com/u/36247135?v=4")
        div.info-info
          div.info-item Criado por  
            span.info-text  Cristiano Rocha Feitoza
          div.info-item Email 
            span.info-text  crisrfab@gmail.com
          div.social Redes Sociais
            div.social-media
              a(class="link github"    href="https://github.com/CrisFeit" target="_blank")
                p.link-text Github
              a(class="link linkedin"   href="https://www.linkedin.com/in/cristiano-rocha-feitoza-a78543158/" target="_blank") 
                p.link-text Linkedin
              a(class="link codepen"   href="https://codepen.io/CrisRocha" target="_blank")
                p.link-text Codepen
      div.tec
        div.tec-media Arquitetura Front-End
          div.tec-item   
            a.tec-link(href="http://oocss.org/" target="_blank") 
              p.text-icon OOCSS
              p.tec-link-text Object-Oriented CSS
            a.tec-link(href="https://itcss.io/" target="_blank") 
              p.text-icon ITCSS
              p.tec-link-text Inverted Triangle Architecture
            a.tec-link(href="https://rscss.io/" target="_blank") 
              p.text-icon RSCSS
              p.tec-link-text Reasonable System for css
        div.tec-media Framework
          div.tec-item   
            a.tec-link.vue(href="https://router.vuejs.org/" target="_blank")
              p.tec-link-text Vue Router
            a.tec-link.vue(href="https://vuejs.org/" target="_blank")
              p.tec-link-text Vue js
            a.tec-link.vue(href="https://vuex.vuejs.org/" target="_blank")
              p.tec-link-text Vuex
        div.tec-media Tools
          div.tec-item 
            a.tec-link.sass(href="https://sass-lang.com/" target="_blank")
              p.tec-link-text Sass
            a.tec-link(href="https://pugjs.org/" target="_blank")
              p.text-icon PUG
              p.tec-link-text Pug
            a.regular-link.firebase(href="https://firebase.google.com/" target="_blank")
              p.tec-link-text Firebase
            a.tec-link(href="https://jestjs.io/" target="_blank") 
              p.text-icon Jest
              p.tec-link-text Jest
        
</template>

<script>
export default {
  
}
</script>