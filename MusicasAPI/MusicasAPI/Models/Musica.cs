using System;
using System.Collections.Generic;

namespace MusicasAPI.Models;

public partial class Musica
{
    public Guid IdMusica { get; set; }

    public string Nome { get; set; } = null!;

    public string Artista { get; set; } = null!;
}
