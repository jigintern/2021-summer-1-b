<script>
  import Image from "./Image.svelte";
</script>

<header class="flex justify-center items-center bg-gray-200 z-10">
  <div class="h-1/2 pr-5" on:click>
    <Image src="/favicon.png" alt="icon" />
  </div>
  <h1
    class="font-mono text-4xl text-yellow-600 font-semibold italic tracking-widest"
    on:click
  >
    Nicheller
  </h1>
</header>
