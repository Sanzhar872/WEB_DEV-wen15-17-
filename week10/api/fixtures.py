import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

# Очищаем старые данные
Product.objects.all().delete()
Category.objects.all().delete()

# Категории
keyboard = Category.objects.create(name="Keyboard")
mouse = Category.objects.create(name="Mouse")
laptop = Category.objects.create(name="Laptop")
headphones = Category.objects.create(name="Headphones")

# Продукты
products = [
    Product(name='Клавиатура AULA S75 Pro', description='Смело тайпи и играй в CS2', price=24779, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/pc4/p05/67516637.jpg?format=gallery-medium', link='https://kaspi.kz/shop/p/aula-s75-pro-chernyi-146496564/', likes=0, count=10, is_active=True, category=keyboard),
    Product(name='Клавиатура EPOMAKER x AULA F75', description='хорошая клавиатура', price=21191, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/h6b/h01/85829328797726.jpg?format=gallery-large', link='https://kaspi.kz/shop/p/epomaker-x-aula-f75-belyi-118709353/', likes=0, count=10, is_active=True, category=keyboard),
    Product(name='Клавиатура MCHOSE JET75', description='good keyboard', price=37538, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/p4b/pea/48721417.jpg?format=gallery-medium', link='https://kaspi.kz/shop/p/mchose-jet75-chernyi-138412488/', likes=0, count=10, is_active=True, category=keyboard),
    Product(name='Клавиатура DARK PROJECT KD68B', description='a little bit expensive keyboard', price=68004, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/h03/hae/84635207663646.jpg?format=gallery-large', link='https://kaspi.kz/shop/p/dark-project-kd68b-seryi-115056627/', likes=0, count=10, is_active=True, category=keyboard),
    Product(name='Клавиатура Motospeed SK84', description='Смело тайпи и играй в CS2', price=19800, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/pec/p61/73168764.png?format=gallery-medium', link='https://kaspi.kz/shop/p/motospeed-sk84-seryi-139481777/', likes=0, count=10, is_active=True, category=keyboard),

    Product(name='Мышь AULA SC580', description='Смело кликай и играй в CS2', price=11900, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/h6e/he7/84872253014046.jpg?format=gallery-medium', link='https://kaspi.kz/shop/p/aula-sc580-krasnyi-115847302/', likes=0, count=10, is_active=True, category=mouse),
    Product(name='Мышь Acer OMR050 Silent Edition', description='Самый дешевая мышка', price=3778, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/h21/h13/86011830927390.png?format=gallery-medium', link='https://kaspi.kz/shop/p/acer-omr050-silent-edition-serebristyi-119387308/', likes=0, count=10, is_active=True, category=mouse),
    Product(name='Мышь AULA SC590 Pro', description='20000 dpi а такую суму хорошо', price=24988, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/p5d/p55/91611982.png?format=gallery-medium', link='https://kaspi.kz/shop/p/aula-sc590-pro-chernyi-153607110/', likes=0, count=10, is_active=True, category=mouse),
    Product(name='Мышь Logitech PRO X2 SUPERSTRIKE', description='мышка за больше 100 000', price=119530, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/p26/p7d/99685365.png?format=gallery-medium', link='https://kaspi.kz/shop/p/logitech-pro-x2-superstrike-chernyi-155597926/', likes=0, count=10, is_active=True, category=mouse),
    Product(name='Мышь Attack Shark X11', description='Лутшая мышка за свою цену', price=11588, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/hca/h3f/86489028067358.jpg?format=gallery-medium', link='https://kaspi.kz/shop/p/attack-shark-x11-chernyi-121204121/', likes=0, count=10, is_active=True, category=mouse),

    Product(name='Ноутбук Lenovo LOQ 83DV01CLRK', description='Купи этот бешенный ноут и играй CS2 дни на пролет', price=549989, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/p17/p3c/99725537.jpg?format=gallery-medium', link='https://kaspi.kz/shop/p/lenovo-loq-83dv01clrk-15irx9-15-6-16-gb-ssd-1000-gb-bez-os-83dv01clrk-155610101/', likes=0, count=10, is_active=True, category=laptop),
    Product(name='Ноутбук Apple MacBook Pro 16.2"', description='3 лимона, ноут дороже меня', price=3083990, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/pc4/p1d/121678523.jpg?format=gallery-medium', link='https://kaspi.kz/shop/p/apple-macbook-pro-16-2-48-gb-ssd-2048-gb-macos-mge94ru-a-161471197/', likes=0, count=10, is_active=True, category=laptop),
    Product(name='Ноутбук ASUS ProArt P16', description='4 лимона, боже мой что за цены', price=3999980, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/pbd/p02/93188267.png?format=gallery-medium', link='https://kaspi.kz/shop/p/asus-proart-p16-16-64-gb-m-2-4000-gb-win-11-pro-h7606wx-se002x-153888660/', likes=0, count=10, is_active=True, category=laptop),
    Product(name='Ноутбук Lenovo Legion Pro 7', description='Легион самое класное не лагает', price=2565888, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/h54/he7/80793604915230.jpg?format=gallery-medium', link='https://kaspi.kz/shop/p/lenovo-legion-pro-7-16-32-gb-ssd-1000-gb-bez-os-16irx8-82wr0012rk-110388808/', likes=0, count=10, is_active=True, category=laptop),
    Product(name='Ноутбук Apple MacBook Air 13 2020', description='The most popular MacBook', price=469540, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-large', link='https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/', likes=0, count=10, is_active=True, category=laptop),

    Product(name='Наушники AULA G7 белый', description='смело общяйся и играй в CS2', price=11614, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/p9f/p39/57202752.jpg?format=gallery-medium', link='https://kaspi.kz/shop/p/naushniki-aula-g7-belyi-143693130/', likes=0, count=10, is_active=True, category=headphones),
    Product(name='Наушники JBL Tune 720BT', description='смело общяйся и играй в CS2', price=25500, rating=5.0, image='https://resources.cdn-kaspi.kz/img/m/p/h2a/h3e/86333130342430.jpg?format=gallery-large', link='https://kaspi.kz/shop/p/naushniki-jbl-tune-720bt-chernyi-111085447/', likes=0, count=10, is_active=True, category=headphones),
    Product(name='Наушники Logitech G435', description='с виду красивый наушник', price=34990, rating=4.9, image='https://resources.cdn-kaspi.kz/img/m/p/h01/h96/63864480628766.jpg?format=gallery-medium', link='https://kaspi.kz/shop/p/naushniki-logitech-g435-fioletovyi-107183308/', likes=0, count=10, is_active=True, category=headphones),
    Product(name='Наушники Logitech G733 LightSpeed', description='Люби меня люби', price=81411, rating=4.9, image='https://resources.cdn-kaspi.kz/img/m/p/h20/hba/64060180627486.jpg?format=gallery-medium', link='https://kaspi.kz/shop/p/naushniki-logitech-g733-lightspeed-fioletovyi-101634657/', likes=0, count=10, is_active=True, category=headphones),
    Product(name='Наушники Logitech G935', description='не зная почему но этот наушник стоит 100К', price=99980, rating=4.9, image='https://resources.cdn-kaspi.kz/img/m/p/hd8/h0a/63878971293726.jpg?format=gallery-large', link='https://kaspi.kz/shop/p/naushniki-logitech-g935-chernyi-100384535/', likes=0, count=10, is_active=True, category=headphones),
]

Product.objects.bulk_create(products)
print("Done! 4 categories and 20 products created.")