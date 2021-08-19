<script>
  import { createEventDispatcher } from "svelte";
  import BtnDislike from "./BtnDislike.svelte";
  import BtnLike from "./BtnLike.svelte";
  import Image from "./Image.svelte";

  export let place = {};

  const dispatch = createEventDispatcher();

  const dislike = () => dispatch("dislike");
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
  <BtnDislike on:click={dislike} />
  <BtnLike on:click={like} />
</div>
