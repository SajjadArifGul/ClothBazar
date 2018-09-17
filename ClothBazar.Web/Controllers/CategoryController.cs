using ClothBazar.Entities;
using ClothBazar.Services;
using ClothBazar.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;

namespace ClothBazar.Web.Controllers
{
    //[Authorize(Roles = "Admin")]
    public class CategoryController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CategoryTable(string search, int? pageNo)
        {
            CategorySearchViewModel model = new CategorySearchViewModel();
            model.SearchTerm = search;

            pageNo = pageNo.HasValue ? pageNo.Value > 0 ? pageNo.Value : 1 : 1;

            var totalRecords = CategoriesService.Instance.GetCategoriesCount(search);
            model.Categories = CategoriesService.Instance.GetCategories(search, pageNo.Value);

            if (model.Categories != null)
            {
                model.Pager = new Pager(totalRecords, pageNo, 3);
                
                return PartialView("_CategoryTable", model);
            }
            else
            {
                return HttpNotFound();
            }
        }

        #region Creation

        [HttpGet]
        public ActionResult Create()
        {
            NewCategoryViewModel model = new NewCategoryViewModel();

            return PartialView(model);
        }

        [HttpPost]
        public ActionResult Create(NewCategoryViewModel model)
        {
            if (ModelState.IsValid)
            {
                var newCategory = new Category();
                newCategory.Name = model.Name;
                newCategory.Description = model.Description;
                newCategory.ImageURL = model.ImageURL;
                newCategory.isFeatured = model.isFeatured;

                CategoriesService.Instance.SaveCategory(newCategory);

                return RedirectToAction("CategoryTable");
            }
            else
            {
                return new HttpStatusCodeResult(500);
            }
        }

        #endregion

        #region Updation

        [HttpGet]
        public ActionResult Edit(int ID)
        {
            EditCategoryViewModel model = new EditCategoryViewModel();

            var category = CategoriesService.Instance.GetCategory(ID);

            model.ID = category.ID;
            model.Name = category.Name;
            model.Description = category.Description;
            model.ImageURL = category.ImageURL;
            model.isFeatured = category.isFeatured;
            
            return PartialView(model);
        }

        [HttpPost]
        public ActionResult Edit(EditCategoryViewModel model)
        {
            var existingCategory = CategoriesService.Instance.GetCategory(model.ID);
            existingCategory.Name = model.Name;
            existingCategory.Description = model.Description;
            existingCategory.ImageURL = model.ImageURL;
            existingCategory.isFeatured = model.isFeatured;

            CategoriesService.Instance.UpdateCategory(existingCategory);

            return RedirectToAction("CategoryTable");
        }

        #endregion

        [HttpPost]
        public ActionResult Delete(int ID)
        {
            CategoriesService.Instance.DeleteCategory(ID);

            return RedirectToAction("CategoryTable");
        }
     }
}