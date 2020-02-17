using Microsoft.EntityFrameworkCore.Migrations;

namespace CoffeeproofBullet.Migrations
{
    public partial class Init_no12 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "SubscriptionExpired",
                table: "Client",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "SubscriptionExpired",
                table: "Client",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool));
        }
    }
}
