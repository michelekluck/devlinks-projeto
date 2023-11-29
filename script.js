function toggleMode() {
  const html = document.documentElement 
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains("light")) { 
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    // setAttribute = modifica um atributo
  } else { 
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  if(html.classList.contains("light")) {
    img.setAttribute( // modo claro
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuro, jaqueta cinza, sem barba e fundo gradiente do roxo claro ao azul claro"
    )
  } else { 
    img.setAttribute( // modo escuro
    "alt", 
    "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
 

  
  
  