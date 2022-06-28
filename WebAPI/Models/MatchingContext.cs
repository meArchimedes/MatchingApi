using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebAPI.Models
{
    public partial class MatchingContext : DbContext
    {
        public MatchingContext()
        {
        }

        public MatchingContext(DbContextOptions<MatchingContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bank> Banks { get; set; } = null!;
        public virtual DbSet<Campaign> Campaigns { get; set; } = null!;
        public virtual DbSet<CreditCard> CreditCards { get; set; } = null!;
        public virtual DbSet<Donation> Donations { get; set; } = null!;
        public virtual DbSet<FundRaiser> FundRaisers { get; set; } = null!;
        public virtual DbSet<Group> Groups { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=\"C:\\Users\\User\\Documents\\C# Final Project\\DB\\Matching.mdf\";Integrated Security=True;Connect Timeout=30");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bank>(entity =>
            {
                entity.ToTable("Bank");

                entity.Property(e => e.Bank1)
                    .HasMaxLength(50)
                    .HasColumnName("Bank");

                entity.Property(e => e.Beneficiary).HasMaxLength(50);

                entity.HasOne(d => d.Campaign)
                    .WithMany(p => p.Banks)
                    .HasForeignKey(d => d.CampaignId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Bank__CampaignId__47A6A41B");
            });

            modelBuilder.Entity<Campaign>(entity =>
            {
                entity.ToTable("Campaign");

                entity.Property(e => e.Collected).HasColumnType("money");

                entity.Property(e => e.Description).HasMaxLength(50);

                entity.Property(e => e.Goal).HasColumnType("money");

                entity.Property(e => e.Link).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.HasOne(d => d.AdminNavigation)
                    .WithMany(p => p.Campaigns)
                    .HasForeignKey(d => d.Admin)
                    .HasConstraintName("FK__Campaign__fundra__778AC167");
            });

            modelBuilder.Entity<CreditCard>(entity =>
            {
                entity.ToTable("CreditCard");

                entity.Property(e => e.Cvv).HasColumnName("cvv");

                entity.Property(e => e.Exp).HasColumnType("date");

                entity.Property(e => e.Holder).HasMaxLength(50);

                entity.Property(e => e.Result).HasMaxLength(50);

                entity.Property(e => e.Type).HasMaxLength(50);
            });

            modelBuilder.Entity<Donation>(entity =>
            {
                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.DonorName).HasMaxLength(50);

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Message).HasMaxLength(50);

                entity.HasOne(d => d.Card)
                    .WithMany(p => p.Donations)
                    .HasForeignKey(d => d.CardId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Donations__cardI__7A672E12");
            });

            modelBuilder.Entity<FundRaiser>(entity =>
            {
                entity.ToTable("fundRaiser");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<Group>(entity =>
            {
                entity.ToTable("Group");

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.HasOne(d => d.Fundraiser)
                    .WithMany(p => p.Groups)
                    .HasForeignKey(d => d.FundraiserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Group__fundraise__7B5B524B");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
