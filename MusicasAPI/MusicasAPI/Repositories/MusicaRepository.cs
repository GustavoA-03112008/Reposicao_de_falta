using Microsoft.EntityFrameworkCore;
using MusicasAPI.DTO;
using MusicasAPI.Interfaces;
using MusicasAPI.Models;

namespace MusicasAPI.Repositories
{
    public class MusicaRepository : IMusicaRepository
    {
        private readonly MusicasDbContext _context;

        public MusicaRepository(MusicasDbContext context)
        {
            _context = context;
        }

        public async Task<List<Musica>> Listar()
        {
            return await _context.Musicas.ToListAsync();
        }

        public async Task<Musica?> BuscarPorId(Guid id)
        {
            return await _context.Musicas
                .FirstOrDefaultAsync(x => x.IdMusica == id);
        }

        public async Task<Musica> Cadastrar(MusicaDTO dto)
        {
            var musica = new Musica
            {
                IdMusica = Guid.NewGuid(),
                Nome = dto.Nome,
                Artista = dto.Artista
            };

            _context.Musicas.Add(musica);
            await _context.SaveChangesAsync();

            return musica;
        }

        public async Task<bool> Atualizar(Guid id, MusicaDTO dto)
        {
            var musica = await BuscarPorId(id);

            if (musica == null)
                return false;

            musica.Nome = dto.Nome;
            musica.Artista = dto.Artista;

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> Excluir(Guid id)
        {
            var musica = await BuscarPorId(id);

            if (musica == null)
                return false;

            _context.Musicas.Remove(musica);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}