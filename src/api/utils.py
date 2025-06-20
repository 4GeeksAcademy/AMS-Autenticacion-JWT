class APIException(Exception):
    def __init__(self, message, status_code=400):
        super().__init__(message)
        self.message = message
        self.status_code = status_code

    def to_dict(self):
        return {"msg": self.message}

def generate_sitemap(app):
    return "Sitemap generado"