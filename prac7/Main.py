from Book import Ebook,AudioBook, PrintedBook


def get_available_books(books):
    return [b for b in books if b.is_available]

def get_books_by_authors(books, author_name):
    return [b for b in books if b.author.lower() == author_name.lower()]

def count_by_type(books):
    counts = {"Ebook": 0, "AudioBook": 0, "PrintedBook": 0}

    for b in books:
        counts[type(b).__name__]+=1

    return counts


books = [
    Ebook("python1", "sanzhar", "123",True , 15.5, "PDF"),
    Ebook("python2", "sanzhar", "1234",True ,16.5, "PDF"),
    AudioBook("AudiobookPython1", "sanzhar",True, "12345", 6, "Ali"),
    AudioBook("AudiobookPython2", "sanzhar",True, "12346", 5, "Ali"),
    PrintedBook("PrintedPython1", "sanzhar",True, "125", 200, "good"),
    PrintedBook("PrintedPython2", "sanzhar",True, "126", 250, "bad"),
]

for book in books:
    print(book)

print("borrow 2 books: ")
if books[0].borrow():
    print("succes")
else:
    print("failure")

if books[1].borrow():
    print("succes")
else:
    print("failure")

if books[4].borrow():
    print("succes")
else:
    print("failure")

if books[4].borrow():
    print("succes")
else:
    print("failure")

print("return one book: ")
if books[4].return_book():
    print("success")
else:
    print("failure")

print("all available books: ")
for b in books:
    print(b)

print(f" {len(get_available_books(books))} available" )

for b in get_books_by_authors(books, "sanzhar"):
    print(f"{b.tittle}, {b.author}")

counts = count_by_type(books)
for b_type, count in counts.items():
    print(f"{b_type}: {count} ")


for b in books:
    b.get_info()