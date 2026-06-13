using Microsoft.AspNetCore.Mvc;
using MusicasAPI.DTO;
using MusicasAPI.Interfaces;
using MusicasAPI.Repositories;

namespace MusicasAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusicaController : ControllerBase
    {
        private readonly IMusicaRepository _repository;

        public MusicaController(IMusicaRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var musicas = await _repository.Listar();
            return Ok(musicas);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var musica = await _repository.BuscarPorId(id);

            if (musica == null)
                return NotFound();

            return Ok(musica);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] MusicaDTO dto)
        {
            if (!ModelState.IsValid)
                return BadRequest("Nome e Artista são obrigatórios.");

            var musica = await _repository.Cadastrar(dto);

            return CreatedAtAction(nameof(GetById), new { id = musica.IdMusica }, musica);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, [FromBody] MusicaDTO dto)
        {
            if (!ModelState.IsValid)
                return BadRequest("Nome e Artista são obrigatórios");

            var atualizado = await _repository.Atualizar(id, dto);

            if (!atualizado)
                return NotFound();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var deletado = await _repository.Excluir(id);

            if (!deletado)
                return NotFound();

            return NoContent();
        }
    }
}