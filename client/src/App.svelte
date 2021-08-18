<script>
  import { onMount } from "svelte";
  let places = [];
  let curIdx = 0;

  const like = () => {
    // unimplemented
  };
  const dislike = () => {
    const len = places.length;
    curIdx = (curIdx + 1) % (len === 0 ? 1 : len);
  };

  onMount(async () => {
    const data = await fetch("api/places");
    places = await data.json();
  });
</script>

<div class="grid grid-rows-8 h-screen">
  <header class="bg-gray-200" />
  <main
    id="place"
    class="row-span-6 grid grid-rows-5 gap-y-3 p-3 md:w-2/5 md:mx-auto "
  >
    {#if places[curIdx]}
      <div class="row-span-3 mx-auto">
        <img
          class="h-full"
          src={places[curIdx].thumbnail}
          alt={places[curIdx].name}
        />
      </div>
      <div>
        <h1 class="text-3xl">{places[curIdx].name}</h1>
        <p class="line-clamp-2">{places[curIdx].description}</p>
      </div>
      <div class="flex justify-around items-center md:w-1/2 md:mx-auto">
        <button
          id="dislike"
          class="h-16 w-16 bg-blue-400 rounded-full"
          on:click={dislike}>d</button
        >
        <button
          id="like"
          class="h-16 w-16 bg-green-400 rounded-full"
          on:click={like}>l</button
        >
      </div>
    {:else}
      <div class="row-span-5 text-center">Loading...</div>
    {/if}
  </main>
  <footer class="bg-gray-200" />
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
