function toggleMode() {
  const html = document.documentElement 
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains("light")) { 
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-michele-light.png")
    // setAttribute = modifica um atributo
  } else { 
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-michele.png")
  }

  if(html.classList.contains("light")) {
    img.setAttribute( // modo claro
      "alt",
      "Foto de Michele Kluck sorrindo sem os dentes, usando óculos escuro, regata preta, e fundo gradiente azul claro"
    )
  } else { 
    img.setAttribute( // modo escuro
    "alt", 
    "Foto de Michele Kluck sorrindo sem os dentes, sem oculos e regata preta, ee fundo gradiente do branco ao rosa claro."
    )
  }
}
 

  
  
  
