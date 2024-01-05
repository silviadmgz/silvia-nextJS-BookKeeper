using webAPINextJS.Api.Dtos;
using webAPINextJS.Api.Models;

namespace webAPINextJS.Api.Services;

public interface IBookKeeper
{
    void CreateBook(BookRequest request);

    Dictionary<string, Books> GetListOfBooks();
    // Dictionary<string, List<string>> RetrieveBooks();
}
