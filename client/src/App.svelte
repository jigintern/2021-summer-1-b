<script>
  import BtnDislike from "./components/BtnDislike.svelte";
  import BtnLike from "./components/BtnLike.svelte";

  let places = [];
  let curIdx = 0;
  let success = false;

  const like = () => {
    // unimplemented
  };
  const dislike = () => {
    const len = places.length;
    curIdx = (curIdx + 1) % (len === 0 ? 1 : len);
  };

  const loadPlaces = async () => {
    const res = await fetch("api/places");
    const data = await res.json();
    success = data.success;
    places = data.data;
  };
</script>

<div class="grid grid-rows-8 h-screen">
  <header class="bg-gray-200" />
  <main
    id="place"
    class="row-span-6 grid grid-rows-5 gap-y-3 p-3 md:w-2/5 md:mx-auto "
  >
    {#await loadPlaces()}
      <p>Loading...</p>
    {:then}
      {#if success}
        <div class="row-span-3 mx-auto">
          <img
            class="h-full"
            src={places[curIdx].thumbnail}
            alt={places[curIdx].name}
          />
        </div>
        <div>
          <h1 class="text-2xl">{places[curIdx].name}</h1>
          <p class="line-clamp-2">{places[curIdx].description}</p>
        </div>
        <div class="flex justify-around items-center md:w-1/2 md:mx-auto">
          <BtnDislike on:click={dislike} />
          <BtnLike on:click={like} />
        </div>
      {:else}
        <div class="row-span-5 text-center">Server error</div>
      {/if}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </main>
  <footer class="bg-gray-200" />
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
