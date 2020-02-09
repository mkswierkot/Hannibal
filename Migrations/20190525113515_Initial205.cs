using Microsoft.EntityFrameworkCore.Migrations;

namespace AuctorAPI.Migrations
{
    public partial class Initial205 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AdditionalInfo",
                table: "TrainingEntry",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "FreeEntry",
                table: "TrainingEntry",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AdditionalInfo",
                table: "TrainingEntry");

            migrationBuilder.DropColumn(
                name: "FreeEntry",
                table: "TrainingEntry");
        }
    }
}
