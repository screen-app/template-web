<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<Router routes="{routes}" />

<style lang="postcss" global>
  @import "../assets/global.css";
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @tailwind screens;
</style>
