using ClothBazar.Services;
using ClothBazar.Web.ViewModels;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ClothBazar.Web.Controllers
{
    public class OrderController : Controller
    {
        private ApplicationSignInManager _signInManager;
        private ApplicationUserManager _userManager;

        public ApplicationSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.GetOwinContext().Get<ApplicationSignInManager>();
            }
            private set
            {
                _signInManager = value;
            }
        }
        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }

        // GET: Order
        public ActionResult Index(string userID, string status, int? pageNo)
        {
            OrdersViewModel model = new OrdersViewModel();
            model.UserID = userID;
            model.Status = status;

            pageNo = pageNo.HasValue ? pageNo.Value > 0 ? pageNo.Value : 1 : 1;
            var pageSize = ConfigurationsService.Instance.PageSize();

            model.Orders = OrdersService.Instance.SearchOrders(userID, status, pageNo.Value, pageSize);
            var totalRecords = OrdersService.Instance.SearchOrdersCount(userID, status);

            model.Pager = new Pager(totalRecords, pageNo, pageSize);

            return View(model);
        }

        public ActionResult Details(int ID)
        {
            OrderDetailsViewModel model = new OrderDetailsViewModel();

            model.Order = OrdersService.Instance.GetOrderByID(ID);

            if (model.Order != null)
            {
                model.OrderBy = UserManager.FindById(model.Order.UserID);
            }

            model.AvailableStatuses = new List<string>() { "Pending", "In Progress", "Delivered" };

            return View(model);
        }

        public JsonResult ChangeStatus(string status, int ID)
        {
            JsonResult result = new JsonResult();
            result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            
            result.Data = new { Success = OrdersService.Instance.UpdateOrderStatus(ID, status) };

            return result;
        }
    }
}