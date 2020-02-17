using Microsoft.EntityFrameworkCore.Migrations;

namespace CoffeeproofBullet.Migrations
{
    public partial class no14 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FacilityTypeID",
                table: "SubscriptionElement",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_SubscriptionElement_FacilityTypeID",
                table: "SubscriptionElement",
                column: "FacilityTypeID");

            migrationBuilder.AddForeignKey(
                name: "FK_SubscriptionElement_FacilityType_FacilityTypeID",
                table: "SubscriptionElement",
                column: "FacilityTypeID",
                principalTable: "FacilityType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SubscriptionElement_FacilityType_FacilityTypeID",
                table: "SubscriptionElement");

            migrationBuilder.DropIndex(
                name: "IX_SubscriptionElement_FacilityTypeID",
                table: "SubscriptionElement");

            migrationBuilder.DropColumn(
                name: "FacilityTypeID",
                table: "SubscriptionElement");
        }
    }
}
