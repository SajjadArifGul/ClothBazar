namespace ClothBazar.Database.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedCategoryIDInProduct : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Products", "Category_ID", "dbo.Categories");
            DropIndex("dbo.Products", new[] { "Category_ID" });
            RenameColumn(table: "dbo.Products", name: "Category_ID", newName: "CategoryID");
            AlterColumn("dbo.Products", "CategoryID", c => c.Int(nullable: false));
            CreateIndex("dbo.Products", "CategoryID");
            AddForeignKey("dbo.Products", "CategoryID", "dbo.Categories", "ID", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Products", "CategoryID", "dbo.Categories");
            DropIndex("dbo.Products", new[] { "CategoryID" });
            AlterColumn("dbo.Products", "CategoryID", c => c.Int());
            RenameColumn(table: "dbo.Products", name: "CategoryID", newName: "Category_ID");
            CreateIndex("dbo.Products", "Category_ID");
            AddForeignKey("dbo.Products", "Category_ID", "dbo.Categories", "ID");
        }
    }
}
