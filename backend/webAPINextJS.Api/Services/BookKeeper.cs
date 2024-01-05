using webAPINextJS.Api.Dtos;
using webAPINextJS.Api.Models;

namespace webAPINextJS.Api.Services;

public class BookKeeper : IBookKeeper
{
    private Dictionary<string, Books> _books;

    public BookKeeper()
    {
        _books = new Dictionary<string, Books>();
    }
    public void CreateBook(BookRequest request)
    {
        var bookToAdd = new Books(
            request.author,
            request.title,
            request.publicationYear,
            Guid.NewGuid().ToString());
        _books.Add(bookToAdd.bookId, bookToAdd);
    }

    public Dictionary<string, Books> GetListOfBooks() => _books;
}
