function toggleMode() {
  const html = document.documentElement 
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains("light")) { 
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-michele-light-2.png")
    // setAttribute = modifica um atributo
  } else { 
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-michele-1.png")
  }

  if(html.classList.contains("light")) {
    img.setAttribute(
      // modo claro
      "alt",
      "Foto de Michele Kluck sorrindo sem os dentes, com uma regata preta, e um fundo desfocado"
    )
  } else { 
    img.setAttribute(
      // modo escuro
      "alt",
      "Foto de Michele Kluck sorrindo sem os dentes, com uma regata preta, e um fundo desfocado."
    )
  }
}
 

  
  
  
