class Renderer {
  render(data){
    $("#movies").empty()
    const source = $("#movies-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template({data})
    $("#movies").append(newHTML)
  }
}

