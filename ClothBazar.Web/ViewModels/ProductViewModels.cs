using ClothBazar.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClothBazar.Web.ViewModels
{
    public class ProductSearchViewModel
    {
        public int PageNo { get; set; }
        public List<Product> Products { get; set; }
        public string SearchTerm { get; set; }
    }

    public class NewProductViewModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int CategoryID { get; set; }
        public string ImageURL { get; set; }

        public List<Category> AvailableCategories { get; set; }
    }

    public class EditProductViewModel
    {
        public int ID { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int CategoryID { get; set; }
        public string ImageURL { get; set; }

        public List<Category> AvailableCategories { get; set; }
    }
}