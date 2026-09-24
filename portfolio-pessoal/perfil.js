const desenvolvedor = {
  nome: "Eric Neves",
  curso: "Análise e Desenvolvimento de Sistemas",
  foco: "Desenvolvimento Web",
  tecnologias: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  aprendendoSempre: true
};

const codigo = `const desenvolvedor = {
  nome: "${desenvolvedor.nome}",
  curso: "${desenvolvedor.curso}",
  foco: "${desenvolvedor.foco}",
  tecnologias: [
    "${desenvolvedor.tecnologias.join('", "')}"
  ],
  aprendendoSempre: ${desenvolvedor.aprendendoSempre}
};`;

document.getElementById("codigoPerfil").textContent = codigo;
