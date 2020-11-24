const renderer = new Renderer()

$("#search").on('click', function(){
  const title = $("#movie-title").val()

  $.ajax({
    method: "GET",
    url: `/movies/${title}`,
    success: renderer.render
  })
})

//"works until part 7"

// $("#movies").on('click', 'img', function(){
//   const $movie = $(this).closest('.movie')
//   const rating = $movie.find('movieId').find('ratings')
//   $("movies").append(rating)
// })