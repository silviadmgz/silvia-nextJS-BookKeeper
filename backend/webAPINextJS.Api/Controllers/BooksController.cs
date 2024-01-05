using Microsoft.AspNetCore.Mvc;
using webAPINextJS.Api.Dtos;
using webAPINextJS.Api.Services;

namespace webAPINextJS.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class BooksController : ControllerBase
{
    private readonly IBookKeeper _bookKeeper;

    public BooksController(IBookKeeper bookKeeper)
    {
        _bookKeeper = bookKeeper;
    }

    [HttpPost]
    public IActionResult CreateBook(BookRequest request)
    {
        _bookKeeper.CreateBook(request);
        return Ok();
    }
}
