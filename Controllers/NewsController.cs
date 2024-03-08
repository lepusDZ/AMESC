using Microsoft.AspNetCore.Mvc;
using AMESC.Models;
using System.Collections.Generic;

namespace AMESC.Controllers;

[ApiController]
[Route("[controller]")]
public class NewsController : ControllerBase
{
    private static readonly List<NewsItem> NewsItems = new List<NewsItem>
    {
        // static news items built for testing purposes only, actual product will fetch from a data
        new NewsItem { Id = 1, Title = "News Title 1", Body = "News Body 1", ImageUrl = "https://example.com/image1.jpg", Date = DateTime.Now },
    };

    [HttpGet]
    public IEnumerable<NewsItem> Get()
    {
        return NewsItems;
    }
}
