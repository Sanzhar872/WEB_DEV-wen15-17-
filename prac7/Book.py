class Book:
    def __init__(self, tittle, author, isbn, is_available):
        self.tittle = tittle
        self.author = author
        self.isbn = isbn
        self.is_available = is_available

    def borrow(self):
        if self.is_available:
            self.is_available = False
            return True

        return False

    def return_book(self):
        self.is_available = True
        return True

    def get_info(self):
        return f"Tittle is {self.tittle}, author is {self.author}, isbn: {self.isbn}"

    def __str__(self):
        if self.is_available:
            return f" {self.tittle} by {self.author}  is available"
        else:
            return f" {self.tittle} by {self.author}  is borrowed"

class Ebook(Book):
    def __init__(self, tittle, author, isbn, is_available, file_size_mb, format):
        super().__init__(tittle, author, isbn, is_available)
        self.file_size_mb = file_size_mb
        self.format = format

    def get_info(self):
        return f"{self.tittle} (Ebook: {self.format}, {self.file_size_mb} MB)"

    def borrow(self):
        return True




class AudioBook(Book):
    def __init__(self, tittle, author, isbn, is_available, duration_hours, narrator):
        super().__init__(tittle, author, isbn,is_available)
        self.duration_hours = duration_hours
        self.narrator = narrator

    def get_info(self):
        return f"{self.tittle} (duration: {self.duration_hours}, {self.narrator} MB)"




class PrintedBook(Book):
    def __init__(self, tittle, author, isbn, is_available, page, condition):
        super().__init__(tittle, author, isbn, is_available)
        self.page = page
        self.condition = condition

    def get_info(self):
        return f"Tittle is {self.tittle}, pages {self.page}, condition: {self.condition}"


