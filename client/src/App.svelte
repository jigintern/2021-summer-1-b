<script>
  import { onMount } from "svelte";
  let places = [];

  onMount(async () => {
    const data = await fetch("api/places");
    places = await data.json();
  });
</script>

<div class="flex flex-col h-screen">
  <header class="h-1/6" />
  <main id="places" class="grid gap-y-5 py-3">
    {#each places as place}
      <section
        key={place.id}
        class="w-2/6 bg-gray-100 rounded-lg p-3 mx-auto ring-4 ring-gray-200"
      >
        <img class="p-3" src={place.thumbnails[0]} alt="sample" />
        <h1 class="text-3xl">{place.name}</h1>
        <p>{place.description}</p>
      </section>
    {:else}
      <p>Loading...</p>
    {/each}
  </main>
  <footer class="h-1/6" />
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
