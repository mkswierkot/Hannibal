using Microsoft.EntityFrameworkCore.Migrations;

namespace CoffeeproofBullet.Migrations
{
    public partial class no13 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SubscriptionElement_FacilityType_FacilityTypeID",
                table: "SubscriptionElement");

            migrationBuilder.DropForeignKey(
                name: "FK_SubscriptionElement_Subscription_SubscriptionId",
                table: "SubscriptionElement");

            migrationBuilder.DropIndex(
                name: "IX_SubscriptionElement_FacilityTypeID",
                table: "SubscriptionElement");

            migrationBuilder.DropColumn(
                name: "FacilityTypeID",
                table: "SubscriptionElement");

            migrationBuilder.RenameColumn(
                name: "SubscriptionId",
                table: "SubscriptionElement",
                newName: "SubscriptionID");

            migrationBuilder.RenameIndex(
                name: "IX_SubscriptionElement_SubscriptionId",
                table: "SubscriptionElement",
                newName: "IX_SubscriptionElement_SubscriptionID");

            migrationBuilder.AlterColumn<int>(
                name: "SubscriptionID",
                table: "SubscriptionElement",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_SubscriptionElement_Subscription_SubscriptionID",
                table: "SubscriptionElement",
                column: "SubscriptionID",
                principalTable: "Subscription",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SubscriptionElement_Subscription_SubscriptionID",
                table: "SubscriptionElement");

            migrationBuilder.RenameColumn(
                name: "SubscriptionID",
                table: "SubscriptionElement",
                newName: "SubscriptionId");

            migrationBuilder.RenameIndex(
                name: "IX_SubscriptionElement_SubscriptionID",
                table: "SubscriptionElement",
                newName: "IX_SubscriptionElement_SubscriptionId");

            migrationBuilder.AlterColumn<int>(
                name: "SubscriptionId",
                table: "SubscriptionElement",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "FacilityTypeID",
                table: "SubscriptionElement",
                type: "int",
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

            migrationBuilder.AddForeignKey(
                name: "FK_SubscriptionElement_Subscription_SubscriptionId",
                table: "SubscriptionElement",
                column: "SubscriptionId",
                principalTable: "Subscription",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
