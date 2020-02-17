using Microsoft.EntityFrameworkCore.Migrations;

namespace CoffeeproofBullet.Migrations
{
    public partial class Init_no11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "AmountEntries",
                table: "ClientEntriesLeft",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<bool>(
                name: "InfniteAmountOfEntires",
                table: "ClientEntriesLeft",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InfniteAmountOfEntires",
                table: "ClientEntriesLeft");

            migrationBuilder.AlterColumn<int>(
                name: "AmountEntries",
                table: "ClientEntriesLeft",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
