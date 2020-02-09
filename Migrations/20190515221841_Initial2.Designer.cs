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
    [Migration("20190515221841_Initial2")]
    partial class Initial2
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

                    b.Property<int>("MartialArtsEntries");

                    b.Property<string>("Name");

                    b.Property<int>("Price");

                    b.HasKey("Id");

                    b.ToTable("Subscription");
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
#pragma warning restore 612, 618
        }
    }
}
