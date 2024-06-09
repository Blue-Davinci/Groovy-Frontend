<script>
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import { onMount } from "svelte";
    import "@splidejs/svelte-splide/css";
  
    // set up placeholder images
    export let carouselMovies;
    //console.log(">> ", carouselMovies.filter((movie) => movie.url));
  
    // set up carousel config
    const mainOptions = {
      pagination: true,
      autoplay: true,
      type: "loop",
    };
    const thumbsOptions = {
    arrows: false,
    focus: "center",
    gap: 5,
    isNavigation: true,
    pagination: false,
    perMove: 1,
    perPage: 4,
    type: "loop",
    updateOnMove: true,
  };
  
    // sync carousels
    let main;
    onMount(() => {
      if (main) {
        console.log({ main });
        //main.sync();
      }
    });
</script>
  
<div class="gallery">
    <div class="gallery--main">
      <Splide 
        bind:this={main} 
        options={ mainOptions }
      >
        {#each  carouselMovies as imageSrc}
          <SplideSlide>
            <img src={imageSrc.url} alt="desc" />
            <div class="image-label-container">
              <div class="image-title">{imageSrc.title}</div>
              <div class="image-description">{imageSrc.description.split(' ').slice(0, 15).join(' ')}...</div>
            </div>
          </SplideSlide>
        {/each}
      </Splide>
    </div>
</div>