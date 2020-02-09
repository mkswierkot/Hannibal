using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AuctorAPI.Migrations
{
    public partial class GroupContracts7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Client_Group_Group1Id",
                table: "Client");

            migrationBuilder.DropForeignKey(
                name: "FK_Client_Group_Group2Id",
                table: "Client");

            migrationBuilder.DropForeignKey(
                name: "FK_Client_Group_GroupId",
                table: "Client");

            migrationBuilder.DropIndex(
                name: "IX_Client_Group1Id",
                table: "Client");

            migrationBuilder.DropIndex(
                name: "IX_Client_Group2Id",
                table: "Client");

            migrationBuilder.DropIndex(
                name: "IX_Client_GroupId",
                table: "Client");

            migrationBuilder.DropColumn(
                name: "Group1Expiry",
                table: "Client");

            migrationBuilder.DropColumn(
                name: "Group1Id",
                table: "Client");

            migrationBuilder.DropColumn(
                name: "Group2Expiry",
                table: "Client");

            migrationBuilder.DropColumn(
                name: "Group2Id",
                table: "Client");

            migrationBuilder.DropColumn(
                name: "GroupExpiry",
                table: "Client");

            migrationBuilder.DropColumn(
                name: "GroupId",
                table: "Client");

            migrationBuilder.CreateTable(
                name: "Contract",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    GroupId = table.Column<int>(nullable: false),
                    ClientId = table.Column<int>(nullable: false),
                    EntryDate = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contract", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Contract_Client_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Client",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Contract_Group_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Group",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Contract_ClientId",
                table: "Contract",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_Contract_GroupId",
                table: "Contract",
                column: "GroupId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contract");

            migrationBuilder.AddColumn<DateTime>(
                name: "Group1Expiry",
                table: "Client",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Group1Id",
                table: "Client",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Group2Expiry",
                table: "Client",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Group2Id",
                table: "Client",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "GroupExpiry",
                table: "Client",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "GroupId",
                table: "Client",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Client_Group1Id",
                table: "Client",
                column: "Group1Id");

            migrationBuilder.CreateIndex(
                name: "IX_Client_Group2Id",
                table: "Client",
                column: "Group2Id");

            migrationBuilder.CreateIndex(
                name: "IX_Client_GroupId",
                table: "Client",
                column: "GroupId");

            migrationBuilder.AddForeignKey(
                name: "FK_Client_Group_Group1Id",
                table: "Client",
                column: "Group1Id",
                principalTable: "Group",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Client_Group_Group2Id",
                table: "Client",
                column: "Group2Id",
                principalTable: "Group",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Client_Group_GroupId",
                table: "Client",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
