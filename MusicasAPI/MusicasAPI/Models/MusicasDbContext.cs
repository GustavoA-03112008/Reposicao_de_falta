using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MusicasAPI.Models;

public partial class MusicasDbContext : DbContext
{
    public MusicasDbContext()
    {
    }

    public MusicasDbContext(DbContextOptions<MusicasDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Musica> Musicas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=MusicasDB;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Musica>(entity =>
        {
            entity.HasKey(e => e.IdMusica).HasName("PK__Musica__F026ACA732FA9B3D");

            entity.ToTable("Musica");

            entity.Property(e => e.IdMusica).ValueGeneratedNever();
            entity.Property(e => e.Artista)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Nome)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
