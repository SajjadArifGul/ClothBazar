using ClothBazar.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClothBazar.Web.ViewModels
{
    public class CheckoutViewModel
    {
        public List<Product> CartProducts { get; set; }

        public List<int> CartProductIDs { get; set; }
    }

    public class ShopViewModel
    {
        public int MaximumPrice { get; set; }
        public List<Category> FeaturedCategories { get; set; }
        public List<Product> Products { get; set; }
        public int? SortBy { get; set; }
    }


    public class FilterProductsViewModel
    {
        public List<Product> Products { get; set; }
    }
}