using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Administration
{
    
    [Route("User/UserView")]
    public class UserController : Controller
    {
            public IActionResult UserView()
    {
        return View("/Administration/UserManagement/UserView.cshtml");
    }
    
    }
}