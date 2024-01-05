using System.Security.Cryptography.X509Certificates;

namespace webAPINextJS.Api.Models;

public record AddNewBooks(string author, string title, string? publicationYear, string bookId);
