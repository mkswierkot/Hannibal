﻿// <auto-generated />
using System;
using AuctorAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AuctorAPI.Migrations
{
    [DbContext(typeof(AuctorAPIContext))]
    [Migration("20190525113515_Initial205")]
    partial class Initial205
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AuctorAPI.Models.Client", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CardId");

                    b.Property<DateTime?>("ClientJoined");

                    b.Property<string>("Email");

                    b.Property<int?>("GymEntries");

                    b.Property<int?>("GymEntriesLeft");

                    b.Property<bool?>("IsDeleted");

                    b.Property<int?>("MartialArtsEntries");

                    b.Property<int?>("MartialArtsEntriesLeft");

                    b.Property<string>("Name");

                    b.Property<string>("Phone");

                    b.Property<DateTime?>("SubscriptionExpires");

                    b.Property<int?>("SubscriptionId");

                    b.Property<string>("Surname");

                    b.HasKey("Id");

                    b.HasIndex("SubscriptionId");

                    b.ToTable("Client");
                });

            modelBuilder.Entity("AuctorAPI.Models.Payment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AdditionalInformation");

                    b.Property<int>("CashRegistered");

                    b.Property<int>("ClientId");

                    b.Property<DateTime?>("PaymentRegistered");

                    b.Property<DateTime?>("SubscriptionExpires");

                    b.Property<int>("SubscriptionId");

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.HasIndex("SubscriptionId");

                    b.ToTable("Payment");
                });

            modelBuilder.Entity("AuctorAPI.Models.Subscription", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("GymEntries");

                    b.Property<bool>("IsDeleted");

                    b.Property<int>("MartialArtsEntries");

                    b.Property<string>("Name");

                    b.Property<int>("Price");

                    b.HasKey("Id");

                    b.ToTable("Subscription");
                });

            modelBuilder.Entity("AuctorAPI.Models.Training", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.ToTable("Training");
                });

            modelBuilder.Entity("AuctorAPI.Models.TrainingEntry", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AdditionalInfo");

                    b.Property<int>("ClientId");

                    b.Property<DateTime>("EntryRegistered");

                    b.Property<bool?>("FreeEntry");

                    b.Property<int>("Locker");

                    b.Property<int>("TrainingId");

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.HasIndex("TrainingId");

                    b.ToTable("TrainingEntry");
                });

            modelBuilder.Entity("AuctorAPI.Models.TrainingSchedule", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Day");

                    b.Property<DateTime>("HourFinishes");

                    b.Property<DateTime>("HourStarts");

                    b.Property<int>("TrainingId");

                    b.HasKey("Id");

                    b.HasIndex("TrainingId");

                    b.ToTable("TrainingSchedule");
                });

            modelBuilder.Entity("AuctorAPI.Models.Client", b =>
                {
                    b.HasOne("AuctorAPI.Models.Subscription", "Subscription")
                        .WithMany()
                        .HasForeignKey("SubscriptionId");
                });

            modelBuilder.Entity("AuctorAPI.Models.Payment", b =>
                {
                    b.HasOne("AuctorAPI.Models.Client", "Client")
                        .WithMany()
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AuctorAPI.Models.Subscription", "Subscription")
                        .WithMany()
                        .HasForeignKey("SubscriptionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("AuctorAPI.Models.TrainingEntry", b =>
                {
                    b.HasOne("AuctorAPI.Models.Client", "Client")
                        .WithMany()
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("AuctorAPI.Models.Training", "Training")
                        .WithMany()
                        .HasForeignKey("TrainingId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("AuctorAPI.Models.TrainingSchedule", b =>
                {
                    b.HasOne("AuctorAPI.Models.Training", "Training")
                        .WithMany()
                        .HasForeignKey("TrainingId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
