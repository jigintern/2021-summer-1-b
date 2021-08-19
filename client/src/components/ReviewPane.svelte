<script>
  import { createEventDispatcher } from "svelte";
  import BtnNext from "./BtnNext.svelte";
  import BtnLike from "./BtnLike.svelte";
  import Image from "./Image.svelte";

  export let place = {};

  const dispatch = createEventDispatcher();

  const next = () => dispatch("next");
  const like = () => dispatch("like");
</script>

<div class="row-span-3 mx-auto">
  <Image src={place.thumbnail} alt={place.name} />
</div>
<div>
  <h1 class="text-2xl line-clamp-1">{place.name}</h1>
  <p class="line-clamp-2">{place.description}</p>
</div>
<div class="flex justify-around items-center md:w-1/2 md:mx-auto">
  <BtnNext on:click={next} />
  <BtnLike on:click={like} />
</div>
