using Microsoft.EntityFrameworkCore.Migrations;

namespace AuctorAPI.Migrations
{
    public partial class OtherTypeEntry : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Locker",
                table: "TrainingEntry",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<string>(
                name: "OtherEntryType",
                table: "TrainingEntry",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OtherEntryType",
                table: "TrainingEntry");

            migrationBuilder.AlterColumn<int>(
                name: "Locker",
                table: "TrainingEntry",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
