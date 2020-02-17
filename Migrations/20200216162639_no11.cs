using Microsoft.EntityFrameworkCore.Migrations;

namespace CoffeeproofBullet.Migrations
{
    public partial class no11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "SubscriptionElement",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Payment",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "SubscriptionElement");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Payment");
        }
    }
}
