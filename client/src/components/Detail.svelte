<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Image from "./Image.svelte";

  export let place;

  let success = false;
  let nearbyPlaces = [];

  const loadNearbyPlaces = async () => {
    const data = await fetch(
      `api/places/?longitude=${place.longitude}&latitude=${place.latitude}`
    );
    const res = await data.json();
    success = res.success;
    nearbyPlaces = res.data;
  };

  let map;

  const setupMap = () => {
    const coord = [parseFloat(place.latitude), parseFloat(place.longitude)];
    map = (map ?? L.map("access-map")).setView(coord, 16);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker(coord).addTo(map);
  };

  const updatePlace = async (chosenPlace) => {
    place = chosenPlace;
    await loadNearbyPlaces(chosenPlace);
    setupMap();
  };

  const dispatch = createEventDispatcher();
  const restoreReviewing = () => dispatch("restore-reviews");

  onMount(setupMap);
</script>

<div class="mx-auto">
  <Image src={place.thumbnail} alt={place.name} />
</div>
<div>
  <h1 class="text-2xl">{place.name}</h1>
  <code>{place.address}</code>
  <p>{place.description}</p>
</div>
<div id="access-map">map</div>
{#await loadNearbyPlaces()}
  <div>loading...</div>
{:then}
  <div>
    <h2>近くの観光地</h2>
    {#if success}
      <ul>
        {#each nearbyPlaces as nearbyPlace (nearbyPlace.id)}
          <li on:click={() => updatePlace(nearbyPlace)}>
            {nearbyPlace.name}: {`${(
              parseFloat(nearbyPlace.distance) * 1000
            ).toFixed()}m`}
          </li>
        {/each}
      </ul>
    {:else}
      <div>Internal server error occurred.</div>
    {/if}
  </div>
{:catch error}
  <p class="text-red-500">{error.message}</p>
{/await}
<button on:click={restoreReviewing}>他の場所を探す</button>

<style>
  #access-map {
    height: 200px;
    min-height: 200px;
  }
</style>
