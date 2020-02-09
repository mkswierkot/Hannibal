using Microsoft.EntityFrameworkCore.Migrations;

namespace AuctorAPI.Migrations
{
    public partial class navigationalPayment2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "PaymentCompleted",
                table: "Payment",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PaymentCompleted",
                table: "Payment");
        }
    }
}
