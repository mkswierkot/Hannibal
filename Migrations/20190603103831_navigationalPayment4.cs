using Microsoft.EntityFrameworkCore.Migrations;

namespace AuctorAPI.Migrations
{
    public partial class navigationalPayment4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDelted",
                table: "Training");

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Training",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Training");

            migrationBuilder.AddColumn<bool>(
                name: "IsDelted",
                table: "Training",
                nullable: false,
                defaultValue: false);
        }
    }
}
