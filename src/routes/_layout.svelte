<script>
  import GlobalStyle from "../GlobalStyle.svelte";
</script>

<main>
  <GlobalStyle />
  <slot />
</main>

<style lang="postcss">
  main {
    @apply flex flex-1 flex-col items-center;
  }
</style>
