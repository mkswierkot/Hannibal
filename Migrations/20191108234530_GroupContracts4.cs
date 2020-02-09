using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AuctorAPI.Migrations
{
    public partial class GroupContracts4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateIndex(
                name: "IX_Client_Group1Id",
                table: "Client",
                column: "Group1Id");

            migrationBuilder.CreateIndex(
                name: "IX_Client_Group2Id",
                table: "Client",
                column: "Group2Id");

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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Client_Group_Group1Id",
                table: "Client");

            migrationBuilder.DropForeignKey(
                name: "FK_Client_Group_Group2Id",
                table: "Client");

            migrationBuilder.DropIndex(
                name: "IX_Client_Group1Id",
                table: "Client");

            migrationBuilder.DropIndex(
                name: "IX_Client_Group2Id",
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
        }
    }
}
