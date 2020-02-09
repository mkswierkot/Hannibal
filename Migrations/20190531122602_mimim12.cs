using Microsoft.EntityFrameworkCore.Migrations;

namespace AuctorAPI.Migrations
{
    public partial class mimim12 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsGymUnlimited",
                table: "Subscription",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsMAUnlimited",
                table: "Subscription",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsGymUnlimited",
                table: "Subscription");

            migrationBuilder.DropColumn(
                name: "IsMAUnlimited",
                table: "Subscription");
        }
    }
}
