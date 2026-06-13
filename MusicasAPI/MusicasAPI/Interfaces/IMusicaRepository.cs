using MusicasAPI.DTO;
using MusicasAPI.Models;

namespace MusicasAPI.Interfaces;

public interface IMusicaRepository
{
    Task<List<Musica>> Listar();

    Task<Musica?> BuscarPorId(Guid id);

    Task<Musica> Cadastrar(MusicaDTO dto);

    Task<bool> Atualizar(Guid id, MusicaDTO dto);

    Task<bool> Excluir(Guid id);
}