using System.ComponentModel.DataAnnotations;

namespace MusicasAPI.DTO
{
    public class MusicaDTO
    {
        [Required]
        public string Nome { get; set; }

        [Required]
        public string Artista { get; set; }
    }
}