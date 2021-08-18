<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Image from "./Image.svelte";

  const loadDetails = async () => {};

  export let place;

  const dispatch = createEventDispatcher();

  const restoreReviewing = () => dispatch("restore-reviews");

  console.log(place);

  const loadNearbyPlaces = async () => {
    const data = await fetch(
      `api/places/?longitude=${place.longitude}&latitude=${place.latitude}`
    );
    const res = await data.json();
    console.log(res);
    return res;
    // return await data.json();
  };

  onMount(() => {
    const coord = [parseFloat(place.longitude), parseFloat(place.latitude)];
    const map = L.map("map").setView(coord, 13);
    L.marker(coord).addTo(map);
  });
</script>

<div class="mx-auto">
  <Image src={place.thumbnail} alt={place.name} />
</div>
<div>
  <h1 class="text-2xl">{place.name}</h1>
  <code>{place.address}</code>
  <p>{place.description}</p>
</div>
<div id="map">map</div>
{#await loadNearbyPlaces()}
  <div>loading...</div>
{:then res}
  <div>
    <h2>近くの観光地</h2>
    {#if res.success}
      <ul>
        {#each res.data as nearbyPlace (nearbyPlace.id)}
          <li>{nearbyPlace.name} - {`${parseInt(nearbyPlace.distance)}m`}</li>
        {/each}
      </ul>
    {:else}
      <div>Internal server error happened.</div>
    {/if}
  </div>
{/await}
<button on:click={restoreReviewing}>他の場所を探す</button>

<style>
  #map {
    height: 200px;
  }
</style>
